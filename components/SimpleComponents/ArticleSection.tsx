import React, { FC, useState } from "react";
import { Animated } from "react-native";
import { Block } from "../../styles/Block";
import data from "../../data/data";
import ListItem from "./ListItem";

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
                <ListItem
                    key={item.id}
                    item={item}
                    handlePress={handlePress}
                    handleDelete={handleDelete}
                    slideAnimation={slideAnimations[index]}
                    imageOpacity={imageOpacities[index]}
                    showDeleteButton={showDeleteButton}
                />
            ))}
        </Block>
    );
};

export default ArticleSection;
