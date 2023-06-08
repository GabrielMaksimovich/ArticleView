import React, {useEffect, useState} from 'react';
import MapView, {Polyline, LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {Block} from "../components/SimpleComponents/Block";
import {Button} from "../components/SimpleComponents/Button";
import {Text} from "../components/SimpleComponents/Text";

const MapTracker: React.FC = () => {
    const [route, setRoute] = useState<LatLng[]>([]);
    const [watchId, setWatchId] = useState<number | null>(null);
    const [routeId, setRouteId] = useState<string | null>(null);
    const [lastFirestoreUpdate, setLastFirestoreUpdate] = useState<number>(Date.now());
    const [motionlessTimeout, setMotionlessTimeout] = useState<number | null>(null);

    useEffect(() => {
        return () => {
            if (motionlessTimeout) {
                clearTimeout(motionlessTimeout);
            }
        };
    }, [motionlessTimeout]);

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Permission',
                        message: 'This App needs access to your location',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Location permission denied');
                    return false;
                }
            } catch (err) {
                console.warn(err);
                return false;
            }
        }
        return true;
    };

    const addToFirestore = async (newRouteId: string, latitude: number, longitude: number, timestamp: number) => {
        // Add the location point to the current route's subcollection
        if (timestamp - lastFirestoreUpdate >= 10000) {
            await firestore()
                .collection('routes')
                .doc(newRouteId)
                .collection('locationPoints')
                .add({ latitude, longitude, timestamp });
            setLastFirestoreUpdate(timestamp);
        }
    }

    const startTracking = async () => {
        if (!(await requestLocationPermission())) {
            return;
        }

        // Create a new document ID for the current route
        const newRouteId = firestore().collection('routes').doc().id;
        setRouteId(newRouteId);

        const startTime = new Date();
        await firestore()
            .collection('routes')
            .doc(newRouteId)
            .set({ startTime: startTime.toISOString() });

        const id = Geolocation.watchPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const timestamp = Date.now();

                setRoute((currentRoute) => {
                    const newRoute = [...currentRoute, { latitude, longitude }];
                    // Limit the length of the local route to prevent memory issues
                    while (newRoute.length > 1000) {
                        newRoute.shift();
                    }
                    return newRoute;
                });

                await addToFirestore(newRouteId, latitude, longitude, timestamp);

                // Cancel the previous motionless timeout
                if (motionlessTimeout) {
                    clearTimeout(motionlessTimeout);
                }

                // Set a new motionless timeout
                const timeoutId = setTimeout(() => {
                    Alert.alert('You have been motionless for 5 minutes. Stopping tracking.');
                    stopTracking(newRouteId);
                }, 5 * 60 * 1000);

                setMotionlessTimeout(timeoutId);
            },
            (error) => console.log(error),
            { distanceFilter: 10, interval: 1000, fastestInterval: 500 }
        );

        setWatchId(id);

        Alert.alert('Tracking is now active.');
    };


    const stopTracking = async (idToStop?: string) => {
        if (watchId !== null) {
            Geolocation.clearWatch(watchId);
            setWatchId(null);

            const id = idToStop ?? routeId;
            if (id !== null) {
                const endTime = new Date();
                await firestore()
                    .collection('routes')
                    .doc(id)
                    .set({ endTime: endTime.toISOString() }, { merge: true });
                setRouteId(null);
            }
        }

        if (motionlessTimeout) {
            clearTimeout(motionlessTimeout);
        }

        Alert.alert('Tracking has been stopped.');
    };

    return (
        <Block flex={1}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsUserLocation={true}
                zoomControlEnabled={true}
            >
                <Polyline coordinates={route} />
            </MapView>
            <Block
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
                paddingHorizontal={20}
                paddingVertical={20}
            >
            <Button
                onPress={startTracking}
                paddingVertical={10}
                paddingHorizontal={10}
                borderRadius={'25px'}
                bg={'rgba(0, 0, 0, 0.5)'}
            >
                <Text color={'#fff'}>Start Tracking</Text>
            </Button>
            <Button
                onPress={stopTracking}
                paddingVertical={10}
                paddingHorizontal={10}
                borderRadius={'25px'}
                bg={'rgba(0, 0, 0, 0.5)'}
            >
                <Text color={'#fff'}>Stop Tracking</Text>
            </Button>
            </Block>
        </Block>
    );
};

export default MapTracker;
