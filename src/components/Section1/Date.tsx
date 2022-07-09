import { styled, Typography } from '@mui/material';

interface Props {
  fontSize: string;
  fontWeight: number;
  letterSpacing: number;
}

export default styled(Typography)(({ letterSpacing, fontSize, fontWeight }: Props) => ({
  letterSpacing,
  fontFamily: 'Montserrat',
  fontWeight,
  fontSize,
  textDecoration: 'underline',
  textAlign: 'center',
}));
