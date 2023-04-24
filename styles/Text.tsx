import React from "react";
import styled from "styled-components/native";
import { TextProps } from "react-native";

type CustomTextProps = {
    color?: string;
    fontSize?: number;
    fontWeight?: string;
    fontStyle?: "normal" | "italic";
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    textDecorationLine?:
        | "none"
        | "underline"
        | "line-through"
        | "underline line-through";
    marginTop?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
} & TextProps;

const StyledText = styled.Text<CustomTextProps>`
  color: ${({ color }) => color || "#000"};
  font-size: ${({ fontSize }) => fontSize || 14}px;
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  text-align: ${({ textAlign }) => textAlign || "auto"};
  text-decoration-line: ${({ textDecorationLine }) => textDecorationLine || "none"};
  margin-top: ${({ marginTop }) => (typeof marginTop === "number" ? marginTop : marginTop || 0)}px;
  margin-bottom: ${({ marginBottom }) => (typeof marginBottom === "number" ? marginBottom : marginBottom || 0)}px;
  margin-left: ${({ marginLeft }) => (typeof marginLeft === "number" ? marginLeft : marginLeft || 0)}px;
  margin-right: ${({ marginRight }) => (typeof marginRight === "number" ? marginRight : marginRight || 0)}px;
  padding-top: ${({ paddingTop }) => (typeof paddingTop === "number" ? paddingTop : paddingTop || 0)}px;
  padding-bottom: ${({ paddingBottom }) => (typeof paddingBottom === "number" ? paddingBottom : paddingBottom || 0)}px;
  padding-left: ${({ paddingLeft }) => (typeof paddingLeft === "number" ? paddingLeft : paddingLeft || 0)}px;
  padding-right: ${({ paddingRight }) => (typeof paddingRight === "number" ? paddingRight : paddingRight || 0)}px;
`;

export const Text: React.FC<CustomTextProps> = ({ children, ...rest }) => (
    <StyledText {...rest}>{children}</StyledText>
);
