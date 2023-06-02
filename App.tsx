import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HorizontalBarChart from './screens/HorizontalBarChart';
import RegistrationScreen from "./screens/RegistrationScreen";
import Summary from "./screens/Summary";
import Article from "./screens/Article";
import HomeScreen from "./components/Home";
import ZeroCartons from "./screens/ZeroCartons";
import SignatureScreen from "./screens/SignatureScreen";
import Scanner from "./screens/Scanner";
import SplashScreen from "./screens/Splash";
import ModalScreen from "./screens/Modal";
import Biometrics from "./screens/Biometrics";
import Picture from "./screens/Picture";
import Bubble from "./screens/Bubble";
import Media from "./screens/Media";
import CameraApp from "./screens/Camera";
import Edit from "./screens/Edit";
import {PictureProvider} from "./PictureContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

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
                        <Drawer.Navigator initialRouteName="Home">
                            <Drawer.Screen name="Home" component={HomeScreen} />
                            <Drawer.Screen name="Registration" component={RegistrationScreen} />
                            <Drawer.Screen name="Chart bar" component={HorizontalBarChart} />
                            <Drawer.Screen name="Summary" component={Summary} />
                            <Drawer.Screen name="Article" component={Article} />
                            <Drawer.Screen name="Zero cartons" component={ZeroCartons} />
                            <Drawer.Screen name="Signature" component={SignatureScreen} />
                            <Drawer.Screen name="Scanner" component={Scanner} />
                            <Drawer.Screen name="Modal" component={ModalScreen} />
                            <Drawer.Screen name="Biometrics" component={Biometrics} />
                            <Drawer.Screen name="Picture" component={Picture} />
                            <Drawer.Screen name="Bubble" component={Bubble} />
                            <Drawer.Screen name="Media" component={Media} />
                            <Drawer.Screen name="Camera" component={CameraStackNavigator} />
                        </Drawer.Navigator>
                    </NavigationContainer>
                </PictureProvider>
            )}
        </>
    );
};

export default App;
