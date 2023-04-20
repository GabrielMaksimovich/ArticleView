/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {Text} from "react-native";
import {Block} from "../../styles/Block";
import {Image} from "../../styles/Image";
import box from '../../assets/box.png';
import badge from '../../assets/badge.png';

const BadgeSection = () => {

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
                <Text style={{marginLeft: 10}}>id number</Text>
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
                <Text style={{fontSize: 10}}>9</Text>
            </Block>
        </Block>
    );
};

export default BadgeSection;
