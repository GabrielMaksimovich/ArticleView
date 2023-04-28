import React from "react";
import {Block} from "../styles/Block";
import {Text} from "react-native";

import BluetoothIcon from "../assets/icons/BluetoothIcon";
import WifiIcon from "../assets/icons/WifiIcon";
import Cloud from "../assets/icons/Cloud";

const HeaderWithIcons = () => {

    return (
        <Block
        >
            <Block
                flexDirection={'row'}
                justifyContent={'space-between'}
                paddingTop={30}
                paddingVertical={10}
                paddingHorizontal={10}
                borderBottomColor={'grey'}
                borderBottomWidth={'1px'}
            >
                <Block
                    flexDirection={'row'}
                    alignItems={'center'}
                    width={'13%'}
                >
                    <BluetoothIcon width={20} height={20} fill={'#000'}/>
                    <Text>100%</Text>
                </Block>
                <Block
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <WifiIcon width={30} height={30} fill={'#000'} />
                </Block>
                <Block
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Cloud width={30} height={30} fill={'#000'}/>
                </Block>
            </Block>
        </Block>
    );
};

export default HeaderWithIcons;
