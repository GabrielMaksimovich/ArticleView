import React, {FC, useState} from "react";
import {Block} from "../../styles/Block";
import {Text} from "react-native";
import {Button} from "../../styles/Button";

type Props = {
    onButtonChange: (value: string) => void;
}

const SwitchBtn: FC<Props> = ({onButtonChange}) => {
    const [activeButton, setActiveButton] = useState("Cartons");

    const handlePress = (buttonName: string) => {
        setActiveButton(buttonName);
        onButtonChange(buttonName);
    };

    return (
        <Block
            bg={"#e9e9e9"}
            paddingVertical={"2px"}
            paddingHorizontal={"5px"}
            flexDirection={"row"}
            justifyContent={"space-between"}
        >
            <Button
                onPress={() => handlePress("Cartons")}
                width={"50%"}
                height={"20px"}
                bg={activeButton === "Cartons" ? "#fff" : "transparent"}
                borderRadius={"5px"}
                justifyContent={"center"}
                alignItems={"center"}
                shadowColor={"#000"}
                shadowOpacity={0.2}
                elevation={1}
            >
                <Text style={{color: "#000", fontSize: 12, fontWeight: "bold"}}>
                    Cartons
                </Text>
            </Button>

            <Button
                onPress={() => handlePress("Articles")}
                width={"50%"}
                height={"20px"}
                bg={activeButton === "Articles" ? "#fff" : "transparent"}
                borderRadius={"5px"}
                justifyContent={"center"}
                alignItems={"center"}
                shadowColor={"#000"}
                shadowOpacity={0.2}
                elevation={1}
            >
                <Text style={{color: "#000", fontSize: 12, fontWeight: "bold"}}>
                    Articles
                </Text>
            </Button>
        </Block>
    );
};

export default SwitchBtn;