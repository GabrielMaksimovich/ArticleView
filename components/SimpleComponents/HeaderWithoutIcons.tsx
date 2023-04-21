/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from "react";
import {Block} from "../../styles/Block";
import {Text} from "react-native";

type Props = {
    text: string,
    title: string,
}

const HeaderWithoutIcons: FC<Props> = ({ text, title }) => {

    return (
        <Block
            borderBottomColor={'grey'}
            borderBottomWidth={'0.5px'}
        >
            <Block
                flexDirection={"row"}
                justifyContent={'space-between'}
                alignItems={'center'}
                paddingVertical={'10px'}
                paddingHorizontal={'5px'}
            >
                <Text style={{color: 'blue'}}>Cancel</Text>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <Text style={{color: 'blue'}}>{text}</Text>
            </Block>
        </Block>
    );
};

export default HeaderWithoutIcons;
