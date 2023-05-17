import React, { useState } from 'react';
import { launchCamera } from 'react-native-image-picker';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import RNFS from 'react-native-fs';
import {Block} from "../components/SimpleComponents/Block";
import {Button} from "../components/SimpleComponents/Button";
import {Image} from "../components/SimpleComponents/Image";
import {Text} from "../components/SimpleComponents/Text";

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
        <Block
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Button onPress={handleCapture}>
                <Text>Capture Image</Text>
            </Button>
            {imageUri ? (
                <>
                    <Image
                        source={{ uri: imageUri }}
                        width={200}
                        height={200}
                        onError={() => console.log("error")}
                        onLoad={() => console.log("loaded")}
                    />
                    <Button onPress={handleRemove}>
                        <Text>Remove Image</Text>
                    </Button>
                </>
            ) : null}
        </Block>
    );
};

export default Picture;
