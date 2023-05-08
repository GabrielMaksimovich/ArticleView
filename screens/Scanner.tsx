import React, { useRef } from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
    Camera,
    CameraType,
} from 'react-native-camera-kit';
import RNFS from 'react-native-fs';
import { check, PERMISSIONS, request } from 'react-native-permissions';

const Scanner: React.FC = () => {
    const cameraRef = useRef<Camera>(null);

    const checkAndRequestPermissions = async () => {
        const cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);
        if (cameraPermission !== 'granted') {
            await request(PERMISSIONS.ANDROID.CAMERA);
        }
    };

    const handleCapture = async () => {
        if (cameraRef.current) {
            const { uri } = await cameraRef.current.capture();
            const filePath = uri.replace('file://', '');
            const pathSegments = filePath.split('/');
            const fileName = pathSegments[pathSegments.length - 1];
            const destFilePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
            await RNFS.moveFile(filePath, destFilePath);
            Alert.alert('Photo saved at', destFilePath);
        }
    };

    const handleReadCode = (event: any) => {
        Alert.alert('QR code found', event.nativeEvent.codeStringValue);
    };

    React.useEffect(() => {
        checkAndRequestPermissions();
    }, []);

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                cameraType={CameraType.Back}
                // Add barcode scanning props
                scanBarcode={true}
                onReadCode={handleReadCode}
                showFrame={true}
                laserColor="red"
                frameColor="white"
            />
            <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
                <Text>Capture</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    captureButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
});

export default Scanner;
