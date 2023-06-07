import React, {useEffect, useState} from 'react';
import MapView, {Polyline, LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';
import {PermissionsAndroid, Platform} from 'react-native';
import {Block} from "../components/SimpleComponents/Block";
import {Button} from "../components/SimpleComponents/Button";
import {Text} from "../components/SimpleComponents/Text";

const MapTracker: React.FC = () => {
    const [route, setRoute] = useState<LatLng[]>([]);
    const [watchId, setWatchId] = useState<number | null>(null);
    const [routeId, setRouteId] = useState<string | null>(null);

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
                setRoute((currentRoute) => [...currentRoute, { latitude, longitude }]);

                // Add the location point to the current route's subcollection
                await firestore()
                    .collection('routes')
                    .doc(newRouteId)
                    .collection('locationPoints')
                    .add({ latitude, longitude, timestamp: Date.now() });
            },
            (error) => console.log(error),
            { distanceFilter: 10, interval: 1000, fastestInterval: 500 }
        );

        setWatchId(id);
    };

    const stopTracking = async () => {
        if (watchId !== null) {
            Geolocation.clearWatch(watchId);
            setWatchId(null);
            // When you stop tracking, save the end time
            if (routeId !== null) {
                const endTime = new Date();
                await firestore()
                    .collection('routes')
                    .doc(routeId)
                    .set({ endTime: endTime.toISOString() }, { merge: true });
                setRouteId(null);
            }
        }
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
