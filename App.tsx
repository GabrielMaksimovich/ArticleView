import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from "./styles/Text";
import { View } from "react-native";
import HorizontalBarChart from './screens/HorizontalBarChart';
import RegistrationScreen from "./screens/RegistrationScreen";

const Drawer = createDrawerNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home screen</Text>
        </View>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Registration" component={RegistrationScreen} />
                <Drawer.Screen name="Chart bar" component={HorizontalBarChart} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
