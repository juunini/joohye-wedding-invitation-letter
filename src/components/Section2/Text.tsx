import { styled, Typography } from '@mui/material';

interface Props {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  fontSize: string;
  rotate: number;
}

export default styled(Typography)(({
  top = 'inherit',
  right = 'inherit',
  bottom = 'inherit',
  left = 'inherit',
  fontSize,
  rotate,
}: Props) => ({
  position: 'absolute',
  top,
  right,
  bottom,
  left,
  fontFamily: 'Josefin Sans',
  fontSize,
  transform: `rotate(${rotate}deg)`,
  whiteSpace: 'nowrap',
}));
