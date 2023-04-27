import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import HorizontalBarChart from "./screens/HorizontalBarChart";
import {Block} from "./styles/Block";
import {Text} from "./styles/Text";

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    };

    return (
        <NavigationContainer>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Block
                flex={1}
                alignItems={'center'}
                justifyContent={'center'}
                marginTop={'50px'}
            >
                <Text>Vertical Chart Bar</Text>
                <HorizontalBarChart />
            </Block>
        </NavigationContainer>
    );
};

export default App;
