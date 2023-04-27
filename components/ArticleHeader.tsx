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

type Props = {
    title: string;
}


const ArticleHeader: FC<Props> = ({ title }) => {
    return (
        <Block
            flexDirection={'row'}
            justifyContent={'space-between'}
            paddingHorizontal={20}
            paddingVertical={10}
            borderBottomColor={'grey'}
            borderBottomWidth={'1px'}
        >
            <Text
                color={'#9e9e9e'}
            >
                {title}
            </Text>
            <Text
                color={'#9e9e9e'}
            >
                ACT
            </Text>
        </Block>
    );
};

export default ArticleHeader;
