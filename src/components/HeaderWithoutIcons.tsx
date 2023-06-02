/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from "react";
import {Block} from "./SimpleComponents/Block";
import {Text} from "./SimpleComponents/Text";

type Props = {
    text: string,
    title: string,
}

const HeaderWithoutIcons: FC<Props> = ({ text, title }) => {

    return (
        <Block
            borderBottomColor={'grey'}
            borderBottomWidth={'1px'}
        >
            <Block
                flexDirection={"row"}
                justifyContent={'space-between'}
                alignItems={'center'}
                paddingVertical={10}
                paddingHorizontal={5}
            >
                <Text color={'blue'}>Cancel</Text>
                <Text fontWeight={'bold'}>{title}</Text>
                <Text color={'blue'}>{text}</Text>
            </Block>
        </Block>
    );
};

export default HeaderWithoutIcons;
