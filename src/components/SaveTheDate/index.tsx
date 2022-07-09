import Svg from './Svg';
import Text from './Text';
import Path from './Path';

const message = '2022.10.03◆SAVE THE DATE◆';

interface Props {
  duration?: number;
  radius?: number;
  fontSize?: string;
  letterSpacing?: string;
}

export default function SaveTheDate({
  duration = 10,
  radius = 80,
  fontSize = '16px',
  letterSpacing = '10.5px',
}: Props): JSX.Element {
  return (
    <Svg duration={duration} size={radius * 2}>
      <Path cx={radius} cy={radius} radius={radius} />
      <Text fontSize={fontSize} letterSpacing={letterSpacing}>{message}</Text>
    </Svg>
  );
}
