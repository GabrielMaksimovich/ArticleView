import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import HeaderWithIcons from './components/CommonUIComponents/HeaderWithIcons';
import Article from './components/CommonUIComponents/Article';
import Summary from './components/CommonUIComponents/Summary';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    };

    return (
        <NavigationContainer>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Stack.Navigator>
                <Stack.Screen
                    name="HeaderWithIcons"
                    component={HeaderWithIcons}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Article"
                    component={Article}
                    options={{ title: 'Article' }}
                />
                <Stack.Screen
                    name="Summary"
                    component={Summary}
                    options={{ title: 'Summary' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
