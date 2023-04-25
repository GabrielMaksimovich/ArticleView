import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import HorizontalBarChart from "./components/SimpleComponents/HorizontalBarChart";
import {Block} from "./styles/Block";
import {Text} from "./styles/Text";

const data = [
    { value: 50, label: 'Bar 1', index: 0 },
    { value: 10, label: 'Bar 2', index: 1 },
    { value: 150, label: 'Bar 3', index: 2 },
    { value: 100, label: 'Bar 4', index: 3 },
    { value: 75, label: 'Bar 5', index: 4 },
];


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
                <HorizontalBarChart data={data} />
            </Block>
        </NavigationContainer>
    );
};

export default App;
