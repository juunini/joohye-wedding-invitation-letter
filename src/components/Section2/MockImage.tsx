import styled from '@emotion/styled';

interface Props {
  width: string;
  height: string;
}

export default styled.div(({ width, height }: Props) => ({
  display: 'block',
  width,
  height,
  border: '1px solid black',
}));
