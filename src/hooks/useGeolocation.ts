import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

const useLocationTracker = () => {
    const [location, setLocation] = useState<{ latitude: number, longitude: number, timestamp: number } | null>(null);

    useEffect(() => {
        const watchId = Geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                const timestamp = position.timestamp;

                setLocation({ latitude, longitude, timestamp });
            },
            error => console.log(error),
            { enableHighAccuracy: true, distanceFilter: 10, interval: 1000, fastestInterval: 500 }
        );

        return () => {
            Geolocation.clearWatch(watchId);
        };
    }, []);

    return location;
};

export default useLocationTracker;
