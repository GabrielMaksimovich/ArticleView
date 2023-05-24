import React, { SetStateAction, useRef } from 'react';
import { Camera as CameraKit } from 'react-native-camera-kit';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Dimensions, TouchableOpacity } from 'react-native';
import {NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from "../components/SimpleComponents/Button";
import {Block} from "../components/SimpleComponents/Block";
import {Text} from "../components/SimpleComponents/Text";
import {Image} from "../components/SimpleComponents/Image";
import {usePictureContext} from "../PictureContext";

type RootStackParamList = {
    Camera: undefined;
    Edit: { imageUri: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width, height } = Dimensions.get('window');

const CameraScreen = () => {
    const cameraRef = useRef<CameraKit | null>(null);
    const { pictures, setPictures } = usePictureContext();
    const navigation = useNavigation<NavigationProp>();

    const captureImage = async () => {
        if (cameraRef.current) {
            try {
                const image = await cameraRef.current.capture();
                const imageUri = image.uri;
                setPictures([...pictures, imageUri]);
            } catch (error) {
                console.log('Error capturing image: ', error);
            }
        }
    };

    const goBack = () => {
        navigation.goBack();
    };

    const handleImagePress = (item: string) => {
        // Navigate to the edit screen with the image uri
        navigation.navigate('Edit', { imageUri: item });
    };

    const renderItem = ({ item }: { item: string }) => (
        <TouchableOpacity onPress={() => handleImagePress(item)}>
            <Image
                source={{ uri: item }}
                width={'100px'}
                height={'100px'}
                onError={() => console.log("error")}
                onLoad={() => console.log("loaded")}
            />
        </TouchableOpacity>
    );

    return (
        <Block flex={1} flexDirection="column">
            <CameraKit
                ref={cameraRef}
                style={{ width: width, height: height / 2 }}
            />
            <FlatList
                data={pictures}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={{ width: width, height: height / 2 }}
                horizontal={true}
            />
            <Block
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
                paddingHorizontal={20}
                paddingVertical={20}
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
            </Block>
        </Block>
    );
};

export default CameraScreen;
