import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

type ImageInterface = {
    width?: string | number;
    height?: string | number;
    display?: string;
    resizeMode?: "center" | "repeat" | "cover" | "contain" | "stretch";
    onError: () => void;
    onLoad: () => void;
    source: ImageSourcePropType;
};

const StyledImage = styled.Image<ImageInterface>`
  width: ${({ width }): string | number => width || "50px"};
  height: ${({ height }): string | number => height || "50px"};
  ${({ display }): string | null => (display && `display: ${display}`) || null};
`;

export const Image: React.FC<ImageInterface> = ({
   source, resizeMode = "cover", ...rest
}) => <StyledImage source={source} resizeMode={resizeMode} {...rest} />;
