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
    title: string;
}


const ArticleHeader: FC<Props> = ({ title }) => {
    return (
        <Block
            flexDirection={'row'}
            justifyContent={'space-between'}
            paddingHorizontal={'20px'}
            paddingVertical={'10px'}
            borderBottomColor={'grey'}
            borderBottomWidth={'0.5px'}
        >
            <Text style={{color: '#9e9e9e'}}>{title}</Text>
            <Text style={{color: '#9e9e9e'}}>ACT</Text>
        </Block>
    );
};

export default ArticleHeader;
