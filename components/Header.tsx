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
import BluetoothIcon from "../assets/icons/BluetoothIcon";
import WifiIcon from "../assets/icons/WifiIcon";
import Cloud from "../assets/icons/Cloud";

const Header = () => {
    return (
        <Block
            bg={'#161957'}
        >
            <Block
                flexDirection={'row'}
                justifyContent={'space-between'}
                paddingTop={30}
                paddingVertical={10}
                paddingHorizontal={10}
            >
                <Block
                    flexDirection={'row'}
                    alignItems={'center'}
                    width={'13%'}
                >
                    <BluetoothIcon width={20} height={20} fill={'#fff'}/>
                    <Text color={'white'}>100%</Text>
                </Block>
                <Block
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <WifiIcon width={30} height={30} fill={'#fff'} />
                </Block>
                <Block
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Cloud width={30} height={30} fill={'#fff'}/>
                </Block>
            </Block>
            <Block
                flexDirection={"row"}
                justifyContent={'center'}
                alignItems={'center'}
                paddingVertical={10}
                paddingHorizontal={5}
            >
                <Text
                    textAlign={'center'}
                    color={'white'}
                >
                    Articles in Carton
                </Text>
            </Block>
        </Block>
    );
};

export default Header;
