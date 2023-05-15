import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import {Block} from "../components/SimpleComponents/Block";

interface SplashScreenProps {
    onAnimationFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationFinish }) => {
    useEffect(() => {
        setTimeout(() => {
            onAnimationFinish();
        }, 5000); // Set the duration of the splash screen in milliseconds
    }, [onAnimationFinish]);

    return (
        <Block
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            bg={'#fff'}
        >
            <LottieView
                source={require('../assets/74906-rings-circles-wave-animation.json')}
                autoPlay
                loop
                onAnimationFinish={onAnimationFinish}
            />
        </Block>
    );
};

export default SplashScreen;
