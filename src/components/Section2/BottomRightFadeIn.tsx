import { useEffect, useState } from 'react';

import FadeInArticle from '../FadeInArticle';
import Section from './Section';
import { TextType1 } from '../Texts';

import image from './area2_pic2.png';

interface Props {
  getClientWidth: () => number;
}

export default function BottomRightFadeIn({ getClientWidth }: Props): JSX.Element {
  const [resize, setResize] = useState<number>(1);

  const handleResize = (): void => setResize(getClientWidth() / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <Section
      width={resize * 450}
      height={resize * 560}
      marginBottom={0}
      style={{
        marginLeft: 'auto',
      }}
    >
      <FadeInArticle direction="right">
        <img
          src={image}
          alt=""
          style={{
            width: '100%',
          }}
        />

        <TextType1
          top={`${resize * 190}px`}
          right={`${resize * 300}px`}
          fontSize={`${resize * 20}px`}
          rotate={-90}
          style={{ textAlign: 'right' }}
        >
          REQUEST THE HONOR OF YOUR PRESENCE
          <br />
          AT THE CELEBRATION OF OUR UNION
        </TextType1>
      </FadeInArticle>
    </Section>
  );
}
