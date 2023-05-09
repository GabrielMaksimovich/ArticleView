import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

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
        <View style={styles.container}>
            <LottieView
                source={require('../assets/74906-rings-circles-wave-animation.json')}
                autoPlay
                loop
                onAnimationFinish={onAnimationFinish}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

export default SplashScreen;
