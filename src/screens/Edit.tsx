import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Block} from "../components/SimpleComponents/Block";
import {Image} from "../components/SimpleComponents/Image";
import {Button} from "../components/SimpleComponents/Button";
import {Text} from "../components/SimpleComponents/Text";
import {usePictureContext} from "../../PictureContext";
import ImageCropPicker from 'react-native-image-crop-picker';

type EditParams = {
    imageUri: string;
    setPictures: React.Dispatch<React.SetStateAction<string[]>>;
};

const EditComponent: React.FC = () => {
    const route = useRoute<RouteProp<Record<string, EditParams>, 'Edit'>>();
    const navigation = useNavigation();
    const { setPictures } = usePictureContext();
    const { imageUri } = route.params;

    const removeImage = (imageUri: string) => {
        setPictures((prevPictures: string[]) => prevPictures.filter(picture => picture !== imageUri));
    };

    const openCropper = () => {
        ImageCropPicker.openCropper({
            path: imageUri,
            width: 300,
            height: 400,
            mediaType: 'photo',
        })
            .then(image => {
                console.log(image);
                setPictures((prevPictures: string[]) => {
                    return prevPictures.map((picture) => {
                        if (picture === imageUri) {
                            return image.path;
                        } else {
                            return picture;
                        }
                    });
                });
            });
    };



    return (
        <Block
            flex={1}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Block
                marginBottom={20}
            >
                <Image
                    source={{ uri: imageUri }}
                    onError={() => console.log("error")}
                    onLoad={() => console.log("loaded")}
                    width='400%'
                    height='400%'
                />
            </Block>

            <Block
                flexDirection={'row'}
                justifyContent={'space-between'}
            >
                <Button
                    onPress={openCropper}
                    paddingVertical={10}
                    paddingHorizontal={10}
                    borderRadius={'25px'}
                    bg={'rgba(0, 0, 0, 0.5)'}
                    marginRight={20}
                >
                    <Text
                        color={'#fff'}
                    >
                        Crop Image
                    </Text>
                </Button>

                <Button
                    onPress={() => {
                        removeImage(imageUri);
                        navigation.goBack();
                    }}
                    paddingVertical={10}
                    paddingHorizontal={10}
                    borderRadius={'25px'}
                    bg={'rgba(0, 0, 0, 0.5)'}
                >
                    <Text
                        color={'#fff'}
                    >
                        Remove Image
                    </Text>
                </Button>
            </Block>
        </Block>
    );
};

export default EditComponent;
