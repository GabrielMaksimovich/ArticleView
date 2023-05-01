import React, { useRef } from 'react';
import { Button, Alert } from 'react-native';
import Signature, { SignatureViewRef } from 'react-native-signature-canvas';
import RNFS from 'react-native-fs';
import CameraRoll  from "@react-native-camera-roll/camera-roll";
import {Block} from "../components/SimpleComponents/Block";

const saveSignature = async (base64Signature: string) => {
    const imagePath = `${RNFS.DocumentDirectoryPath}/signature.png`;

    await RNFS.writeFile(imagePath, base64Signature, 'base64');

    CameraRoll.save(imagePath, { type: 'photo', album: 'YourAppName' })
        .then(() => {
            Alert.alert('Success', 'Signature saved to gallery successfully!');
        })
        .catch((error: string) => {
            Alert.alert('Error', 'Failed to save the signature to the gallery.');
            console.error(error);
        });
};

const SignatureScreen = () => {
    const signatureRef = useRef<SignatureViewRef>(null);

    const handleSave = () => {
        signatureRef.current?.readSignature();
    };

    const handleOK = async (base64Signature: string) => {
        try {
            await saveSignature(base64Signature);
        } catch (error) {
            console.error("Failed to save signature:", error);
        }
    };

    return (
        <Block flex={1}>
            <Signature
                ref={signatureRef}
                onOK={handleOK}
            />
            <Button title="Save Signature" onPress={handleSave} />
        </Block>
    );
};

export default SignatureScreen;
