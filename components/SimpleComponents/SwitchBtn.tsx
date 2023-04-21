import React, {useState} from "react";

import {Block} from "../../styles/Block";
import {Text} from "react-native";
import {Button} from "../../styles/Button";

const SwitchBtn = () => {
    const handlePress = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };

    const [selectedButton, setSelectedButton] = useState(0);

    return (
        <Block
            bg={'#e9e9e9'}
            paddingVertical={'2px'}
            paddingHorizontal={'5px'}
            flexDirection={'row'}
            justifyContent={'space-between'}
        >
            <Button
                onPress={() => handlePress(0)}
                width={'50%'}
                height={'20px'}
                bg={selectedButton === 0 ? '#fff' : 'transparent'}
                borderRadius={'5px'}
                justifyContent={'center'}
                alignItems={'center'}
                shadowColor={'#000'}
                shadowOpacity={0.2}
                elevation={1}
            >
                <Text style={{color: '#000', fontSize: 12, fontWeight: 'bold'}}>Cartons</Text>
            </Button>

            <Button
                onPress={() => handlePress(1)}
                width={'50%'}
                height={'20px'}
                bg={selectedButton === 1 ? '#fff' : 'transparent'}
                borderRadius={'5px'}
                justifyContent={'center'}
                alignItems={'center'}
                shadowColor={'#000'}
                shadowOpacity={0.2}
                elevation={1}
            >
                <Text style={{color: '#000', fontSize: 12, fontWeight: 'bold'}}>Articles</Text>
            </Button>

        </Block>
    );
};

export default SwitchBtn;
