import { styled, Typography } from '@mui/material';

interface Props {
  fontSize: string;
  fontWeight: number;
  letterSpacing: number;
}

export default styled(Typography)(({ letterSpacing, fontSize, fontWeight }: Props) => ({
  letterSpacing,
  fontFamily: 'Noto Sans KR',
  fontWeight,
  fontSize,
  textAlign: 'center',
}));
