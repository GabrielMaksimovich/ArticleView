import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import { Image, Button, View, StyleSheet } from 'react-native';

type EditParams = {
    imageUri: string;
    removeImage: (imageUri: string) => void;
};

const EditComponent: React.FC = () => {
    const route = useRoute<RouteProp<Record<string, EditParams>, 'Edit'>>();
    const navigation = useNavigation();
    const { imageUri, removeImage } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Button
                title="Remove Image"
                onPress={() => {
                    removeImage(imageUri);
                    navigation.goBack();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '70%',
        marginBottom: 20,
    },
});

export default EditComponent;
