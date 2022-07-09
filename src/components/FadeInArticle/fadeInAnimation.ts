import { keyframes } from '@emotion/react';

import type { Direction } from '../types';

export default (direction: Direction, from: string, to: string) => keyframes({
  from: {
    opacity: 0,
    [direction]: from,
  },
  to: {
    opacity: 1,
    [direction]: to,
  },
});
