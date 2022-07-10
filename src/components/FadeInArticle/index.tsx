import styled from '@emotion/styled';

import type { Direction } from '../types';
import fadeInAnimation from './fadeInAnimation';

interface Props {
  direction: Direction;
  duration?: number;
  from?: string;
  to?: string;
  active?: boolean;
}

export default styled.article(({
  direction,
  duration = 1.5,
  from = '-20%',
  to = '0',
  active = false,
}: Props) => ({
  position: 'absolute',
  animation: active ? `${fadeInAnimation(direction, from, to)} ${duration}s ease-out 1` : 'none',
}));
