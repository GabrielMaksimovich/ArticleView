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
import badge from '../assets/badge.png';

const BadgeArticle = () => {

    return (
        <Block
            bg={'#c9c9c9'}
            paddingVertical={'5px'}
            paddingHorizontal={'5px'}
            flexDirection={'row'}
            justifyContent={'space-between'}
        >
            <Block
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
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
                    id number
                </Text>
            </Block>

            <Block
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Image
                    resizeMode={'contain'}
                    width='24px'
                    height='24px'
                    onError={() => console.log('error')}
                    onLoad={() => console.log('loaded')}
                    source={badge}
                />
                <Text
                    fontSize={10}
                >
                    9
                </Text>
            </Block>
        </Block>
    );
};

export default BadgeArticle;
