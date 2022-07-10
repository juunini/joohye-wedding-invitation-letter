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
  const [fadeInActive, setFadeInActive] = useState<boolean>(false);

  const handleResize = (): void => setResize(getClientWidth() / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());

    const isMobileSize = window.innerWidth < 720;
    const fadeInPosition = isMobileSize ? 560 : 580;

    window.addEventListener('scroll', () => {
      if (window.scrollY <= fadeInPosition) {
        setFadeInActive(false);
      }
      if (window.scrollY > fadeInPosition) {
        setFadeInActive(true);
      }
    });
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
      <FadeInArticle
        direction="right"
        active={fadeInActive}
        style={{
          display: fadeInActive ? 'block' : 'none',
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: '100%',
          }}
        />

        <TextType1
          top={`${resize * 190}px`}
          right={`${resize * (250 + 30)}px`}
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
