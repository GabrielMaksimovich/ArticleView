import React, {FC, useState} from "react";
import {Text, Animated, TouchableOpacity} from "react-native";
import {Block} from "../../styles/Block";
import {Image} from "../../styles/Image";
import {Button} from "../../styles/Button";

import rightArrow from '../../assets/right-arrow.png';



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
                                    <Text style={{color: '#fff', fontSize: 12}}>9</Text>
                                </Button>
                            </Block>

                            <TouchableOpacity onPress={handlePress}>
                                <Image
                                    resizeMode={'contain'}
                                    width='10px'
                                    height='10px'
                                    onError={() => console.log('error')}
                                    onLoad={() => console.log('loaded')}
                                    source={rightArrow}
                                />
                            </TouchableOpacity>
                        </Block>
                    </Animated.View>
                </Block>
            </Block>

            {showDeleteButton &&
                <Block
                    bg={'red'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'20%'}
                    width={'50px'}
                    position={'absolute'}
                    top={'0'}
                    right={'0'}
                >
                    <Button
                        onPress={() => 'hello'}
                    >
                        <Text style={{color: '#fff'}}>Delete</Text>
                    </Button>
                </Block>
            }
        </Block>
    );
};

export default Carton;