import styled from '@emotion/styled';

interface Props {
  width?: string;
  height?: string;
  color: string;
}

export default styled.span(({ width = '20px', height = '20px', color }: Props) => ({
  display: 'inline-block',
  width,
  height,
  verticalAlign: 'baseline',
  backgroundColor: color,
  borderRadius: '50%',
}));
