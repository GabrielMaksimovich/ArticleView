import React, { useRef } from 'react';
import { Button, Alert, Platform } from 'react-native';
import Signature, { SignatureViewRef } from 'react-native-signature-canvas';
import RNFS from 'react-native-fs';
import { Block } from '../components/SimpleComponents/Block';

const saveSignature = async (base64Signature: string) => {
    const fileName = 'signature.png';
    const folderPath = `${
        Platform.OS === 'android' ? RNFS.ExternalStorageDirectoryPath : RNFS.DocumentDirectoryPath
    }/YourAppName`;

    // Create folder if it doesn't exist
    if (!(await RNFS.exists(folderPath))) {
        await RNFS.mkdir(folderPath);
    }

    const imagePath = `${folderPath}/${fileName}`;

    await RNFS.writeFile(imagePath, base64Signature, 'base64');

    Alert.alert('Success', 'Signature saved to device storage successfully!');
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
            console.error('Failed to save signature:', error);
        }
    };

    return (
        <Block flex={1}>
            <Signature ref={signatureRef} onOK={handleOK} />
            <Button title="Save Signature" onPress={handleSave} />
        </Block>
    );
};

export default SignatureScreen;
