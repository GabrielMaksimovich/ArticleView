import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Text} from "./styles/Text";
import {Block} from "./styles/Block";


const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    };

    return (
        <NavigationContainer>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Block
                flex={1}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Text>Hello</Text>
            </Block>
        </NavigationContainer>
    );
};

export default App;
