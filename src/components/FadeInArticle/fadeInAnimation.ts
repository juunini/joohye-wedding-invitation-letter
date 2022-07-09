import { keyframes } from '@emotion/react';

import type { Direction } from '../types';

export default (direction: Direction, from: string = '-20%', to: string = '0') => keyframes({
  from: {
    opacity: 0,
    [direction]: from,
  },
  to: {
    opacity: 1,
    [direction]: to,
  },
});
