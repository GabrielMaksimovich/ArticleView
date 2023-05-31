import React from 'react';
import { Block } from './SimpleComponents/Block';
import { Text } from './SimpleComponents/Text';

function HomeScreen() {
    return (
        <Block flex={1} alignItems={'center'} justifyContent={'center'}>
            <Text>Home screen</Text>
        </Block>
    );
}

export default HomeScreen;
