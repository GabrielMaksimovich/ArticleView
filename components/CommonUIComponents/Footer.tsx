/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {Block} from "../../styles/Block";
import {Text} from "react-native";
import {Button} from "../../styles/Button";


const Footer = () => {
    const handlePress = () => {
        console.log('Button pressed!');
    }

    return (
        <Block
            flexDirection={'row'}
            alignItems={'center'}
            alignSelf={'center'}
            justifyContent={'center'}
            paddingVertical={'10px'}
        >
            <Button
                onPress={handlePress}
                width={'275px'}
                height={'50px'}
                borderRadius={'4px'}
                borderColor={'#7813ab'}
                borderWidth={'1px'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Text style={{color: '#7813ab', fontSize: 16}}>Pull the trigger to start reading.</Text>
            </Button>
        </Block>
    );
};

export default Footer;
