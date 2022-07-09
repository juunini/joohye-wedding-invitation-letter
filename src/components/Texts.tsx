import { styled, Typography } from '@mui/material';
import emotion from '@emotion/styled';

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
  display: 'inline',
  fontFamily: 'Josefin Sans',
  fontSize,
  letterSpacing,
  whiteSpace: 'nowrap',
}));

interface TextType3Props {
  fontSize?: string;
}

export const TextType3 = styled(Typography)(({
  fontSize = '26px',
}: TextType3Props) => ({
  fontFamily: 'Noto Sans KR',
  fontSize,
  whiteSpace: 'nowrap',
}));

interface TextType4Props {
  fontSize?: string;
}

export const TextType4 = styled(Typography)(({
  fontSize = '26px',
}: TextType4Props) => ({
  fontFamily: 'Montserrat',
  fontSize,
  whiteSpace: 'nowrap',
}));

interface TitleProps {
  fontSize?: string;
  fontWeight?: number;
}

export const Title = styled(Typography)(({
  fontSize = '94px',
  fontWeight = 500,
}: TitleProps) => ({
  fontFamily: 'Josefin Sans',
  fontWeight,
  fontSize,
  whiteSpace: 'nowrap',
}));

interface SubTitleProps {
  fontSize?: string;
  fontWeight?: number;
}

export const SubTitle = styled(Typography)(({
  fontSize = '26px',
  fontWeight = 300,
}: SubTitleProps) => ({
  fontFamily: 'Noto Sans KR',
  fontSize,
  fontWeight,
  whiteSpace: 'nowrap',
}));

interface OutlineTextProps {
  color?: string;
  outlineColor?: string;
}

export const OutlineText = emotion.span(({
  color = '#FFF',
  outlineColor = '#000',
}: OutlineTextProps) => ({
  color,
  textShadow: `-1px -1px 0 ${outlineColor}, 1px -1px 0 ${outlineColor}, -1px 1px 0 ${outlineColor}, 1px 1px 0 ${outlineColor}`,
}));
