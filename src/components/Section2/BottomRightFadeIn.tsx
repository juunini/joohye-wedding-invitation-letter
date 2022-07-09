import { useEffect, useState } from 'react';

import FadeInArticle from '../FadeInArticle';
import Section from './Section';
import MockImage from './MockImage';
import Text from './Text';

interface Props {
  getClientWidth: () => number;
}

export default function BottomRightFadeIn({ getClientWidth }: Props): JSX.Element {
  const [top, setTop] = useState<number>(140);
  const [right, setRight] = useState<number>(340);
  const [width, setWidth] = useState<number>(450);
  const [height, setHeight] = useState<number>(560);
  const [fontSize, setFontSize] = useState<number>(20);

  function handleResize(): void {
    const clientWidth = getClientWidth();
    setTop((140 * clientWidth) / 720);
    setRight((340 * clientWidth) / 720);
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
      marginBottom={0}
      style={{
        marginLeft: 'auto',
      }}
    >
      <FadeInArticle direction="right">
        <MockImage
          width={`${width}px`}
          height={`${height}px`}
        >
          image
        </MockImage>

        <Text
          top={`${top}px`}
          right={`${right}px`}
          fontSize={`${fontSize}px`}
          rotate={-90}
          style={{ textAlign: 'right' }}
        >
          Requesst the honor of your presence
          <br />
          at the celebration of our union
        </Text>
      </FadeInArticle>
    </Section>
  );
}
