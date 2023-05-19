import React, { useRef, useState } from 'react';
import { Camera, CameraType } from 'react-native-camera-kit';
import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNFS from 'react-native-fs';

const CameraComponent = () => {
    const cameraRef = useRef<Camera | null>(null);
    const [pictureUri, setPictureUri] = useState<string | null>(null);
    const navigation = useNavigation();

    const captureImage = async () => {
        if (cameraRef.current) {
            try {
                const image = await cameraRef.current.capture();
                const imageUri = image.uri;
                setPictureUri(imageUri);
            } catch (error) {
                console.log('Error capturing image: ', error);
            }
        }
    };

    const deleteImage = () => {
        if (pictureUri) {
            RNFS.unlink(pictureUri)
                .then(() => setPictureUri(null))
                .catch((err) => console.log(err));
        }
    };

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={{flex: 1}}
                cameraType={CameraType.Back}
            />
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.button} onPress={goBack}>
                    <Text style={styles.text}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={captureImage}>
                    <Text style={styles.text}>Take picture</Text>
                </TouchableOpacity>
                {pictureUri && (
                    <View style={styles.previewContainer}>
                        <Image source={{uri: pictureUri}} style={styles.previewImage} />
                        <TouchableOpacity style={styles.button} onPress={deleteImage}>
                            <Text style={styles.text}>Delete picture</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    overlay: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    button: {
        padding: 10,
        borderRadius: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent
    },
    text: {
        color: '#fff',
    },
    previewContainer: {
        alignItems: 'center',
    },
    previewImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    }
});

export default CameraComponent;
