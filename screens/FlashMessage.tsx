import React from 'react';
import { Button, View } from 'react-native';
import { showMessage } from "react-native-flash-message";

const Flash = () => {
    const handlePress = () => {
        showMessage({
            message: "Hello World",
            description: "This is our flash message",
            type: "success",
        });
    }

    return (
        <View>
            <Button title="Show Message" onPress={handlePress} />
        </View>
    );
}

export default Flash;
