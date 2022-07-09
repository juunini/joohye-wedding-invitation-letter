import { useEffect, useRef, useState } from 'react';

import Section from '../Section';
import {
  TextType1,
} from '../Texts';

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
      }}
    >
      <div
        style={{
          width: '450px',
          height: '560px',
          border: '1px solid black',
        }}
      >
        image
      </div>

      <div
        style={{
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '190px',
            height: '220px',
            border: '1px solid black',
          }}
        >
          image
        </div>
        <TextType1
          fontSize={`${resize * 18}px`}
          rotate={90}
          top={`${resize * 440}px`}
          left={`${resize * -30}px`}
        >
          INVITE YOU TO JOIN THE CEREMONY AND
          <br />
          CELEBRATION OF OUR MARRIAGE
        </TextType1>
      </div>

    </Section>
  );
}
