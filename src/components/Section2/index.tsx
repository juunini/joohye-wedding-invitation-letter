import { useEffect, useRef, useState } from 'react';

import TopLeftFadeIn from './TopLeftFadeIn';
import BottomRightFadeIn from './BottomRightFadeIn';
import Section from '../Section';

export default function Section2(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [resize, setResize] = useState<number>(1);

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <Section ref={ref} style={{ marginBottom: `${resize * 160}px` }}>
      <TopLeftFadeIn getClientWidth={() => (ref.current?.clientWidth || 720)} />
      <BottomRightFadeIn getClientWidth={() => (ref.current?.clientWidth || 720)} />
    </Section>
  );
}
