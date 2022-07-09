import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Rotation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

interface Props {
  duration: number;
}

const Svg = styled.svg(({ duration }: Props) => ({
  width: '160px',
  height: '160px',
  animation: `${Rotation} ${duration}s linear infinite`,
}));

export default Svg;
