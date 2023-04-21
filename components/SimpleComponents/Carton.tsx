/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from "react";
import {Text} from "react-native";
import {Block} from "../../styles/Block";
import {Image} from "../../styles/Image";
import {Button} from "../../styles/Button";
import longsleeve from '../../assets/longsleeve.webp';
import rightArrow from '../../assets/right-arrow.png';
import data from "../../data/data";


const Carton: FC = () => {

    const handlePress = () => {
        console.log('Button pressed!');
    }

    return (
        <Block
            borderBottomColor={'grey'}
            borderBottomWidth={'0.5px'}
            height={'55%'}
        >

            <Block
                paddingVertical={'20px'}
                paddingHorizontal={'10px'}
                borderBottomColor={'grey'}
                borderBottomWidth={'0.5px'}
            >
                <Block
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Block
                        flexDirection={'row'}
                        alignItems={'center'}

                    >

                        <Block>
                            <Text style={{marginBottom: 5, fontSize: 10, fontWeight: 'bold'}}>25003900020001902003</Text>

                        </Block>
                    </Block>

                    <Block
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                    >
                        <Block
                            marginRight={10}
                        >
                            <Button
                                onPress={handlePress}
                                width={'80px'}
                                height={'15px'}
                                bg={'grey'}
                                borderRadius={'10px'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <Text style={{color: '#fff', fontSize: 12}}>9</Text>
                            </Button>
                        </Block>

                        <Button onPress={handlePress}>
                            <Image
                                resizeMode={'contain'}
                                width='10px'
                                height='10px'
                                onError={() => console.log('error')}
                                onLoad={() => console.log('loaded')}
                                source={rightArrow}
                            />
                        </Button>
                    </Block>
                </Block>
            </Block>
        </Block>
    );
};

export default Carton;
