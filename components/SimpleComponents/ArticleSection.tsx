import React, { FC, useState } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";
import { Block } from "../../styles/Block";
import { Image } from "../../styles/Image";
import { Button } from "../../styles/Button";
import longsleeve from "../../assets/longsleeve.webp";
import rightArrow from "../../assets/right-arrow.png";
import data from "../../data/data";

const ArticleSection: FC = () => {
    const [slideAnimations] = useState(() => data.map(() => new Animated.Value(0)));
    const [showDeleteButton, setShowDeleteButton] = useState(null);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [imageOpacities] = useState(() => data.map(() => new Animated.Value(1)));


    const handlePress = (itemId: number | null) => {
        const index = data.findIndex((item) => item.id === itemId);

        if (showDeleteButton === itemId) {
            setShowDeleteButton(null);
            setPrevIndex(null);
            Animated.parallel([
                Animated.timing(slideAnimations[index], {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: false,
                }),
                Animated.timing(imageOpacities[index], {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: false,
                }),
            ]).start();
        } else {
            if (prevIndex !== null) {
                Animated.parallel([
                    Animated.timing(slideAnimations[prevIndex], {
                        toValue: 0,
                        duration: 250,
                        useNativeDriver: false,
                    }),
                    Animated.timing(imageOpacities[prevIndex], {
                        toValue: 1,
                        duration: 250,
                        useNativeDriver: false,
                    }),
                ]).start();
            }
            setShowDeleteButton(itemId);
            setPrevIndex(index);
            Animated.parallel([
                Animated.timing(slideAnimations[index], {
                    toValue: -50,
                    duration: 250,
                    useNativeDriver: false,
                }),
                Animated.timing(imageOpacities[index], {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: false,
                }),
            ]).start();
        }
    };

    const handleDelete = () => {
        console.log("deleted");
    };

    return (
        <Block>
            {data.map((item, index) => (
                <Block
                    key={item.id}
                    borderBottomColor={"grey"}
                    borderBottomWidth={"0.5px"}
                >
                    <Animated.View
                        style={{
                            transform: [
                                {translateX: slideAnimations[index]},
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
                                <Animated.View style={{ opacity: imageOpacities[index] }}>
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
                                    <Text style={{ marginBottom: 5, fontSize: 10 }}>{item.code}</Text>
                                    <Block
                                        flexDirection={"row"}
                                        justifyContent={"flex-start"}
                                        marginBottom={5}
                                    >
                                        <Text style={{ marginRight: 30, fontSize: 10 }}>{item.color}</Text>
                                        <Text style={{ fontSize: 10 }}>{item.size}</Text>
                                    </Block>
                                    <Text style={{ color: "#9e9e9e", fontSize: 10 }}>
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
                                            <Text style={{ color: "#fff", fontSize: 12 }}>{item.quantity}</Text>
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
                                <Text style={{ color: "#fff" }}>Delete</Text>
                            </Button>
                        </Block>
                    )}
                </Block>
            ))}
        </Block>
    );
};

export default ArticleSection;
