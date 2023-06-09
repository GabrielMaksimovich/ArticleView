import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Block } from './SimpleComponents/Block';
import { Image } from './SimpleComponents/Image';
import { Text } from './SimpleComponents/Text';
import { Button } from './SimpleComponents/Button';
import longsleeve from '../assets/longsleeve.webp';
import DataItem from "../types/DataItem";
import ArrowRight from "../assets/icons/right-arrow-9.svg";

type Props = {
    item: DataItem;
    handlePress: (itemId: number | null) => void;
    handleDelete: () => void;
    slideAnimation: Animated.Value;
    imageOpacity: Animated.Value;
    showDeleteButton: number | null;
};

const ListItem: React.FC<Props> = ({
       item,
       handlePress,
       handleDelete,
       slideAnimation,
       imageOpacity,
       showDeleteButton,
    }) => {
    return (
        <Block
            borderBottomColor={"grey"}
            borderBottomWidth={"1px"}
        >
            <Animated.View
                style={{
                    transform: [
                        {translateX: slideAnimation},
                        {scaleX: 0.9},
                    ],
                }}
            >
                <Block
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    paddingVertical={10}
                >
                    <Block flexDirection={"row"} alignItems={"center"}>
                        <Animated.View style={{ opacity: imageOpacity}}>
                            <Image
                                resizeMode={"contain"}
                                width={"80px"}
                                height={"80px"}
                                onError={() => console.log("error")}
                                onLoad={() => console.log("loaded")}
                                source={longsleeve}
                            />
                        </Animated.View>

                        <Block>
                            <Text
                                marginBottom={5}
                                fontSize={10}
                            >
                                {item.code}
                            </Text>
                            <Block
                                flexDirection={"row"}
                                justifyContent={"flex-start"}
                                marginBottom={5}
                            >
                                <Text marginRight={30} fontSize={10}>{item.color}</Text>
                                <Text fontSize={10}>{item.size}</Text>
                            </Block>
                            <Text color={'#9e9e9e'} fontSize={10}>
                                {item.description}
                            </Text>
                        </Block>
                    </Block>


                    <Block
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-around"}
                    >
                        <Block marginRight={10}>
                            <Button
                                onPress={() => 'clicked'}
                                width={"80px"}
                                height={"15px"}
                                bg={"green"}
                                borderRadius={"10px"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Text color={'#fff'} fontSize={12}>{item.quantity}</Text>
                            </Button>
                        </Block>

                        <TouchableOpacity onPress={() => handlePress(item.id)}>
                            <ArrowRight width={10} height={10} fill={'#000'}/>
                        </TouchableOpacity>
                    </Block>
                </Block>
            </Animated.View>

            {showDeleteButton === item.id && (
                <Block
                    bg={"red"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"100%"}
                    width={"50px"}
                    position={"absolute"}
                    top={"0"}
                    right={"0"}
                >
                    <Button onPress={handleDelete}>
                        <Text color={'#fff'}>Delete</Text>
                    </Button>
                </Block>
            )}
        </Block>
    );
};

export default ListItem;
