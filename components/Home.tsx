import React, { useEffect } from 'react';
import { Alert, Text } from 'react-native';
import { Notifications } from 'react-native-notifications';
import { Button } from './SimpleComponents/Button';
import { Block } from './SimpleComponents/Block';

function HomeScreen() {
    const showNotification = () => {
        Notifications.postLocalNotification({
            body: "Local notification!",
            title: "Local Notification Title",
            sound: "chime.aiff",
            identifier: "123", // unique identifier
            payload: {}, // any additional data
            badge: 1, // number to show on the app icon
            type: 'local', // type of the notification
            thread: 'thread1', // string that groups notifications together
        });
    };

    return (
        <Block flex={1} alignItems={'center'} justifyContent={'center'}>
            <Text>Home screen</Text>
            <Button onPress={showNotification}>
                <Text>Show Notification</Text>
            </Button>
        </Block>
    );
}

export default HomeScreen;
