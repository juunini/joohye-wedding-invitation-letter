import { useEffect, useRef, useState } from 'react';

import Section from '../Section';
import {
  TextType1,
  TextType2,
} from '../Texts';

export default function Section6(): JSX.Element {
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
    >
      <div
        style={{
          position: 'relative',
          width: `${resize * 540}px`,
          height: `${resize * 670}px`,
          marginRight: 'auto',
          marginBottom: `${resize * 160}px`,
          border: '1px solid black',
        }}
      >
        image
        <TextType1
          fontSize={`${resize * 20}px`}
          rotate={90}
          top={`${resize * 100}px`}
          right={`${resize * -150}px`}
        >
          CONCEPT 3 -
          {' '}
          <TextType2
            fontSize={`${resize * 16}px`}
          >
            Modern
          </TextType2>
        </TextType1>
      </div>

      <div
        style={{
          position: 'relative',
          width: `${resize * 540}px`,
          height: `${resize * 670}px`,
          marginLeft: 'auto',
          border: '1px solid black',
        }}
      >
        image
        <TextType1
          fontSize={`${resize * 18}px`}
          rotate={-90}
          top={`${resize * 202}px`}
          left={`${resize * -300}px`}
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
