import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HorizontalBarChart from './screens/HorizontalBarChart';
import RegistrationScreen from "./screens/RegistrationScreen";
import Summary from "./screens/Summary";
import Article from "./screens/Article";
import HomeScreen from "./components/Home";
import ZeroCartons from "./screens/ZeroCartons";

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Registration" component={RegistrationScreen} />
                <Drawer.Screen name="Chart bar" component={HorizontalBarChart} />
                <Drawer.Screen name="Summary" component={Summary} />
                <Drawer.Screen name="Article" component={Article} />
                <Drawer.Screen name="Zero cartons" component={ZeroCartons} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
