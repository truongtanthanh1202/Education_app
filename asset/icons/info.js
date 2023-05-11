import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Info(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M18 23h-1v-8.938c0-.011-.003-.021-.003-.031S17 14.011 17 14a1 1 0 00-1-1h-2a1 1 0 000 2h1v8h-1a1 1 0 000 2h4a1 1 0 000-2zm-2-12a2 2 0 100-4 2 2 0 000 4zm0-11C7.164 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30.031c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032z" />
    </Svg>
  );
}

export default Info;
