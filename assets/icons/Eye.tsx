import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Eye: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 24 24" {...props}>
            <Path
                d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z"
                stroke={props.stroke ?? "#000000"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <Path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke={props.stroke ?? "#000000"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </Svg>
    );
};

export default Eye;
