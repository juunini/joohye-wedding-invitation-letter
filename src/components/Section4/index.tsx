import { useEffect, useRef, useState } from 'react';
import FadeInArticle from '../FadeInArticle';

import Section from '../Section';
import {
  TextType1,
} from '../Texts';

import image1 from './area4_pic3.png';
import image2 from './area4_pic4.png';

export default function Section4(): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const [fadeInActive, setFadeInActive] = useState<boolean>(false);

  const [resize, setResize] = useState<number>(1);

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());

    const isMobileSize = window.innerWidth < 720;
    const fadeInPosition = isMobileSize ? 1800 : 3200;

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
      ref={ref}
      style={{
        height: `${560 * resize}px`,
        marginBottom: `${resize * 160}px`,
      }}
    >
      <FadeInArticle
        direction="bottom"
        active={fadeInActive}
        style={{
          display: fadeInActive ? 'block' : 'none',
          width: `${720 * resize}px`,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={image1}
            alt=""
            style={{
              width: `${resize * 450}px`,
            }}
          />

          <div
            style={{
              position: 'relative',
              marginRight: `${resize * 40}px`,
            }}
          >
            <img
              src={image2}
              alt=""
              style={{
                width: `${resize * 190}px`,
              }}
            />
            <TextType1
              fontSize={`${resize * 18}px`}
              rotate={90}
              top={`${resize * (405 + 30)}px`}
              left={`${resize * -50}px`}
            >
              INVITE YOU TO JOIN THE CEREMONY AND
              <br />
              CELEBRATION OF OUR MARRIAGE
            </TextType1>
          </div>
        </div>
      </FadeInArticle>
    </Section>
  );
}
