import React, {FC, useState} from "react";

import styled from "styled-components/native";

import { Block } from "../../styles/Block";
import { Button } from "../../styles/Button";
import { Text } from "../../styles/Text";
import {
    ActivityIndicator,
    NativeSyntheticEvent,
    Platform,
    TextInputChangeEventData,
    TextInputProps
} from "react-native";
import EyeIcon from "../../assets/eye.png";
import EyeOffIcon from "../../assets/eye-closed.png";
import {Image} from "../../styles/Image";
import {PaddingProps} from "../../types/PaddingProps";
import {PaddingStyle} from "../../styles/PaddingStyle";


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
            paddingTop={"10px"}
            paddingBottom={"10px"}
        >
            <Block paddingHorizontal={'8px'} flexDirection={"row"} alignItems={"center"}>
                <Text
                    marginRight={"8px"}
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
                paddingLeft={isIos ? "8px" : "6px"}
                paddingRight={"8px"}
                paddingBottom={isIos ? "12px" : ""}
                paddingTop={isIos ? "9px" : ""}
            >
                <StyledSimpleInput
                    value={value}
                    fontSize={isIos ? "17px" : "15px"}
                    fontWeight={"400"}
                    paddingRight={"25px"}
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
                            paddingRight={"14px"}
                            paddingLeft={"12px"}
                            height={"100%"}
                            justifyContent={"center"}
                            onPress={toggleSecureTextEntry}
                        >
                            {isSecureTextEntry ? (
                                <Image
                                    resizeMode={'contain'}
                                    width='24px'
                                    height='24px'
                                    onError={() => console.log('error')}
                                    onLoad={() => console.log('loaded')}
                                    source={EyeOffIcon}
                                />
                            ) : (
                                <Image
                                    resizeMode={'contain'}
                                    width='24px'
                                    height='24px'
                                    onError={() => console.log('error')}
                                    onLoad={() => console.log('loaded')}
                                    source={EyeIcon}
                                />
                            )}
                        </Button>
                    </Block>
                )}
            </Block>
        </Block>
    );
};

export default SimpleInputComponent;
