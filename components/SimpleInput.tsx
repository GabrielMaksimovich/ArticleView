import React, {FC, useState} from "react";

import styled from "styled-components/native";

import { Block } from "../styles/Block";
import { Button } from "../styles/Button";
import { Text } from "../styles/Text";
import {
    ActivityIndicator,
    NativeSyntheticEvent,
    Platform,
    TextInputChangeEventData,
    TextInputProps
} from "react-native";

import {PaddingProps} from "../types/PaddingProps";
import {PaddingStyle} from "../styles/PaddingStyle";
import Eye from "../assets/icons/eye-svgrepo-com.svg";
import EyeClosed from "../assets/icons/eye-slash-svgrepo-com.svg";


type TextInputType = {
    header: string;
    width?: string;
    color?: string;
    value?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    bg?: string;
    onChangeText: (textValue: string) => void;
    placeholder?: string;
    isLoading?: boolean;
    paddingHorizontal?: string;
    paddingVertical?: string;
    keyboardType?: TextInputProps["keyboardType"];
    secureTextEntry?: boolean;
    autoCapitalize?: TextInputProps["autoCapitalize"];
    onBlur?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    errorMessage?: string | false | undefined;
} & PaddingProps;


const StyledSimpleInput = styled.TextInput<Omit<TextInputType, 'header'>>`
  width: ${({ width }): string | undefined => `${width || "100%"}`};
  ${({ fontWeight }): string | undefined => fontWeight && `font-weight: ${fontWeight}`};
  color: ${({ color }): string => color || 'black'};
  background-color: ${({ bg }): string => bg || "transparent"};
  font-size: ${({ fontSize }): string => fontSize || '14px'};
  font-family: ${({ fontFamily }): string => fontFamily || 'Helvetica'};
  ${({ paddingHorizontal }): string | undefined =>
    paddingHorizontal && `padding-horizontal: ${paddingHorizontal}`};
  ${({ paddingVertical }): string | undefined =>
    paddingVertical && `padding-vertical: ${paddingVertical}`};
  ${PaddingStyle};
`;
const isIos = Platform.OS === "ios";

const SimpleInputComponent: FC<TextInputType> = ({
        onChangeText,
        value,
        header,
        isLoading,
        keyboardType,
        secureTextEntry,
        autoCapitalize,
        ...rest
    }) => {

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

    const toggleSecureTextEntry = () => {
        setIsSecureTextEntry(!isSecureTextEntry);
    };

    return (
        <Block
            flexDirection={"column"}
            bg={'#fff'}
            height={"60px"}
            borderBottomWidth={"1px"}
            borderBottomColor={'light-grey'}
            paddingTop={10}
            paddingBottom={10}
        >
            <Block paddingHorizontal={8} flexDirection={"row"} alignItems={"center"}>
                <Text
                    marginRight={8}
                    fontSize={15}
                    fontWeight={"500"}
                    color={'grey'}
                >
                    {header}
                </Text>
                {isLoading && <ActivityIndicator size={"small"} />}
            </Block>
            <Block
                flexDirection={"row"}
                paddingLeft={isIos ? 8 : 6}
                paddingRight={8}
                paddingBottom={isIos ? 12 : ""}
                paddingTop={isIos ? 9 : ""}
            >
                <StyledSimpleInput
                    value={value}
                    fontSize={isIos ? "17px" : "15px"}
                    fontWeight={"400"}
                    paddingRight={25}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={isSecureTextEntry}
                    autoCapitalize={autoCapitalize}
                    {...rest}
                />
                {secureTextEntry && (
                    <Block
                        height={"100%"}
                        right={"0"}
                        position={"absolute"}
                        top={Platform.OS === "ios" ? "8px" : "0px"}
                    >
                        <Button
                            paddingRight={14}
                            paddingLeft={12}
                            height={"100%"}
                            justifyContent={"center"}
                            onPress={toggleSecureTextEntry}
                        >
                            {isSecureTextEntry ? (
                                <EyeClosed width={25} height={25} fill={'#000'}/>
                            ) : (
                                <Eye width={25} height={25} fill={'#000'}/>
                            )}
                        </Button>
                    </Block>
                )}
            </Block>
        </Block>
    );
};

export default SimpleInputComponent;
