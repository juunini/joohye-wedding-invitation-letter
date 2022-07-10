import { useEffect, useRef, useState } from 'react';

import Section from '../Section';
import {
  TextType1,
} from '../Texts';

import image1 from './area4_pic3.png';
import image2 from './area4_pic4.png';

export default function Section4(): JSX.Element {
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: `${resize * 160}px`,
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

    </Section>
  );
}
