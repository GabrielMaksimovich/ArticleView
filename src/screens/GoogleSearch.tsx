import React from 'react';
import { WebView } from 'react-native-webview';
import {Block} from "../components/SimpleComponents/Block";

const GoogleSearchScreen = () => {
    return (
    <Block flex={1}>
        <WebView source={{ uri: "https://www.google.com" }} style={{flex: 1}} />
    </Block>
);
};

export default GoogleSearchScreen;
