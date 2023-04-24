import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Block } from '../../styles/Block';
import { Image } from '../../styles/Image';
import { Text } from '../../styles/Text';
import { Button } from '../../styles/Button';
import longsleeve from '../../assets/longsleeve.webp';
import rightArrow from '../../assets/right-arrow.png';
import DataItem from "../../types/DataItem";

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
                    paddingVertical={"10px"}
                >
                    <Block flexDirection={"row"} alignItems={"center"}>
                        <Animated.View style={{ opacity: imageOpacity}}>
                            <Image
                                resizeMode={"contain"}
                                width="80px"
                                height="80px"
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
                            <Image
                                resizeMode={"contain"}
                                width="10px"
                                height="10px"
                                onError={() => console.log("error")}
                                onLoad={() => console.log("loaded")}
                                source={rightArrow}
                            />
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
