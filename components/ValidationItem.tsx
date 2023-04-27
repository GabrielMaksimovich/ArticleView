import { Text } from "../styles/Text";
import {FC} from "react";

type Props = {
    valid: boolean;
    text: string;
};

export const ValidationItem: FC<Props> = ({ valid, text }) => (
    <Text color={valid ? "green" : "red"}>{text}</Text>
);
