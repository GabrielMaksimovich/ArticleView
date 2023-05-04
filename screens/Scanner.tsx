import React from "react";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { Linking, View, StyleSheet } from "react-native";
import { Platform, PermissionsAndroid } from "react-native";

const Scanner = () => {
    const [isDeviceReady, setIsDeviceReady] = React.useState(false);

    // Camera
    const devices = useCameraDevices();
    const device = devices.back;

    const requestCameraPermission = React.useCallback(async () => {
        try {
            if (Platform.OS === "android") {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: "Camera Permission",
                        message: "This app needs camera access",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK",
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    setIsDeviceReady(true);
                } else {
                    console.log("Camera permission denied");
                }
            } else {
                const permission = await Camera.requestCameraPermission();
                if (permission === "authorized") {
                    setIsDeviceReady(true);
                } else {
                    console.log("Camera permission denied");
                }
            }
        } catch (err) {
            console.warn(err);
        }
    }, []);

    React.useEffect(() => {
        try {
            requestCameraPermission().then(() => {
                setIsDeviceReady(true);
            });
        } catch (e) {
            console.log(e);
        }
    }, []);

    // Handler
    function renderCamera() {
        if (!isDeviceReady || device == null) {
            console.log("Devices: ", devices);
            return <View style={styles.container} />;
        } else {
            return (
                <View style={styles.container}>
                    <Camera
                        style={styles.camera}
                        device={device}
                        isActive={true}
                        enableZoomGesture
                    />
                </View>
            );
        }
    }

    return <View style={styles.container}>{renderCamera()}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
});

export default Scanner;
