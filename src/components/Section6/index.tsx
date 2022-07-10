import { useEffect, useRef, useState } from 'react';
import FadeInArticle from '../FadeInArticle';

import Section from '../Section';
import {
  TextType1,
  TextType2,
} from '../Texts';

import image1 from './area5_pic2.png';
import image2 from './area5_pic3.png';

export default function Section6(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [resize, setResize] = useState<number>(1);
  const [fadeInActive1, setFadeInActive1] = useState<boolean>(false);
  const [fadeInActive2, setFadeInActive2] = useState<boolean>(false);

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 6000) {
        setFadeInActive1(false);
      }
      if (window.scrollY > 6000) {
        setFadeInActive1(true);
      }

      if (window.scrollY <= 6600) {
        setFadeInActive2(false);
      }
      if (window.scrollY > 6600) {
        setFadeInActive2(true);
      }
    });
  }, []);

  return (
    <Section
      ref={ref}
      style={{ marginBottom: `${resize * 160}px` }}
    >
      <div
        style={{
          position: 'relative',
          width: `${resize * 540}px`,
          height: `${resize * 675}px`,
          marginRight: 'auto',
          marginBottom: `${resize * 160}px`,
        }}
      >
        <FadeInArticle
          direction="left"
          active={fadeInActive1}
          style={{
            display: fadeInActive1 ? 'block' : 'none',
          }}
        >
          <img
            src={image1}
            alt=""
            style={{ width: '100%' }}
          />
        </FadeInArticle>

        <TextType1
          fontSize={`${resize * 20}px`}
          rotate={90}
          top={`${resize * 110}px`}
          right={`${resize * -(147 + 30)}px`}
        >
          CONCEPT 3 -
          {' '}
          <TextType2
            fontSize={`${resize * 16}px`}
          >
            MODERN
          </TextType2>
        </TextType1>
      </div>

      <div
        style={{
          position: 'relative',
          width: `${resize * 540}px`,
          height: `${resize * 675}px`,
          marginLeft: 'auto',
        }}
      >
        <FadeInArticle
          direction="right"
          active={fadeInActive2}
          style={{
            display: fadeInActive2 ? 'block' : 'none',
          }}
        >
          <img
            src={image2}
            alt=""
            style={{ width: '100%' }}
          />
        </FadeInArticle>
        <TextType1
          fontSize={`${resize * 18}px`}
          rotate={-90}
          top={`${resize * 205}px`}
          left={`${resize * -(270 + 30)}px`}
          style={{ textAlign: 'right' }}
        >
          JOYFULLY INVITE YOU TO SHARE
          <br />
          IN THEIR HAPPINESS AS THEY UNITE IN MARRIAGE
        </TextType1>
      </div>
    </Section>
  );
}
