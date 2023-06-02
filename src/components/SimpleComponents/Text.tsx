import React from "react";
import styled from "styled-components/native";
import { TextProps } from "react-native";
import {MarginProps} from "../../types/MarginProps";
import {PaddingProps} from "../../types/PaddingProps";
import {MarginStyle} from "../../styles/MarginStyle";
import {PaddingStyle} from "../../styles/PaddingStyle";

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
} & TextProps & MarginProps & PaddingProps;

const StyledText = styled.Text<CustomTextProps>`
  color: ${({ color }) => color || "#000"};
  font-size: ${({ fontSize }) => fontSize || 14}px;
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  text-align: ${({ textAlign }) => textAlign || "auto"};
  text-decoration-line: ${({ textDecorationLine }) => textDecorationLine || "none"};
  ${MarginStyle};
  ${PaddingStyle};
`;

export const Text: React.FC<CustomTextProps> = ({ children, ...rest }) => (
    <StyledText {...rest}>{children}</StyledText>
);
