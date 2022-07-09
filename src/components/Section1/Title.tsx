import { styled, Typography } from '@mui/material';

interface Props {
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
}

export default styled(Typography)(({ lineHeight, fontSize, fontWeight }: Props) => ({
  position: 'relative',
  zIndex: 2,
  fontFamily: 'Josefin Sans',
  lineHeight,
  fontSize,
  fontWeight,
}));
