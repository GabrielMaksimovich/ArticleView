import React from 'react';
import {View, Button, Alert} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const BiometricsTest: React.FC = () => {
    const handleBiometricsPress = () => {
        const rnBiometrics = new ReactNativeBiometrics();

        rnBiometrics.isSensorAvailable()
            .then((resultObject) => {
                const { available, biometryType } = resultObject

                if (!available) {
                    Alert.alert('Biometrics not supported');
                    return;
                }

                if (biometryType === BiometryTypes.FaceID) {
                    // You can add any additional handling for Face ID here
                    console.log('FaceID is supported')
                } else if (biometryType === BiometryTypes.TouchID) {
                    console.log('TouchID is supported')
                } else if (biometryType === BiometryTypes.Biometrics) {
                    console.log('Biometrics is supported')
                } else {
                    console.log('Biometrics not supported')
                }

                rnBiometrics.biometricKeysExist()
                    .then((resultObject) => {
                        const { keysExist } = resultObject

                        if (!keysExist) {
                            rnBiometrics.createKeys()
                                .then((resultObject) => {
                                    console.log('Keys created!')
                                })
                                .catch((error: any) => {
                                    Alert.alert('Key creation failed', 'Error: ' + error.message);
                                });
                        }

                        const epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString();
                        const payloadData = epochTimeSeconds + 'some message';

                        const payload = {
                            promptMessage: 'Confirm your identity',
                            cancelButtonText: 'Cancel',
                            payload: payloadData,
                        };

                        rnBiometrics.createSignature(payload)
                            .then((resultObject) => {
                                const { success, signature } = resultObject

                                if (success) {
                                    Alert.alert('Identity confirmed', 'Signature: ' + signature);
                                } else {
                                    Alert.alert('Identity confirmation failed');
                                }
                            })
                            .catch((error: any) => {
                                Alert.alert('Identity confirmation failed', 'Error: ' + error.message);
                            });
                    })
            })
            .catch((error: any) => {
                Alert.alert('Biometrics not supported', 'Error: ' + error.message);
            });
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="Use biometrics" onPress={handleBiometricsPress} />
        </View>
    );
};

export default BiometricsTest;
