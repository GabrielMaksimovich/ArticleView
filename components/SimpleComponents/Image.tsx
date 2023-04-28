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
  width: ${({ width }): string | number => (typeof width === 'number' ? `${width}px` : width || "50px")};
  height: ${({ height }): string | number => (typeof height === 'number' ? `${height}px` : height || "50px")};
  ${({ display }): string | null => (display && `display: ${display}`) || null};
`;


export const Image: React.FC<ImageInterface> = ({
                                                    source, resizeMode = "cover", width, height, ...rest
                                                }) => {
    const parsedWidth = typeof width === "string" ? parseInt(width, 10) : width;
    const parsedHeight = typeof height === "string" ? parseInt(height, 10) : height;

    return (
        <StyledImage
            source={source}
            resizeMode={resizeMode}
            width={parsedWidth}
            height={parsedHeight}
            {...rest}
        />
    );
};
