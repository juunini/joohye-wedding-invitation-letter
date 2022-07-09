import { useRef } from 'react';

import TopLeftFadeIn from './TopLeftFadeIn';
import BottomRightFadeIn from './BottomRightFadeIn';
import Section from '../Section';

export default function Section2(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  return (
    <Section ref={ref}>
      <TopLeftFadeIn getClientWidth={() => (ref.current?.clientWidth || 720)} />
      <BottomRightFadeIn getClientWidth={() => (ref.current?.clientWidth || 720)} />
    </Section>
  );
}
