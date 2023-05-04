import React from "react";
import {Camera, useCameraDevices } from 'react-native-vision-camera';
import {Block} from "../components/SimpleComponents/Block";
import {Linking, View} from "react-native";

const Scanner = () => {
    const [isDeviceReady, setIsDeviceReady] = React.useState(false);

    //Camera
    const devices = useCameraDevices();
    const device = devices.back;

    const requestCameraPermission = React.useCallback(async () => {
        const permission = await Camera.requestCameraPermission();

        if (permission === 'denied') await Linking.openSettings()
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


    //Handler
    function renderCamera() {
        if (!isDeviceReady || device == null) {
            return (
                <View
                    style={{
                        flex: 1,
                    }}
                />
            );
        } else {
            return (
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Camera
                        style={{ flex: 1 }}
                        device={device}
                        isActive={true}
                        enableZoomGesture
                    />
                </View>
            );
        }
    }


    return (
        <Block flex={1} alignItems={'center'} justifyContent={'center'}>
            {renderCamera()}
        </Block>
    );
};

export default Scanner;
