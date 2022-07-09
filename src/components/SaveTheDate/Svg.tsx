import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Rotation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

interface Props {
  duration: number;
  size: number;
}

const Svg = styled.svg(({ duration, size }: Props) => ({
  width: `${size}px`,
  height: `${size}px`,
  animation: `${Rotation} ${duration}s linear infinite`,
}));

export default Svg;
