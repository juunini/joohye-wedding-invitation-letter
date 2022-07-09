import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

import Ball from '../Ball';
import { CopyButton } from '../Buttons';
import Section from '../Section';

interface TextProps {
  fontSize: string;
  marginBottom?: string;
}

const Title = styled.h2(({ fontSize, marginBottom }: TextProps) => ({
  position: 'relative',
  marginBottom,
  fontSize,
  fontFamily: 'Noto Sans KR',
  fontWeight: 300,
}));

const P = styled.p(({ fontSize, marginBottom }: TextProps) => ({
  marginBottom,
  fontSize,
  fontFamily: 'Noto Sans KR',
  fontWeight: 300,
}));

const H4 = styled.h4(({ fontSize, marginBottom }: TextProps) => ({
  marginBottom,
  fontSize,
  fontFamily: 'Noto Sans KR',
  fontWeight: 400,
}));

export default function AddressSection(): JSX.Element {
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
      style={{ textAlign: 'center' }}
    >
      <Title fontSize={`${resize * 40}px`} marginBottom={`${resize * 40}px`}>
        오시는 길
        <CopyButton
          type="button"
          fontSize={`${resize * 24}px`}
          padding={`${resize * 10}px ${resize * 20}px`}
          top="0"
          right={`${resize * 40}px`}
        >
          주소 복사
        </CopyButton>
      </Title>

      <div style={{ marginBottom: `${resize * 50}px` }}>지도</div>

      <H4 fontSize={`${resize * 26}px`} marginBottom={`${resize * 10}px`}>
        지하철
      </H4>
      <P fontSize={`${resize * 24}px`} marginBottom={`${resize * 50}px`}>
        <Ball width={`${resize * 20}px`} height={`${resize * 20}px`} color="#531aba" />
        {' '}
        5호선 오목교역 7번출구 앞
      </P>

      <H4 fontSize={`${resize * 26}px`} marginBottom={`${resize * 10}px`}>
        버스
      </H4>
      <P fontSize={`${resize * 24}px`} marginBottom={`${resize * 50}px`}>
        <Ball width={`${resize * 20}px`} height={`${resize * 20}px`} color="#1fb256" />
        {' '}
        지선: 5616, 5012, 6211,6625, 6628, 6629, 6640,
        <br />
        6630,6636, 6624, 6648
        <br />
        <Ball width={`${resize * 20}px`} height={`${resize * 20}px`} color="#1f4fb2" />
        {' '}
        간선 : 640, 650
      </P>

      <H4 fontSize={`${resize * 26}px`} marginBottom={`${resize * 10}px`}>
        주차 안내
      </H4>
      <P fontSize={`${resize * 24}px`} marginBottom={`${resize * 50}px`}>
        건물옆 전용주차장 또는 공영주차장 이용가능 (800대)
      </P>
    </Section>
  );
}
