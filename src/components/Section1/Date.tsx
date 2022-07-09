import { styled, Typography } from '@mui/material';

interface Props {
  letterSpacing: string;
  fontSize: string;
  fontWeight: number;
}

export default styled(Typography)(({ letterSpacing, fontSize, fontWeight }: Props) => ({
  letterSpacing,
  fontFamily: 'Montserrat',
  fontWeight,
  fontSize,
  textDecoration: 'underline',
  textAlign: 'center',
}));
