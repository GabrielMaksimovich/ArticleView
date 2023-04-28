import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { Block } from '../components/SimpleComponents/Block';
import Header from '../components/Header';
import BadgeZero from '../components/BadgeZero';
import { Text } from '../components/SimpleComponents/Text';
import Wifi from '../assets/icons/signal-white.svg';

const ZeroCartons = () => {
    const [count, setCount] = useState(0);
    const [isReading, setIsReading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let interval: ReturnType<typeof setTimeout>;

        if (isReading) {
            interval = setInterval(() => {
                const result = Math.random() >= 0.5; // Random true or false

                if (result) {
                    setCount((prevCount) => prevCount + 1);
                    setError(false);
                } else {
                    setError(true);
                }
            }, 3000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isReading]);

    const toggleReading = () => {
        setIsReading((prevReading) => !prevReading);
    };

    return (
        <Block>
            <Header />
            <BadgeZero />
            <Block alignItems={'center'} marginBottom={10}>
                <Text fontSize={100} color={'#161957'}>
                    {count}
                </Text>
                <Wifi width={100} height={100} fill={'#676967'} />
                <Text fontSize={24} color={'grey'}>
                    Reading RFID...
                </Text>
                {error && (
                    <Block
                        bg={'red'}
                        paddingVertical={5}
                        paddingHorizontal={10}
                        borderRadius={'5px'}
                        marginTop={10}
                    >
                        <Text fontSize={18} color={'white'}>
                            Invalid barcode
                        </Text>
                    </Block>
                )}
            </Block>
            <TouchableOpacity onPress={toggleReading}>
                <Block
                    bg={isReading ? '#ff0000' : 'transparent'}
                    marginHorizontal={10}
                    paddingVertical={10}
                    paddingHorizontal={20}
                    borderRadius={'5px'}
                    alignSelf={'center'}
                    marginBottom={10}
                    borderWidth={'1px'}
                    borderColor={'#161957'}
                >
                    <Text
                        fontSize={18}
                        color={'#161957'}
                        textAlign={'center'}
                    >
                        {isReading ? 'Pull the trigger to stop scanning a carton barcode.' : 'Pull the trigger to start scanning a carton barcode.'}
                    </Text>
                </Block>
            </TouchableOpacity>
            {/*<Footer title='Pull the trigger to start scanning a carton barcode.' />*/}
        </Block>
    );
};

export default ZeroCartons;
