import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const GoogleSearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchUrl, setSearchUrl] = useState("https://www.google.com");

    const searchGoogle = () => {
        setSearchUrl("https://www.google.com/search?q=" + encodeURIComponent(searchTerm));
    };

    return (
        <View style={{flex: 1}}>
            <TextInput
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <Button title="Search Google" onPress={searchGoogle} />
            <WebView source={{ uri: searchUrl }} style={{flex: 1}} />
        </View>
    );
};

export default GoogleSearchScreen;
