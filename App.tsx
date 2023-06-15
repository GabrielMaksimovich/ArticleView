import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HorizontalBarChart from './src/screens/HorizontalBarChart';
import RegistrationScreen from "./src/screens/RegistrationScreen";
import Summary from "./src/screens/Summary";
import Article from "./src/screens/Article";
import HomeScreen from "./src/components/Home";
import ZeroCartons from "./src/screens/ZeroCartons";
import SignatureScreen from "./src/screens/SignatureScreen";
import Scanner from "./src/screens/Scanner";
import SplashScreen from "./src/screens/Splash";
import ModalScreen from "./src/screens/Modal";
import Biometrics from "./src/screens/Biometrics";
import Picture from "./src/screens/Picture";
import Bubble from "./src/screens/Bubble";
import Media from "./src/screens/Media";
import {PictureProvider} from "./PictureContext";
import CameraStackNavigator from "./src/screens/navigation/CameraStackNavigator";
import GoogleSearch from "./src/screens/GoogleSearch";
import MapScreen from "./src/screens/MapScreen";

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
                            <Drawer.Screen name="Google" component={GoogleSearch} />
                            <Drawer.Screen name="Map" component={MapScreen} />
                        </Drawer.Navigator>
                    </NavigationContainer>
                </PictureProvider>
            )}
        </>
    );
};

export default App;
