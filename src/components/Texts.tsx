import { styled, Typography } from '@mui/material';

interface TextType1Props {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  fontSize?: string;
  rotate: number;
}

export const TextType1 = styled(Typography)(({
  top = 'inherit',
  right = 'inherit',
  bottom = 'inherit',
  left = 'inherit',
  fontSize = '20px',
  rotate,
}: TextType1Props) => ({
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

interface TextType2Props {
  fontSize?: string;
  letterSpacing?: string;
}

export const TextType2 = styled(Typography)(({
  fontSize = '16px',
  letterSpacing = '5px',
}: TextType2Props) => ({
  fontFamily: 'Josefin Sans',
  fontSize,
  letterSpacing,
  whiteSpace: 'nowrap',
}));
