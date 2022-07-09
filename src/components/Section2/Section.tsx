import styled from '@emotion/styled';

interface SectionProps {
  width: number;
  height: number;
  marginBottom: number;
}

export default styled.section(({ width, height, marginBottom }: SectionProps) => ({
  position: 'relative',
  width: `${width}px`,
  height: `${height}px`,
  marginBottom: `${marginBottom}px`,
}));
