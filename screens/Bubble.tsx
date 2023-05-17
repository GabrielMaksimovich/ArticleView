import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { accelerometer } from 'react-native-sensors';
import {Block} from "../components/SimpleComponents/Block";

const BubbleLevel = () => {
    const [data, setData] = useState({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        const subscription = accelerometer.subscribe(({ x, y, z }) => {
            setData({ x, y, z });
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const bubbleStyle = {
        transform: [
            { translateX: data.x * 10 },
            { translateY: data.y * 10 },
        ],
    };

    return (
        <Block
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Block
                width={'80%'}
                height={'80%'}
                borderWidth={'1px'}
                borderColor={'#000'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Animated.View style={bubbleStyle}>
                    <Block
                        width={'30px'}
                        height={'30px'}
                        borderRadius={'15px'}
                        bg={'#00f'}
                    >
                    </Block>
                </Animated.View>
            </Block>
        </Block>
    );
};

export default BubbleLevel;
