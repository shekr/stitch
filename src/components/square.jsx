import React from 'react';

const Square = (props) => {
    const { size, location, fill, stroke, ...rest } = props;

    const xLoc = location[0] * size;
    const yLoc = location[1] * size;

    return (
        <rect {...rest} height={size} width={size} x={xLoc} y={yLoc} fill={fill} stroke={stroke} />
    );
}

export default Square;
