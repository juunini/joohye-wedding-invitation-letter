import Svg from './Svg';
import Text from './Text';
import Path from './Path';

interface Props {
  duration?: number;
  radius?: number;
  fontSize?: string;
  letterSpacing?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zoom?: number;
}

export default function SaveTheDate({
  duration = 10,
  radius = 80,
  fontSize = '16px',
  letterSpacing = '10.5px',
  top,
  left,
  right,
  bottom,
  zoom = 1,
}: Props): JSX.Element {
  return (
    <Svg
      duration={duration}
      size={radius * 2}
      style={{
        position: 'absolute',
        zIndex: 2,
        top,
        left,
        right,
        bottom,
        zoom,
        overflow: 'visible',
      }}
    >
      <Path cx={radius} cy={radius} radius={radius} />
      <Text fontSize={fontSize} letterSpacing={letterSpacing}>
        2022.10.03◆SAVE THE DATE◆
      </Text>
    </Svg>
  );
}
