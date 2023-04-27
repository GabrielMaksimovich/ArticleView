/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {Block} from "../styles/Block";
import {Image} from "../styles/Image";
import {Text} from "../styles/Text";
import box from '../assets/box.png';

const BadgeZero = () => {

    return (
        <Block
            bg={'#c9c9c9'}
            paddingVertical={10}
            paddingHorizontal={10}
            flexDirection={'row'}
        >
            <Image
                resizeMode={'contain'}
                width='18px'
                height='18px'
                onError={() => console.log('error')}
                onLoad={() => console.log('loaded')}
                source={box}
            />
            <Text
                marginLeft={10}
            >
                25003900020001902003
            </Text>
        </Block>
    );
};

export default BadgeZero;
