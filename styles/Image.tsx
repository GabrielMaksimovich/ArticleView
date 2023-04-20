import React from "react";
import styled from "styled-components/native";

type ImageInterface = {
    width?: string;
    height?: string;
    display?: string;
    resizeMode: string;
    onError: () => void;
    onLoad: () => void;
    source: { uri: string } | React.ReactNode;
};

const StyledImage = styled.Image<ImageInterface>`
  width: ${({ width }): string => width || "50px"};
  height: ${({ height }): string => height || "50px"};
  ${({ display }): string | null => (display && `display: ${display}`) || null};
`;

export const Image: React.FC<ImageInterface> = ({ source, resizeMode, ...rest }) => (
    <StyledImage source={source} resizeMode={resizeMode} {...rest} />
);
