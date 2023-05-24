import React, { useRef, useState } from 'react';
import { Camera } from 'react-native-camera-kit';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import {NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from "../components/SimpleComponents/Button";
import {Block} from "../components/SimpleComponents/Block";
import {Text} from "../components/SimpleComponents/Text";

type RootStackParamList = {
    Camera: undefined;
    Edit: { imageUri: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width, height } = Dimensions.get('window');

const CameraComponent = () => {
    const cameraRef = useRef<Camera | null>(null);
    const [pictures, setPictures] = useState<string[]>([]);
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
            <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />
        </TouchableOpacity>
    );


    return (
        <Block flex={1} flexDirection="column">
            <Camera
                ref={cameraRef}
                style={{ width: width, height: height / 2 }}
            />
            <FlatList
                data={pictures}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={{ width: width, height: height / 2 }}
            />
            <Button
                onPress={goBack}
            >
                <Text>
                    Back
                </Text>
            </Button>
            <Button
                onPress={captureImage}
            >
                <Text>
                    Take picture
                </Text>
            </Button>
        </Block>
    );
};

export default CameraComponent;
