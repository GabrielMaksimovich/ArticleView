import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FlashMessage from "react-native-flash-message";

import Summary from "./screens/Summary";
import Article from "./screens/Article";
import SplashScreen from "./screens/Splash";
import Player from "./screens/Player";
import Date from "./screens/Date";
import Progress from "./screens/Progress";
import CameraApp from "./screens/CameraApp";
import Edit from "./screens/Edit";
import {PictureProvider} from "./PictureContext";

const CameraStack = createNativeStackNavigator();

const CameraStackNavigator = () => {
    return (
        <CameraStack.Navigator>
            <CameraStack.Screen name="CameraScreen" component={CameraApp} />
            <CameraStack.Screen name="Edit" component={Edit} />
        </CameraStack.Navigator>
    );
};

const Drawer = createDrawerNavigator();

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    const onAnimationFinish = () => {
        setShowSplash(false);
    };

    return (
        <>
            {showSplash ? (
                <SplashScreen onAnimationFinish={onAnimationFinish} />
            ) : (
                <PictureProvider>
                    <NavigationContainer>
                        <Drawer.Navigator initialRouteName="Summary">
                            <Drawer.Screen name="Summary" component={Summary} />
                            <Drawer.Screen name="Article" component={Article} />
                            <Drawer.Screen name="Progress" component={Progress} />
                            {/*<Drawer.Screen name="Date" component={Date} />*/}
                            {/*<Drawer.Screen name="Camera" component={CameraStackNavigator} />*/}
                            {/*<Drawer.Screen name="Player">*/}
                            {/*    {(props) => <Player {...props} soundFile="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />}*/}
                            {/*</Drawer.Screen>*/}
                        </Drawer.Navigator>
                        {/*<FlashMessage position="top" />*/}
                    </NavigationContainer>
                </PictureProvider>
            )}
        </>
    );
};

export default App;
