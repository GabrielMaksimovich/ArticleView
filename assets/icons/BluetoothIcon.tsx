import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BluetoothIcon: React.FC<SvgProps> = (props) => {
    return (
        <Svg
            width="32"
            height="32"
            viewBox="-8 0 32 32"
            {...props}
        >
            <Path
                d="M7.436 31.952v-14.577l-6.362 6.358-0.742-0.742 6.738-6.733-7.071-7.065 0.742-0.742 6.695 6.69v-15.092l8.668 8.663-7.55 7.546 7.294 7.289-8.412 8.406zM8.485 17.672v11.749l5.879-5.875-5.879-5.874zM8.485 2.579v12.264l6.135-6.132-6.135-6.132z"
                fill={props.fill}
            />
        </Svg>
    );
};

export default BluetoothIcon;
