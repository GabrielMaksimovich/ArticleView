import React, { FC } from "react";
import styled from "styled-components/native";
import { BlockInterface } from "./Block";
import {PaddingProps} from "../types/PaddingProps";
import {MarginProps} from "../types/MarginProps";
import {MarginStyle} from "./MarginStyle";
import {PaddingStyle} from "./PaddingStyle";

type ButtonInterface = BlockInterface & PaddingProps & MarginProps &{
    onPress: () => void;
    shadowColor?: string;
    shadowOffset?: { height: number; width: number } | undefined | string;
    shadowOpacity?: number;
    shadowRadius?: string;
    elevation?: number;
    opacity?: string;
    children: React.ReactNode;
    boxShadow?: string;
    position?: string;
    height?: string;
    left?: string | number;
};

const StyledButton = styled.TouchableOpacity<ButtonInterface>`
  ${({ width }): string | undefined => width && `width: ${width}`};
  ${({ height }): string | undefined => height && `height: ${height}`};
  ${({ borderRadius }): string | undefined => borderRadius && `border-radius: ${borderRadius}`};
  ${({ bg }): string | undefined => bg && `background-color: ${bg}`};
  ${({ flexDirection }): string | undefined => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ flexWrap }): string | undefined => flexWrap && `flex-wrap: ${flexWrap}`};
  ${({ flex }): string | undefined => (typeof flex === 'number' || typeof flex === 'string') ? `flex: ${flex}` : undefined};
  ${({ justifyContent }): string | undefined =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }): string | undefined => alignItems && `alignItems: ${alignItems}`};
  ${({ alignSelf }): string | undefined => alignSelf && `align-self: ${alignSelf}`};
  ${({ shadowColor }): string | undefined => shadowColor && `shadow-color: ${shadowColor}`};
  ${({ opacity }): string | undefined => opacity && `opacity: ${opacity}`};
  ${({ shadowOpacity }): string | 0 | undefined => shadowOpacity && `shadow-opacity: ${shadowOpacity}`};
  ${({ shadowRadius }): string | undefined => shadowRadius && `shadow-radius: ${shadowRadius}`};
  ${({ elevation }): string | 0 | undefined => elevation && `elevation: ${elevation}`};
  ${({ elevation }): string | 0 | undefined => elevation && `elevation: ${elevation}`};
  ${({ borderColor }): string | undefined => borderColor && `borderColor: ${borderColor}`};
  ${({ borderWidth }): string | undefined => borderWidth && `borderWidth: ${borderWidth}`};
  ${({ borderBottomColor, borderBottomWidth }): string | undefined =>
    borderBottomColor &&
    borderBottomWidth &&
    `border-bottom-color: ${borderBottomColor}; border-bottom-width: ${borderBottomWidth}`};
  ${({ position }): string | undefined => position && `position: ${position}`};
  ${({ left }): string | undefined => left && `left: ${left}px`};
  ${MarginStyle};
  ${PaddingStyle};
`;

let disabled = false;
export const Button: FC<ButtonInterface> = ({ children, onPress, ...rest }) => {
    const callPress = () => {
        if (!disabled) {
            onPress();
            disabled = true;
        }
        setTimeout(() => {
            disabled = false;
        }, 500);
    };
    return (
        <StyledButton onPress={callPress} {...rest}>
            {children}
        </StyledButton>
    );
};
