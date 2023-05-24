declare module 'react-native-sensor-manager' {
    export const SensorManager: {
        startAccelerometer: (delay: number) => void;
        stopAccelerometer: () => void;
        // Add other methods and properties as needed
    };
}
