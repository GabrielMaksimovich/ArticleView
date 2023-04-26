import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import RegistrationScreen from "./components/CommonUIComponents/RegistrationScreen";


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
            <RegistrationScreen />
        </NavigationContainer>
    );
};

export default App;
