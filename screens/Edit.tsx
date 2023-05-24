import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

type EditParams = {
    imageUri: string;
};

const EditComponent = () => {
    const route = useRoute<RouteProp<Record<string, EditParams>, 'Edit'>>();
    const { imageUri } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            {/* TODO: Add image editing functionality */}
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
        width: 300,
        height: 300,
    },
});

export default EditComponent;
