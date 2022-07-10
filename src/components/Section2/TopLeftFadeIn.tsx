import { useEffect, useState } from 'react';

import FadeInArticle from '../FadeInArticle';
import SaveTheDate from '../SaveTheDate';
import Section from './Section';
import { TextType1, TextType2 } from '../Texts';

import image from './area2_pic1.png';
import isiOS from '../../isiOS';

interface Props {
  getClientWidth: () => number;
}

export default function TopLeftFadeIn({ getClientWidth }: Props): JSX.Element {
  const [resize, setResize] = useState<number>(1);
  const [fadeInActive, setFadeInActive] = useState<boolean>(false);

  const handleResize = (): void => setResize(getClientWidth() / 720);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());

    const isMobileSize = window.innerWidth < 720;
    const mobilePosition = isiOS() ? 200 : 120;
    const fadeInPosition = isMobileSize ? mobilePosition : 200;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset <= fadeInPosition) {
        setFadeInActive(false);
      }
      if (window.pageYOffset > fadeInPosition) {
        setFadeInActive(true);
      }
    });
  }, []);

  return (
    <Section
      width={450 * resize}
      height={560 * resize}
      marginBottom={160 * resize}
    >
      <FadeInArticle
        direction="left"
        active={fadeInActive}
        style={{
          display: fadeInActive ? 'block' : 'none',
        }}
      >
        <img
          style={{
            width: `${450 * resize}px`,
          }}
          src={image}
          alt=""
        />

        <TextType1
          top={`${120 * resize}px`}
          left={`${(320 + 30) * resize}px`}
          fontSize={`${20 * resize}px`}
          rotate={90}
        >
          CONCEPT 1 -
          {' '}
          <TextType2
            fontSize={`${16 * resize}px`}
            letterSpacing={`${5 * resize}px`}
          >
            GRACEFUL
          </TextType2>
        </TextType1>
      </FadeInArticle>

      <SaveTheDate zoom={resize} bottom="-80px" right="-80px" />
    </Section>
  );
}
