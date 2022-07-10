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

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <Section
      ref={ref}
      style={{
        textAlign: 'center',
        marginBottom: `${resize * 160}px`,
      }}
    >
      <Title fontSize={`${resize * 94}px`}>Since 2010</Title>
      <SubTitle fontSize={`${resize * 26}px`} style={{ marginBottom: `${resize * 160}px` }}>
        함께 나눈 시간 13년, 길고 긴 연애를 마치고
        <br />
        철수와 주혜 드디어 결혼합니다.
      </SubTitle>

      <img
        src={image1}
        alt=""
        style={{
          width: '100%',
          marginBottom: `${-(resize * 160)}px`,
        }}
      />

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
            style={{
              width: '100%',
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
