import styled from '@emotion/styled';

interface CopyButtonProps {
  padding?: string;
  fontSize?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const CopyButton = styled.button(({
  padding = '10px 20px',
  fontSize = '24px',
  top = 'inherit',
  right = 'inherit',
  bottom = 'inherit',
  left = 'inherit',
}: CopyButtonProps) => ({
  position: 'absolute',
  top,
  right,
  bottom,
  left,
  padding,
  fontFamily: 'Noto Sans KR',
  fontSize,
  fontWeight: 300,
  color: '#999',
  backgroundColor: 'transparent',
  border: '1px solid #e7e7e7',
  borderRadius: '100px',
}));
