import { css } from "styled-components/native";
import { MarginProps } from "../types/MarginProps";

export const MarginStyle = (props: MarginProps) => css`
  margin-top: ${typeof props.marginTop === "number" ? props.marginTop : props.marginTop || 0}px;
  margin-bottom: ${typeof props.marginBottom === "number" ? props.marginBottom : props.marginBottom || 0}px;
  margin-left: ${typeof props.marginLeft === "number" ? props.marginLeft : props.marginLeft || 0}px;
  margin-right: ${typeof props.marginRight === "number" ? props.marginRight : props.marginRight || 0}px;
`;
