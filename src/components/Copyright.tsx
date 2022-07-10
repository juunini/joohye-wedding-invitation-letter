import { useEffect, useRef, useState } from 'react';
import { TextType4 } from './Texts';

export default function Copyright(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [resize, setResize] = useState<number>(1);

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  });
  return (
    <TextType4
      ref={ref}
      fontSize={`${20 * resize}px`}
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        margin: 'auto',
        padding: `${60 * resize}px 0`,
        textAlign: 'center',
        color: '#6b6b6b',
        backgroundColor: '#f6f6f6',
      }}
    >
      Copyright© All rights reserved.
    </TextType4>
  );
}
