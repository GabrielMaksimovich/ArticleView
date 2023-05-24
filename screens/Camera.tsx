import React, { useRef, useState } from 'react';
import { Camera, CameraType } from 'react-native-camera-kit';
import { useNavigation } from '@react-navigation/native';
import RNFS from 'react-native-fs';
import {Block} from "../components/SimpleComponents/Block";
import {Text} from "../components/SimpleComponents/Text";
import {Image} from "../components/SimpleComponents/Image";
import {Button} from "../components/SimpleComponents/Button";

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
        <Block flex={1}>
            <Camera
                ref={cameraRef}
                style={{flex: 1}}
                cameraType={CameraType.Back}
            />
            <Block
                position={'absolute'}
                bottom={'20px'}
                left={'0px'}
                right={'0px'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
                paddingHorizontal={20}
            >
                <Button
                    onPress={goBack}
                    paddingVertical={10}
                    paddingHorizontal={10}
                    borderRadius={'25px'}
                    bg={'rgba(0, 0, 0, 0.5)'}
                >
                    <Text
                        color={'#fff'}
                    >
                        Back
                    </Text>
                </Button>
                <Button
                    paddingVertical={10}
                    paddingHorizontal={10}
                    borderRadius={'25px'}
                    bg={'rgba(0, 0, 0, 0.5)'}
                    onPress={captureImage}
                >
                    <Text
                        color={'#fff'}
                    >
                        Take picture
                    </Text>
                </Button>
                {pictureUri && (
                    <Block
                        alignItems={'flex-end'}
                    >
                        <Block marginBottom={10}>
                            <Image
                                source={{uri: pictureUri}}
                                width={100}
                                height={100}
                                onError={() => console.log("error")}
                                onLoad={() => console.log("loaded")}
                            />
                        </Block>

                        <Button
                            paddingHorizontal={10}
                            paddingVertical={10}
                            borderRadius={'25px'}
                            bg={'rgba(0, 0, 0, 0.5)'}
                            onPress={deleteImage}
                        >
                            <Text
                                color={'#fff'}
                            >
                                Delete picture
                            </Text>
                        </Button>
                    </Block>
                )}
            </Block>
        </Block>
    );
};

export default CameraComponent;
