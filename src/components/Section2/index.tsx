import { useRef } from 'react';

import TopLeftFadeIn from './TopLeftFadeIn';

export default function Section2(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '720px',
        margin: 'auto',
      }}
    >
      <TopLeftFadeIn getClientWidth={() => (ref.current?.clientWidth || 720)} />
    </section>
  );
}
