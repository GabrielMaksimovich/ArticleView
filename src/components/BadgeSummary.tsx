/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {Block} from "./SimpleComponents/Block";
import {Text} from "./SimpleComponents/Text";
import Badge from "../assets/icons/price-tag-15.svg";
import Box from "../assets/icons/box-full-4.svg";


const BadgeSummary = () => {
    return (
        <Block
            bg={'#c9c9c9'}
            paddingVertical={5}
            paddingHorizontal={10}
            flexDirection={'row'}
            justifyContent={'space-between'}
        >
            <Block
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Text
                    fontSize={10}
                    color={'#343536'}
                >
                    2601 - LAS VEGAS (TST)
                </Text>
            </Block>

            <Block
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Block
                    flexDirection={'row'}
                    alignItems={'center'}
                    marginRight={10}
                >
                    <Box width={20} height={20} fill={'#000'} />
                    <Text
                        fontSize={10}
                        marginLeft={5}
                    >
                        1
                    </Text>
                </Block>

                <Block flexDirection={'row'} alignItems={'center'}>
                    <Badge width={15} height={15} fill={'#000'}/>
                    <Text fontSize={10} marginLeft={5}>9</Text>
                </Block>
            </Block>
        </Block>
    );
};

export default BadgeSummary;
