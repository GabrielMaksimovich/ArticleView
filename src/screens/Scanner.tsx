import React, { useRef } from 'react';
import {Alert, StyleSheet } from 'react-native';
import {
    Camera,
    CameraType,
} from 'react-native-camera-kit';
import RNFS from 'react-native-fs';
import { check, PERMISSIONS, request } from 'react-native-permissions';
import {Block} from "../components/SimpleComponents/Block";
import {Button} from "../components/SimpleComponents/Button";
import {Text} from "../components/SimpleComponents/Text";

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
        <Block flex={1}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                cameraType={CameraType.Back}
                scanBarcode={true}
                onReadCode={handleReadCode}
                showFrame={true}
                laserColor="red"
                frameColor="white"
            />
            <Button
                position={'absolute'}
                bottom={'30px'}
                alignSelf={'center'}
                onPress={handleCapture}
            >
                <Text>Capture</Text>
            </Button>
        </Block>
    );
};

const styles = StyleSheet.create({
    camera: {
        flex: 1,
    }
});

export default Scanner;
