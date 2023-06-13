import React, { useState } from 'react';
import { TextInput, Button, Alert } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import {Block} from "../components/SimpleComponents/Block";

const GoogleSearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchGoogle = async () => {
        const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
        try {
            if (await InAppBrowser.isAvailable()) {
                await InAppBrowser.open(searchUrl, {
                    // iOS Properties
                    dismissButtonStyle: 'cancel',
                    preferredBarTintColor: '#453AA4',
                    preferredControlTintColor: 'white',
                    readerMode: false,
                    animated: true,
                    modalPresentationStyle: 'fullScreen',
                    modalTransitionStyle: 'coverVertical',
                    modalEnabled: true,
                    enableBarCollapsing: false,
                    // Android Properties
                    showTitle: true,
                    toolbarColor: '#6200EE',
                    secondaryToolbarColor: 'black',
                    navigationBarColor: 'black',
                    navigationBarDividerColor: 'white',
                    enableUrlBarHiding: true,
                    enableDefaultShare: true,
                    forceCloseOnRedirection: false,
                    // Specify full animation resource identifier(package:anim/name)
                    // or only resource name(in case of animation bundled with app).
                    animations: {
                        startEnter: 'slide_in_right',
                        startExit: 'slide_out_left',
                        endEnter: 'slide_in_left',
                        endExit: 'slide_out_right'
                    },
                    headers: {
                        'my-custom-header': 'my custom header value'
                    }
                })
                Alert.alert('InAppBrowser', 'Browser closed');
            } else {
                Alert.alert('InAppBrowser', 'Browser not available');
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Error', error.message);
            } else {
                Alert.alert('Error', 'An unexpected error occurred');
            }
        }
    };

    return (
        <Block flex={1}>
            <TextInput
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <Button title="Search Google" onPress={searchGoogle} />
        </Block>
    );
};

export default GoogleSearchScreen;
