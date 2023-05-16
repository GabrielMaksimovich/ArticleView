import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import RNFS from 'react-native-fs';

const Picture: React.FC = () => {
    const [imageUri, setImageUri] = useState('');

    const handleCapture = () => {
        launchCamera(
            {
                mediaType: 'photo',
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorMessage) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    const { assets } = response;
                    if (assets && assets.length > 0) {
                        const source = assets[0].uri;
                        if (source) {
                            ImageResizer.createResizedImage(source, 500, 500, 'JPEG', 80)
                                .then(resizedImage => {
                                    setImageUri(resizedImage.uri);
                                    const destPath = `${RNFS.DocumentDirectoryPath}/resizedImage.jpg`;

                                    RNFS.copyFile(resizedImage.uri, destPath)
                                        .then(() => console.log('Image saved'))
                                        .catch(err => console.log(err));
                                })
                                .catch(err => console.log(err));
                        }
                    }
                }
            }
        );
    };

    const handleRemove = () => {
        setImageUri('');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Capture Image" onPress={handleCapture} />
            {imageUri ? (
                <>
                    <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
                    <Button title="Remove Image" onPress={handleRemove} />
                </>
            ) : null}
        </View>
    );
};

export default Picture;
