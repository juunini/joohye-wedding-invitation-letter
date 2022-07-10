import { useEffect, useRef, useState } from 'react';

import Section from '../Section';
import SaveTheDate from '../SaveTheDate';
import {
  Title,
  TextType3,
  OutlineText,
} from '../Texts';

import image from './area5_pic1.png';

export default function Section5(): JSX.Element {
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
      style={{ marginBottom: `${resize * 160}px` }}
    >
      <Title
        fontSize={`${resize * 94}px`}
        lineHeight="1"
        style={{
          position: 'relative',
          zIndex: 2,
          marginBottom: `${resize * -55}px`,
          paddingLeft: `${resize * 90}px`,
          letterSpacing: `${resize * -1}px`,
        }}
      >
        <OutlineText>
          Save
          <br />
          &nbsp;&nbsp;&nbsp;
          the date
        </OutlineText>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        22.10.03
      </Title>

      <div
        style={{
          position: 'relative',
          width: `${resize * 540}px`,
          marginLeft: 'auto',
          marginBottom: `${resize * 160}px`,
        }}
      >
        <img
          src={image}
          alt=""
          style={{ width: '100%' }}
        />
        <SaveTheDate zoom={resize} bottom="-80px" left="-80px" />
      </div>

      <TextType3
        fontSize={`${resize * 26}px`}
        fontWeight={300}
        style={{
          textAlign: 'center',
        }}
      >
        저희 두 사람이 늘 그래왔듯이
        <br />
        변치않는 사랑으로 서로를 지켜나갈 수 있도록
        <br />
        앞날을 축복해 주시면 감사하겠습니다.
      </TextType3>

    </Section>
  );
}
