import { styled, Typography } from '@mui/material';

interface Props {
  fontSize: string;
  fontWeight: number;
  rotate: number;
  left?: string;
  right?: string;
}

export default styled(Typography)(({
  rotate, fontSize, fontWeight, left, right,
}: Props) => ({
  position: 'absolute',
  zIndex: 2,
  top: '50%',
  left,
  right,
  fontFamily: 'Montserrat',
  fontWeight,
  fontSize,
  transform: `rotate(${rotate}deg)`,
}));
