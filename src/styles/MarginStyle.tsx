import { css } from "styled-components/native";
import { MarginProps } from "../types/MarginProps";

export const MarginStyle = (props: MarginProps) => css`
  margin-top: ${
    typeof props.marginTop === "number"
        ? props.marginTop
        : props.marginTop || 0
}${typeof props.marginTop === "number" ? "px" : ""};
  margin-bottom: ${
    typeof props.marginBottom === "number"
        ? props.marginBottom
        : props.marginBottom || 0
}${typeof props.marginBottom === "number" ? "px" : ""};
  margin-left: ${
    typeof props.marginLeft === "number"
        ? props.marginLeft
        : props.marginLeft || 0
}${typeof props.marginLeft === "number" ? "px" : ""};
  margin-right: ${
    typeof props.marginRight === "number"
        ? props.marginRight
        : props.marginRight || 0
}${typeof props.marginRight === "number" ? "px" : ""};
  ${props.marginHorizontal !== undefined &&
`margin-left: ${
    typeof props.marginHorizontal === "number"
        ? props.marginHorizontal
        : props.marginHorizontal
}${typeof props.marginHorizontal === "number" ? "px" : ""};
  margin-right: ${
    typeof props.marginHorizontal === "number"
        ? props.marginHorizontal
        : props.marginHorizontal
}${typeof props.marginHorizontal === "number" ? "px" : ""};`}
  ${props.marginVertical !== undefined &&
`margin-top: ${
    typeof props.marginVertical === "number"
        ? props.marginVertical
        : props.marginVertical
}${typeof props.marginVertical === "number" ? "px" : ""};
  margin-bottom: ${
    typeof props.marginVertical === "number"
        ? props.marginVertical
        : props.marginVertical
}${typeof props.marginVertical === "number" ? "px" : ""};`}
`;
