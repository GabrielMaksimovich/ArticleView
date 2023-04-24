import React, {FC, useState} from "react";

import styled from "styled-components/native";

import { Block } from "../../styles/Block";
import { Button } from "../../styles/Button";
import { Text } from "../../styles/Text";
import {ActivityIndicator, Platform, TextInputProps} from "react-native";
import EyeIcon from "../../assets/eye.png";
import EyeOffIcon from "../../assets/eye.png";
import {Image} from "../../styles/Image";
import badge from "../../assets/badge.png";

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
    paddingTop?: string;
    paddingBottom?: string;
    paddingRight?: string;
    paddingLeft?: string;
    paddingVertical?: string;
    keyboardType?: TextInputProps["keyboardType"];
    secureTextEntry?: boolean;
    autoCapitalize?: TextInputProps["autoCapitalize"];
};


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
  ${({ paddingTop }): string | undefined => paddingTop && `paddingTop: ${paddingTop}`};
  ${({ paddingBottom }): string | undefined => paddingBottom && `paddingBottom: ${paddingBottom}`};
  ${({ paddingRight }): string | undefined => paddingRight && `paddingRight: ${paddingRight}`};
  ${({ paddingLeft }): string | undefined => paddingLeft && `paddingLeft: ${paddingLeft}`};
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
    const showClose = (value || '').length > 0;
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
            <Block paddingHorizontal={'16px'} flexDirection={"row"} alignItems={"center"}>
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
                paddingLeft={isIos ? "16px" : "12px"}
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
                        right={showClose ? "40px" : "0"}
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
                                    source={EyeIcon}
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
