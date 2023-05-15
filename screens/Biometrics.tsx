import React from 'react';
import { Alert } from 'react-native';
import Biometrics from 'react-native-biometrics';
import { Block } from '../components/SimpleComponents/Block';
import { Button } from '../components/SimpleComponents/Button';
import { Text } from '../components/SimpleComponents/Text';
import ReactNativeBiometrics from "react-native-biometrics";

const BiometricsTest: React.FC = () => {
    const handleBiometricsPress = () => {
        const rnBiometrics = new ReactNativeBiometrics();

        rnBiometrics.isSensorAvailable()
            .then((result) => {
                if (!result.available) {
                    Alert.alert('Biometrics not supported');
                    return;
                }

                if (result.biometryType === 'FaceID') {
                    console.log('FaceID is supported');
                    // Perform Face ID authentication here
                } else {
                    console.log('FaceID not supported');
                    // Handle other biometric types here if needed
                }
            })
            .catch((error: any) => {
                Alert.alert('Biometrics not supported', 'Error: ' + error.message);
            });
    };

    return (
        <Block flex={1} justifyContent={'center'} alignItems={'center'}>
            <Button onPress={handleBiometricsPress}>
                <Text>Use Face ID</Text>
            </Button>
        </Block>
    );
};

export default BiometricsTest;
