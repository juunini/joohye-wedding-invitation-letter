import { useEffect, useRef, useState } from 'react';

import image from './area1_pic1.png';
import Title from './Title';
import Name from './Name';
import Date from './Date';
import Address from './Address';
import SaveTheDate from '../SaveTheDate';
import Section from '../Section';
import { OutlineText } from '../Texts';

interface Props {
  title?: {
    lineHeight: number;
    fontSize: number;
    fontWeight: number;
  };
  name?: {
    fontSize: number;
    fontWeight: number;
  };
  date?: {
    fontSize: number;
    fontWeight: number;
    letterSpacing: number;
  };
  address?: {
    fontSize: number;
    fontWeight: number;
    letterSpacing: number;
  };
}

export default function Section1({
  title = {
    lineHeight: 0.9,
    fontSize: 90,
    fontWeight: 500,
  },
  name = {
    fontSize: 20,
    fontWeight: 500,
  },
  date = {
    letterSpacing: 1.4,
    fontSize: 28,
    fontWeight: 500,
  },
  address = {
    letterSpacing: 1.4,
    fontSize: 28,
    fontWeight: 300,
  },
}: Props): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [resize, setResize] = useState<number>(1);

  const [titleFontSize, setTitleFontSize] = useState(`${title.fontSize}px`);
  const [nameFontSize, setNameFontSize] = useState(`${name.fontSize}px`);
  const [dateFontSize, setDateFontSize] = useState(`${date.fontSize}px`);
  const [addressFontSize, setAddressFontSize] = useState(`${address.fontSize}px`);
  const [zoom, setZoom] = useState(1);

  function handleResize(): void {
    setTitleFontSize(`${(title.fontSize / 720) * ref.current!.clientWidth}px`);
    setNameFontSize(`${(name.fontSize / 720) * ref.current!.clientWidth}px`);
    setDateFontSize(`${(date.fontSize / 720) * ref.current!.clientWidth}px`);
    setAddressFontSize(`${(address.fontSize / 720) * ref.current!.clientWidth}px`);
    setZoom(ref.current!.clientWidth / 720);
    setResize(ref.current!.clientWidth / 720);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <Section ref={ref} style={{ paddingTop: `${resize * 40}px`, marginBottom: `${resize * 160}px` }}>
      <SaveTheDate top="40px" right="40px" zoom={zoom} />

      <Title
        lineHeight={title.lineHeight}
        fontSize={titleFontSize}
        fontWeight={title.fontWeight}
        style={{
          paddingLeft: 'calc(110 / 720 * 100%)',
          marginBottom: 'calc(-185 / 720 * 100%)',
        }}
      >
        <OutlineText>
          We
          <br />
          are
        </OutlineText>
        <br />
        getting
        <br />
        married
      </Title>

      <img
        src={image}
        alt=""
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'block',
          width: 'calc(600 / 720 * 100%)',
          margin: '0 auto 20px',
        }}
      />

      <Name
        fontWeight={name.fontWeight}
        fontSize={nameFontSize}
        rotate={-90}
        left="calc(-50 / 720 * 100%)"
      >
        KIM CHEOL SOO
      </Name>

      <Name
        fontWeight={name.fontWeight}
        fontSize={nameFontSize}
        rotate={-90}
        right="calc(-50 / 720 * 100%)"
      >
        YANG JOO HYE
      </Name>

      <Date
        fontWeight={date.fontWeight}
        fontSize={dateFontSize}
        letterSpacing={date.letterSpacing}
      >
        2022.10.03 MON 14:00
      </Date>

      <Address
        fontWeight={address.fontWeight}
        fontSize={addressFontSize}
        letterSpacing={address.letterSpacing}
      >
        로프트가든344
      </Address>
    </Section>
  );
}
