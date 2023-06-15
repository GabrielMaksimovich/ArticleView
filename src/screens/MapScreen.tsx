import React, {useEffect, useState} from 'react';
import MapView, {Polyline, LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import realm from '../models/Route';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {Block} from "../components/SimpleComponents/Block";
import {Button} from "../components/SimpleComponents/Button";
import {Text} from "../components/SimpleComponents/Text";

interface Location {
    latitude: number;
    longitude: number;
    timestamp: number;
}

interface Route {
    id: string;
    startTime: Date;
    endTime?: Date;
    locations: Location[];
}

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

    const startTracking = async () => {
        if (!(await requestLocationPermission())) {
            return;
        }

        // Create a new document ID for the current route
        const newRouteId = Math.random().toString(36).substring(2, 15); // You can generate your own unique ID here.

        const startTime = new Date();
        realm.write(() => {
            const newRoute = realm.create('Route', {
                id: newRouteId,
                startTime: startTime,
            });
        });

        const id = Geolocation.watchPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                setRoute((currentRoute) => {
                    const newRoute = [...currentRoute, { latitude, longitude }];
                    // Limit the length of the local route to prevent memory issues
                    while (newRoute.length > 1000) {
                        newRoute.shift();
                    }
                    return newRoute;
                });

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

    const addToRealm = async (newRouteId: string, latitude: number, longitude: number, timestamp: number) => {
        if (timestamp - lastFirestoreUpdate >= 10000) {
            realm.write(() => {
                const route = realm.objects<Route>('Route').filtered(`id == "${newRouteId}"`)[0];
                route.locations.push({ latitude, longitude, timestamp });
            });
            setLastFirestoreUpdate(timestamp);
        }
    };


    const stopTracking = async (idToStop?: string) => {
        if (watchId !== null) {
            Geolocation.clearWatch(watchId);
            setWatchId(null);

            const id = idToStop ?? routeId;
            if (id !== null) {
                const endTime = new Date();
                realm.write(() => {
                    const route = realm.objects<Route>('Route').filtered(`id == "${id}"`)[0];
                    route.endTime = endTime;
                });
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
