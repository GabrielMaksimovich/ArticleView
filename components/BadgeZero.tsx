import React from "react";
import {Block} from "../styles/Block";
import {Text} from "../styles/Text";
import Box from "../assets/icons/box-full-4.svg";

const BadgeZero = () => {
    return (
        <Block
            bg={'#c9c9c9'}
            paddingVertical={10}
            paddingHorizontal={10}
            flexDirection={'row'}
            alignItems={'center'}
        >
            <Box width={24} height={24} fill={'#000'} />
            <Text
                marginLeft={10}
                color={'grey'}
                fontWeight={'bold'}
                fontSize={12}
            >
                25003900020001902003
            </Text>
        </Block>
    );
};

export default BadgeZero;
