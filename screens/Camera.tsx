import React, { useRef, useState } from 'react';
import { Camera, CameraType } from 'react-native-camera-kit';
import { Button, Image, View } from 'react-native';
import RNFS from 'react-native-fs';

const CameraComponent = () => {
    const cameraRef = useRef<Camera | null>(null);
    const [pictureUri, setPictureUri] = useState<string | null>(null);

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

    return (
        <View style={{flex: 1}}>
            <Camera
                ref={cameraRef}
                style={{flex: 1}}
                cameraType={CameraType.Back}
            />
            <Button title="Take picture" onPress={captureImage} />
            {pictureUri && (
                <>
                    <Image source={{uri: pictureUri}} style={{width: 100, height: 100}} />
                    <Button title="Delete picture" onPress={deleteImage} />
                </>
            )}
        </View>
    );
};

export default CameraComponent;
