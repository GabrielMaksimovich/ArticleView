import React from 'react';

import { Text } from './SimpleComponents/Text';
import {Block} from "./SimpleComponents/Block";

const Logo = () => {
    return (
        <Block
            flexDirection={'row'}
            alignItems={'baseline'}
        >
            <Text fontSize={100} color="#fff">
                D
            </Text>
            <Block
                position={'absolute'}
                top={'10%'}
                left={'18%'}
            >
                <Text fontSize={30} color="#fff">
                    ®
                </Text>
            </Block>
        </Block>
    );
};

export default Logo;
