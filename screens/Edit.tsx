import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Block} from "../components/SimpleComponents/Block";
import {Image} from "../components/SimpleComponents/Image";
import {Button} from "../components/SimpleComponents/Button";
import {Text} from "../components/SimpleComponents/Text";

type EditParams = {
    imageUri: string;
    removeImage: (imageUri: string) => void;
};

const EditComponent: React.FC = () => {
    const route = useRoute<RouteProp<Record<string, EditParams>, 'Edit'>>();
    const navigation = useNavigation();
    const { imageUri, removeImage } = route.params;

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
    );
};

export default EditComponent;
