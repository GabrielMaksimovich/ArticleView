
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraApp from "../Camera";
import Edit from "../Edit";

const CameraStack = createNativeStackNavigator();

const CameraStackNavigator = () => {
    return (
        <CameraStack.Navigator>
            <CameraStack.Screen name="CameraScreen" component={CameraApp} />
            <CameraStack.Screen name="Edit" component={Edit} />
        </CameraStack.Navigator>
    );
};

export default CameraStackNavigator;
