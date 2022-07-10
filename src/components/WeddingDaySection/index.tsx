import { Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import Section from '../Section';
import {
  TextType3,
  TextType4,
  Title,
} from '../Texts';

import callIcon from './call.png';
import talkIcon from './talk.png';

export default function WeddingDaySection(): JSX.Element {
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
        padding: `0 ${resize * 90}px`,
        marginBottom: `${resize * 160}px`,
      }}
    >
      <Title
        fontSize={`${resize * 94}px`}
        lineHeight="1"
        style={{
          marginBottom: `${resize * 20}px`,
          lineHeight: 0.9,
          letterSpacing: `${resize * -1}px`,
        }}
      >
        Wedding
        <br />
        day
      </Title>

      <TextType4
        fontSize={`${resize * 26}px`}
        style={{
          display: 'inline-block',
          height: `${resize * 36}px`,
          marginBottom: `${resize * 10}px`,
          fontWeight: 500,
          borderBottom: '1px solid #000',
        }}
      >
        2022.10.03 MON
        <span style={{ fontFamily: 'Noto Sans KR', fontWeight: 300 }}>
          (개천절)
        </span>
        {' '}
        14:00
      </TextType4>
      <TextType3
        fontSize={`${resize * 26}px`}
        style={{ marginBottom: `${resize * 60}px`, fontWeight: 300 }}
      >
        로프트가든344 10층 메인홀
      </TextType3>

      <TextType3
        fontSize={`${resize * 30}px`}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom: `${resize * 30}px`,
          fontWeight: 300,
        }}
      >
        김연한
        <span style={{ margin: `0 ${4 * resize}px` }}>·</span>
        심태숙
        &nbsp;&nbsp;&nbsp;
        <small style={{ fontSize: `${resize * 24}px`, marginRight: `${4 * resize}px` }}>차남</small>
        {' '}
        <strong style={{ fontWeight: 400, flex: 1 }}>김철수</strong>

        <img src={callIcon} alt="전화하기" style={{ width: `${resize * 34}px`, marginRight: `${resize * 30}px` }} />
        <img src={talkIcon} alt="문자하기" style={{ width: `${resize * 44}px` }} />
      </TextType3>

      <TextType3
        fontSize={`${resize * 30}px`}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom: `${resize * 40}px`,
          fontWeight: 300,
        }}
      >
        양병록
        <span style={{ margin: `0 ${4 * resize}px` }}>·</span>
        전영식
        &nbsp;&nbsp;&nbsp;
        <small style={{ fontSize: `${resize * 24}px`, marginRight: `${4 * resize}px` }}>차녀</small>
        {' '}
        <strong style={{ fontWeight: 400, flex: 1 }}>양주혜</strong>

        <img src={callIcon} alt="전화하기" style={{ width: `${resize * 34}px`, marginRight: `${resize * 30}px` }} />
        <img src={talkIcon} alt="문자하기" style={{ width: `${resize * 44}px` }} />
      </TextType3>

      <Button
        type="button"
        variant="contained"
        style={{
          width: '100%',
          height: `${resize * 80}px`,
          color: '#FFF',
          fontFamily: 'Noto Sans KR',
          fontSize: `${resize * 24}px`,
          fontWeight: 300,
          backgroundColor: '#000',
        }}
      >
        혼주에게 연락하기
      </Button>
    </Section>
  );
}
