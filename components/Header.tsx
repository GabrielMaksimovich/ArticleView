/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {Block} from "../styles/Block";
import {Text} from "../styles/Text";
import {Image} from "../styles/Image";

import bluetoothImage from '../assets/bluetooth.png';
import wifiImage from '../assets/wi-fi.png';
import cloud from '../assets/cloud.png';

const Header = () => {
    return (
        <Block
            bg={'#161957'}
        >
            <Block
                flexDirection={'row'}
                justifyContent={'space-between'}
                paddingTop={30}
                paddingVertical={10}
                paddingHorizontal={10}
            >
                <Block
                    flexDirection={'row'}
                    alignItems={'center'}
                    width={'13%'}
                >
                    <Image
                        resizeMode={'contain'}
                        width={'35px'}
                        height={'35px'}
                        onError={() => console.log('error')}
                        onLoad={() => console.log('loaded')}
                        source={bluetoothImage}
                    />
                    <Text color={'white'}>100%</Text>
                </Block>
                <Block
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Image
                        resizeMode={'contain'}
                        width={'35px'}
                        height={'35px'}
                        onError={() => console.log('error')}
                        onLoad={() => console.log('loaded')}
                        source={wifiImage}
                    />
                </Block>
                <Block
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Image
                        resizeMode={'contain'}
                        width={'40px'}
                        height={'40px'}
                        onError={() => console.log('error')}
                        onLoad={() => console.log('loaded')}
                        source={cloud}
                    />
                </Block>
            </Block>
            <Block
                flexDirection={"row"}
                justifyContent={'center'}
                alignItems={'center'}
                paddingVertical={10}
                paddingHorizontal={5}
            >
                <Text
                    textAlign={'center'}
                    color={'white'}
                >
                    Articles in Carton
                </Text>
            </Block>
        </Block>
    );
};

export default Header;
