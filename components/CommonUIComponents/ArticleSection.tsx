/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {Text} from "react-native";
import {Block} from "../../styles/Block";
import {Image} from "../../styles/Image";
import {Button} from "../../styles/Button";
import longsleeve from '../../assets/longsleeve.webp';
import rightArrow from '../../assets/right-arrow.png';
import data from "../../data/data";

const ArticleSection = () => {

    const handlePress = () => {
        console.log('Button pressed!');
    }

    return (
        <Block
        >
            <Block
                flexDirection={'row'}
                justifyContent={'space-between'}
                paddingHorizontal={'20px'}
                paddingVertical={'10px'}
                borderBottomColor={'grey'}
                borderBottomWidth={'0.5px'}
            >
                <Text style={{color: '#9e9e9e'}}>ARTICLE</Text>
                <Text style={{color: '#9e9e9e'}}>ACT</Text>
            </Block>

            {data.map(item => (
                <Block
                    key={item.id}
                    paddingVertical={'10px'}
                    paddingHorizontal={'10px'}
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
                            <Image
                                resizeMode={'contain'}
                                width='80px'
                                height='80px'
                                onError={() => console.log('error')}
                                onLoad={() => console.log('loaded')}
                                source={longsleeve}
                            />
                            <Block>
                                <Text style={{marginBottom: 5, fontSize: 10}}>{item.code}</Text>
                                <Block
                                    flexDirection={'row'}
                                    justifyContent={'flex-start'}
                                    marginBottom={5}
                                >
                                    <Text style={{marginRight: 30, fontSize: 10}}>{item.color}</Text>
                                    <Text style={{fontSize: 10}}>{item.size}</Text>
                                </Block>
                                <Text style={{color: '#9e9e9e', fontSize: 10}}>{item.description}</Text>
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
                                    bg={'green'}
                                    borderRadius={'10px'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <Text style={{color: '#fff', fontSize: 12}}>{item.quantity}</Text>
                                </Button>
                            </Block>
                            <Image
                                resizeMode={'contain'}
                                width='10px'
                                height='10px'
                                onError={() => console.log('error')}
                                onLoad={() => console.log('loaded')}
                                source={rightArrow}
                            />
                        </Block>
                    </Block>
                </Block>
            ))}
        </Block>
    );
};

export default ArticleSection;
