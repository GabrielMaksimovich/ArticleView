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
import Badge from "../assets/icons/Badge";
import Box from "../assets/icons/Box";

const BadgeArticle = () => {

    return (
        <Block
            bg={'#c9c9c9'}
            paddingVertical={5}
            paddingHorizontal={5}
            flexDirection={'row'}
            justifyContent={'space-between'}
        >
            <Block
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Box width={20} height={20} fill={'#000'} />
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
                <Badge width={20} height={20} fill={'#000'}/>
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
