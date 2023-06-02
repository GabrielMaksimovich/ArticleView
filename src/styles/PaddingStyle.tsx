import { css } from "styled-components/native";
import { PaddingProps } from "../types/PaddingProps";

export const PaddingStyle = (props: PaddingProps) => css`
  padding-top: ${
    typeof props.paddingTop === "number"
        ? props.paddingTop
        : props.paddingTop || 0
}${typeof props.paddingTop === "number" ? "px" : ""};
  padding-bottom: ${
    typeof props.paddingBottom === "number"
        ? props.paddingBottom
        : props.paddingBottom || 0
}${typeof props.paddingBottom === "number" ? "px" : ""};
  padding-left: ${
    typeof props.paddingLeft === "number"
        ? props.paddingLeft
        : props.paddingLeft || 0
}${typeof props.paddingLeft === "number" ? "px" : ""};
  padding-right: ${
    typeof props.paddingRight === "number"
        ? props.paddingRight
        : props.paddingRight || 0
}${typeof props.paddingRight === "number" ? "px" : ""};
  ${props.paddingHorizontal !== undefined &&
`padding-left: ${
    typeof props.paddingHorizontal === "number"
        ? props.paddingHorizontal
        : props.paddingHorizontal
}${typeof props.paddingHorizontal === "number" ? "px" : ""};
  padding-right: ${
    typeof props.paddingHorizontal === "number"
        ? props.paddingHorizontal
        : props.paddingHorizontal
}${typeof props.paddingHorizontal === "number" ? "px" : ""};`}
  ${props.paddingVertical !== undefined &&
`padding-top: ${
    typeof props.paddingVertical === "number"
        ? props.paddingVertical
        : props.paddingVertical
}${typeof props.paddingVertical === "number" ? "px" : ""};
  padding-bottom: ${
    typeof props.paddingVertical === "number"
        ? props.paddingVertical
        : props.paddingVertical
}${typeof props.paddingVertical === "number" ? "px" : ""};`}
`;
