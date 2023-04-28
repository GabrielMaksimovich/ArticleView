import React from 'react';
import Svg, { Polygon, SvgProps } from 'react-native-svg';

const Box: React.FC<SvgProps> = (props) => {
    return (
        <Svg
            width={800}
            height={800}
            viewBox="0 0 12 12"
            {...props}
        >
            <Polygon fill="#1D1D1B" points="2.75,3.815918 8.190918,1.095459 6,0 0.559082,2.720459"/>
            <Polygon fill="#1D1D1B" points="9.309082,1.654541 3.8681641,4.375 6,5.440918 11.440918,2.720459"/>
            <Polygon fill="#1D1D1B" points="5.5,6.309082 0,3.559082 0,9.25 5.5,12"/>
            <Polygon fill="#1D1D1B" points="6.5,6.309082 6.5,12 12,9.25 12,3.559082"/>
        </Svg>
    );
};

export default Box;
