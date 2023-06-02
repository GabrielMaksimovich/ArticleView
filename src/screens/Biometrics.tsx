import React from 'react';
import { Alert } from 'react-native';
import { Block } from '../components/SimpleComponents/Block';
import { Button } from '../components/SimpleComponents/Button';
import { Text } from '../components/SimpleComponents/Text';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const BiometricsTest: React.FC = () => {
    const handleBiometricsPress = async () => {
        const rnBiometrics = new ReactNativeBiometrics();
        const { biometryType } = await rnBiometrics.isSensorAvailable();

        if (biometryType === BiometryTypes.FaceID) {
            console.log('FaceID is supported');

            const promptMessage = 'Confirm your biometrics'
            const payload = 'Transaction to be signed'

            rnBiometrics.createSignature({
                promptMessage,
                payload
            })
                .then((resultObject) => {
                    const { success, signature } = resultObject;

                    if (success) {
                        console.log(signature);
                        Alert.alert('Authentication successful');
                    } else {
                        Alert.alert('Authentication failed');
                    }
                });
        } else {
            console.log('FaceID not supported');
            // Handle other biometric types here if needed
        }
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
