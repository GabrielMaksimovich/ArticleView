/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import {Block} from "../styles/Block";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BadgeZero from "../components/BadgeZero";
import {Text} from "../styles/Text";
import {Image} from "../styles/Image";
import wifi from "../assets/wi-fi.png";

const ZeroCartons = () => {
    return (
        <Block>
            <Header />
            <BadgeZero />
            <Block
                alignItems={'center'}
                marginBottom={10}
            >
                <Text
                    fontSize={120}
                    color={'#161957'}
                >
                    9
                </Text>
                <Image
                    resizeMode={'contain'}
                    width='110px'
                    height='110px'
                    onError={() => console.log('error')}
                    onLoad={() => console.log('loaded')}
                    source={wifi}
                />
                <Text
                    fontSize={24}
                    color={'grey'}
                >
                    Reading RFID...
                </Text>
            </Block>
            <Footer title='Pull the trigger to start reading'/>
        </Block>
    );
};

export default ZeroCartons;
