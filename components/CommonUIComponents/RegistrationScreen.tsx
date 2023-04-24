import React, { useState } from "react";
import { Alert } from "react-native";
import { Block } from "../../styles/Block";
import { Text } from "../../styles/Text";
import Logo from "../SimpleComponents/Logo";
import SimpleInput from "../SimpleComponents/SimpleInput";
import {Button} from "../../styles/Button";
import {ValidationItem} from "../SimpleComponents/ValidationItem";

const RegistrationScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState({
        email: false,
        minLength: false,
        hasNumbers: false,
        hasLetters: false,
        hasSpecialChars: false,
        noRepetitions: false,
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const updateValidation = () => {
        setValidation({
            email: emailRegex.test(email),
            minLength: password.length >= 8,
            hasNumbers: /\d/.test(password),
            hasLetters: /[a-zA-Z]/.test(password),
            hasSpecialChars: specialCharsRegex.test(password),
            noRepetitions: !/(.)\1{2,}/.test(password),
        });
    };

    const handleChange = (setter: (value: string) => void) => (
        text: string
    ) => {
        setter(text);
        updateValidation();
    };

    const handleSubmit = () => {
        const allValid = Object.values(validation).every((v) => v);
        if (allValid) {
            Alert.alert("Registration successful");
        } else {
            Alert.alert("Please correct the invalid fields");
        }
    };

    return (
        <Block flex={1}>
            <Block
                flex={1}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"orange"}
            >
                <Logo />
            </Block>
            <Block
                flex={2}
                paddingHorizontal={"20px"}
                paddingTop={'5px'}
                alignItems={'center'}
            >
                <SimpleInput
                    header="EMAIL"
                    value={email}
                    onChangeText={handleChange(setEmail)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <SimpleInput
                    header="PASSWORD"
                    value={password}
                    onChangeText={handleChange(setPassword)}
                    secureTextEntry={true}
                />
                <Block
                    marginTop={'10px'}
                    marginBottom={'10px'}
                >
                    <ValidationItem valid={validation.email} text="Valid email" />
                    <ValidationItem valid={validation.minLength} text="At least 8 characters" />
                    <ValidationItem valid={validation.hasNumbers} text="Includes numbers" />
                    <ValidationItem valid={validation.hasLetters} text="Includes letters" />
                    <ValidationItem valid={validation.hasSpecialChars} text="Includes special characters" />
                    <ValidationItem valid={validation.noRepetitions} text="No more than two repetitions of the same character" />
                </Block>
                <Button
                    onPress={handleSubmit}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={'#3b5998'}
                    width={'100%'}
                    height={'30px'}
                >
                    <Text color={'#fff'}>LOGIN</Text>
                </Button>
                <Block
                    marginTop={'5px'}
                >
                    <Text
                        color={'grey'}
                        textAlign={'center'}
                        marginBottom={10}
                    >
                        FORGOT PASSWORD?
                    </Text>
                    <Text
                        fontSize={8}
                        textAlign={'center'}
                    >
                        2.3.19 (202012041745) - DEBUG
                    </Text>
                </Block>
            </Block>
        </Block>
    );
};

export default RegistrationScreen;
