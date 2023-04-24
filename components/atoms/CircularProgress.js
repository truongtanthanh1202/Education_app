import React from 'react';
import {View} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

const CircularProgress = ({size, strokeWidth, progress}) => {
  const _size = size ?? 40;
  const _strokeWidth = strokeWidth ?? 4;
  const _center = _size / 2;
  const _radius = _center - _strokeWidth;
  const _progress = progress ?? 75;
  const arcLength = 2 * Math.PI * _radius;
  const arcOffset = arcLength * ((100 - _progress) / 100);
  return (
    <Svg width={_size} height={_size}>
      <Circle
        stroke="#ff9999"
        strokeWidth={_strokeWidth}
        fill="transparent"
        cx={_size / 2}
        cy={_size / 2}
        r={_radius}
      />
      <Circle
        stroke="#3787ff"
        strokeWidth={_strokeWidth}
        fill="transparent"
        cx={_size / 2}
        cy={_size / 2}
        r={_radius}
        strokeDasharray={arcLength}
        strokeDashoffset={arcOffset}
      />
    </Svg>
  );
};

export default CircularProgress;
