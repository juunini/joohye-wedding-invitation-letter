import { useEffect, useState } from 'react';

import FadeInArticle from '../FadeInArticle';
import SaveTheDate from '../SaveTheDate';
import Section from './Section';
import MockImage from './MockImage';
import { TextType1, TextType2 } from '../Texts';

interface Props {
  getClientWidth: () => number;
}

export default function TopLeftFadeIn({ getClientWidth }: Props): JSX.Element {
  const [zoom, setZoom] = useState<number>(1);
  const [marginBottom, setMarginBottom] = useState<number>(160);
  const [top, setTop] = useState<number>(105);
  const [left, setLeft] = useState<number>(380);
  const [width, setWidth] = useState<number>(450);
  const [height, setHeight] = useState<number>(560);
  const [fontSize, setFontSize] = useState<number>(20);
  const [letterSpacing, setLetterSpacing] = useState<number>(5);

  function handleResize(): void {
    const clientWidth = getClientWidth();

    setMarginBottom((160 * clientWidth) / 720);
    setZoom(clientWidth / 720);
    setTop((105 * clientWidth) / 720);
    setLeft((380 * clientWidth) / 720);
    setWidth((450 * clientWidth) / 720);
    setHeight((560 * clientWidth) / 720);
    setFontSize((20 * clientWidth) / 720);
    setLetterSpacing((5 * clientWidth) / 720);
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

        <TextType1
          top={`${top}px`}
          left={`${left}px`}
          fontSize={`${fontSize}px`}
          rotate={90}
        >
          CONCEPT 1 -
          {' '}
          <TextType2
            fontSize={`${(fontSize * 16) / 20}px`}
            letterSpacing={`${letterSpacing}px`}
          >
            Graceful
          </TextType2>
        </TextType1>
      </FadeInArticle>

      <SaveTheDate zoom={zoom} bottom="-80px" right="-80px" />
    </Section>
  );
}
