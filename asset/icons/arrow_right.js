import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 96 960 960"
      width={props.width}
      {...props}>
      <Path
        d="M375 816l-43-43 198-198-198-198 43-43 241 241-241 241z"
        fill={'#fff'}
      />
    </Svg>
  );
}

export default ArrowRight;
