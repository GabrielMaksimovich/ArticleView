import React, {useEffect, useState} from 'react';
import MapView, {Polyline, LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';
import {PermissionsAndroid, Platform} from 'react-native';

const MapTracker: React.FC = () => {
    const [route, setRoute] = useState<LatLng[]>([]);

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

    useEffect(() => {
        const startTracking = async () => {
            if (!(await requestLocationPermission())) {
                return;
            }

            const watchId = Geolocation.watchPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setRoute((currentRoute) => [...currentRoute, { latitude, longitude }]);

                    firestore()
                        .collection('routes')
                        .add({ latitude, longitude, timestamp: Date.now() });
                },
                (error) => console.log(error),
                { distanceFilter: 10, interval: 1000, fastestInterval: 500 }
            );

            return () => Geolocation.clearWatch(watchId);
        };

        startTracking();
    }, []);

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            showsMyLocationButton={true}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Polyline coordinates={route} />
        </MapView>
    );
};

export default MapTracker;
