/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from "react";
import {Block} from "../styles/Block";
import {Text} from "../styles/Text";
import {Button} from "../styles/Button";

type Props = {
    title: string;
}


const Footer: FC<Props> = ({ title }) => {
    const handlePress = () => {
        console.log('Button pressed!');
    }

    return (
        <Block
            flexDirection={'row'}
            alignItems={'center'}
            alignSelf={'center'}
            paddingVertical={10}
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
                <Text
                    color={'#7813ab'}
                    fontSize={15}
                    textAlign={'center'}
                >
                    {title}
                </Text>
            </Button>
        </Block>
    );
};

export default Footer;
