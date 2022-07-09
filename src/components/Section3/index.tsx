import { useEffect, useRef, useState } from 'react';
import FadeInArticle from '../FadeInArticle';
import SaveTheDate from '../SaveTheDate';
import {
  Title, TextType1, TextType2, SubTitle,
} from '../Texts';

export default function Section3(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [resize, setResize] = useState<number>(1);

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '720px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <Title fontSize={`${resize * 94}px`}>Since 2010</Title>
      <SubTitle fontSize={`${resize * 26}px`} style={{ marginBottom: `${resize * 160}px` }}>
        함께 나눈 시간 13년, 길고 긴 연애를 마치고
        <br />
        철수와 주혜 드디어 결혼합니다.
      </SubTitle>

      <div
        style={{
          width: '100%',
          height: `${resize * 870}px`,
          marginBottom: `${-(resize * 160)}px`,
          border: '1px solid black',
        }}
      >
        image
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
            style={{
              width: '100%',
              height: `${resize * 560}px`,
              border: '1px solid black',
            }}
          >
            image
          </FadeInArticle>
        </div>

        <TextType1 fontSize={`${resize * 20}px`} rotate={0}>
          CONCEPT 2 -
          {' '}
          <TextType2
            fontSize={`${resize * 16}px`}
            letterSpacing={`${resize * 5}px`}
          >
            Lovely
          </TextType2>
        </TextType1>

        <SaveTheDate zoom={resize} bottom="-80px" right="-80px" />
      </div>

    </section>
  );
}
