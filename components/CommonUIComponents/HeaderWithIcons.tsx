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

const HeaderWithIcons = () => {

    return (
        <Block
            height={'150px'}
        >
            <Block
                flexDirection={'row'}
                justifyContent={'space-around'}
                paddingVertical={'10px'}
            >
                <Block >
                    <Text>100%</Text>
                </Block>
                <Block>
                    <Text>WiFi</Text>
                </Block>
                <Block>
                    <Text>Cloud</Text>
                </Block>
            </Block>

            <Block
                flexDirection={"row"}
                justifyContent={'space-around'}
            >
                <Text style={{color: 'blue'}}>Cancel</Text>
                <Text style={{fontWeight: 'bold'}}>Articles In Carton</Text>
                <Text style={{color: 'blue'}}>Confirm</Text>
            </Block>
        </Block>
    );
};

export default HeaderWithIcons;
