import React, {FC, useState} from "react";
import {Animated, TouchableOpacity} from "react-native";
import {Block} from "../styles/Block";
import {Image} from "../styles/Image";
import {Text} from "../styles/Text";
import {Button} from "../styles/Button";

import rightArrow from '../assets/right-arrow.png';



const Carton: FC = () => {

    const [slideAnimation] = useState(new Animated.Value(0));
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const handlePress = () => {
        setShowDeleteButton(!showDeleteButton);
        Animated.timing(slideAnimation, {
            toValue: showDeleteButton ? 0 : -50,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }

    return (
        <Block
            borderBottomColor={'grey'}
            borderBottomWidth={'1px'}
        >
            <Block
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                paddingHorizontal={5}
            >
                <Block>
                    <Text
                        paddingVertical={20}
                        fontSize={10}
                        fontWeight={'bold'}
                    >
                        25003900020001902003
                    </Text>
                </Block>

                <Animated.View
                    style={{
                        transform: [
                            { translateX: slideAnimation },
                            { scaleX: showDeleteButton ? 0.9 : 1 }
                        ]
                    }}
                >
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
                                <Text
                                    color={'#fff'}
                                    fontSize={12}
                                >
                                    9
                                </Text>
                            </Button>
                        </Block>

                        <TouchableOpacity onPress={handlePress}>
                            <Image
                                resizeMode={'contain'}
                                width={'10px'}
                                height={'10px'}
                                onError={() => console.log('error')}
                                onLoad={() => console.log('loaded')}
                                source={rightArrow}
                            />
                        </TouchableOpacity>
                    </Block>
                </Animated.View>
                {showDeleteButton &&
                    <Block
                        bg={'red'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={'50px'}
                        height={'100%'}
                        position={'absolute'}
                        top={'0'}
                        right={'0'}
                    >
                        <Button
                            onPress={() => 'hello'}
                        >
                            <Text color={'#fff'}>Delete</Text>
                        </Button>
                    </Block>
                }
            </Block>
        </Block>
    );
};

export default Carton;
