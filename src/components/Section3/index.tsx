import { useEffect, useRef, useState } from 'react';

import FadeInArticle from '../FadeInArticle';
import SaveTheDate from '../SaveTheDate';
import Section from '../Section';
import {
  Title, TextType1, TextType2, SubTitle,
} from '../Texts';

import image1 from './area4_pic1.png';
import image2 from './area4_pic2.png';

export default function Section3(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [resize, setResize] = useState<number>(1);
  const [fadeInTitleActive, setFadeInTitleActive] = useState<boolean>(true);
  const [fadeInActive1, setFadeInActive1] = useState<boolean>(false);
  const [fadeInActive2, setFadeInActive2] = useState<boolean>(false);

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());

    const isMobileSize = window.innerWidth < 720;
    const fadeInTitlePosition = isMobileSize ? 840 : 1800;
    const fadeInPosition1 = isMobileSize ? 1090 : 2000;
    const fadeInPosition2 = isMobileSize ? 1460 : 2400;

    window.addEventListener('scroll', () => {
      if (window.scrollY <= fadeInTitlePosition) {
        setFadeInTitleActive(false);
      }
      if (window.scrollY > fadeInTitlePosition) {
        setFadeInTitleActive(true);
      }

      if (window.scrollY <= fadeInPosition1) {
        setFadeInActive1(false);
      }
      if (window.scrollY > fadeInPosition1) {
        setFadeInActive1(true);
      }

      if (window.scrollY <= fadeInPosition2) {
        setFadeInActive2(false);
      }
      if (window.scrollY > fadeInPosition2) {
        setFadeInActive2(true);
      }
    });
  }, []);

  return (
    <Section
      ref={ref}
      style={{
        textAlign: 'center',
        marginBottom: `${resize * 160}px`,
      }}
    >
      <div
        style={{
          position: 'relative',
          height: resize * (80 + 30 + 80),
          marginBottom: `${resize * 160}px`,
        }}
      >
        <FadeInArticle
          direction="bottom"
          active={fadeInTitleActive}
          style={{
            display: fadeInTitleActive ? 'block' : 'none',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Title
            fontSize={`${resize * 94}px`}
            style={{
              height: `${resize * 80}px`,
              lineHeight: 1,
              marginBottom: `${resize * 30}px`,
            }}
          >
            Since 2010
          </Title>

          <SubTitle fontSize={`${resize * 26}px`}>
            함께 나눈 시간 13년, 길고 긴 연애를 마치고
            <br />
            철수와 주혜 드디어 결혼합니다.
          </SubTitle>
        </FadeInArticle>
      </div>

      <div
        style={{
          position: 'relative',
          height: `${resize * 870}px`,
          marginBottom: `${-(resize * 160)}px`,
        }}
      >
        <FadeInArticle
          direction="left"
          active={fadeInActive1}
          style={{
            display: fadeInActive1 ? 'block' : 'none',
            width: `${resize * 720}px`,
          }}
        >
          <img
            src={image1}
            alt=""
            style={{
              width: '100%',
            }}
          />
        </FadeInArticle>
      </div>

      <div
        style={{
          position: 'relative',
          width: `${resize * 450}px`,
          margin: 'auto',
        }}
      >

        <div
          style={{
            width: '100%',
            height: `${resize * 560}px`,
            marginBottom: `${resize * 30}px`,
          }}
        >
          <FadeInArticle
            direction="top"
            from="20%"
            to="0"
            active={fadeInActive2}
            style={{
              width: '100%',
              display: fadeInActive2 ? 'block' : 'none',
            }}
          >
            <img
              src={image2}
              alt=""
              style={{ width: '100%' }}
            />
          </FadeInArticle>
        </div>

        <TextType1 fontSize={`${resize * 20}px`} rotate={0}>
          CONCEPT 2 -
          {' '}
          <TextType2
            fontSize={`${resize * 16}px`}
            letterSpacing={`${resize * 5}px`}
          >
            LOVELY
          </TextType2>
        </TextType1>

        <SaveTheDate zoom={resize} bottom="-80px" right="-80px" />
      </div>
    </Section>
  );
}
