import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import FadeInArticle from '../FadeInArticle';
import SaveTheDate from '../SaveTheDate';
import MockImage from './MockImage';
import Text from './Text';

interface SectionProps {
  width: number;
  height: number;
  marginBottom: number;
}

const Section = styled.section(({ width, height, marginBottom }: SectionProps) => ({
  position: 'relative',
  width: `${width}px`,
  height: `${height}px`,
  marginBottom: `${marginBottom}px`,
}));

interface Props {
  getClientWidth: () => number;
}

export default function TopLeftFadeIn({ getClientWidth }: Props): JSX.Element {
  const [zoom, setZoom] = useState<number>(1);
  const [marginBottom, setMarginBottom] = useState<number>(160);
  const [top, setTop] = useState<number>(90);
  const [left, setLeft] = useState<number>(380);
  const [width, setWidth] = useState<number>(450);
  const [height, setHeight] = useState<number>(560);
  const [fontSize, setFontSize] = useState<number>(20);

  function handleResize(): void {
    const clientWidth = getClientWidth();

    setMarginBottom((160 * clientWidth) / 720);
    setZoom(clientWidth / 720);
    setTop((90 * clientWidth) / 720);
    setLeft((380 * clientWidth) / 720);
    setWidth((450 * clientWidth) / 720);
    setHeight((560 * clientWidth) / 720);
    setFontSize((20 * clientWidth) / 720);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <Section
      width={width}
      height={height}
      marginBottom={marginBottom}
    >
      <FadeInArticle direction="left">
        <MockImage
          width={`${width}px`}
          height={`${height}px`}
        >
          image
        </MockImage>

        <Text
          top={`${top}px`}
          left={`${left}px`}
          fontSize={`${fontSize}px`}
          rotate={90}
        >
          CONCEPT 1 - Graceful
        </Text>
      </FadeInArticle>

      <SaveTheDate zoom={zoom} bottom="-80px" right="-80px" />
    </Section>
  );
}
