import { useEffect, useRef, useState } from 'react';

import image from './area1_pic1.png';
import SaveTheDate from '../SaveTheDate';
import Section from '../Section';
import {
  OutlineText, TextType1, TextType3, TextType4, Title,
} from '../Texts';
import FadeInArticle from '../FadeInArticle';

export default function Section1(): JSX.Element {
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
        position: 'relative',
        paddingTop: `${resize * 70}px`,
        marginBottom: `${resize * 160}px`,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: `${resize * 540}px`,
          margin: 'auto',
          marginBottom: `${resize * 50}px`,
        }}
      >
        <SaveTheDate top="-30px" right="-50px" zoom={resize * 1} />

        <FadeInArticle
          direction="left"
          active
          style={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Title
            lineHeight={0.9}
            fontSize={`${resize * 94}px`}
            style={{
              position: 'relative',
              zIndex: 2,
              paddingLeft: `${resize * 20}px`,
              marginBottom: `${resize * -135}px`,
            }}
          >
            <OutlineText>
              We
              <br />
              are
            </OutlineText>
            <br />
            getting
            <br />
            married
          </Title>
        </FadeInArticle>

        <div style={{ position: 'relative', height: `${823 * resize}px` }}>
          <FadeInArticle
            direction="bottom"
            from="-20%"
            to="0"
            active
          >
            <img
              src={image}
              alt=""
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                width: '100%',
              }}
            />
          </FadeInArticle>
        </div>
      </div>

      <TextType1
        fontWeight={400}
        fontSize={`${resize * 20}px`}
        rotate={-90}
        top="50%"
        left={`${resize * -30}px`}
      >
        KIM CHEOL SOO
      </TextType1>

      <TextType1
        fontWeight={400}
        fontSize={`${resize * 20}px`}
        rotate={-90}
        top="50%"
        right={`${resize * -30}px`}
      >
        YANG JOO HYE
      </TextType1>

      <TextType4
        fontWeight={500}
        fontSize={`${resize * 26}px`}
        style={{
          textAlign: 'center',
          textDecoration: 'underline',
        }}
      >
        2022.10.03 MON 14:00
      </TextType4>

      <TextType3
        fontWeight={300}
        fontSize={`${resize * 26}px`}
        style={{
          textAlign: 'center',
        }}
      >
        로프트가든344 10층 메인홀
      </TextType3>
    </Section>
  );
}
