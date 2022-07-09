import { useEffect, useRef, useState } from 'react';
import image from './section1.jpg';
import Title from './Title';
import SaveTheDate from '../SaveTheDate';
import Name from './Name';
import Date from './Date';
import Address from './Address';

interface Props {
  title: {
    lineHeight: number;
    fontSize: number;
    fontWeight: number;
  };
  name: {
    fontSize: number;
    fontWeight: number;
  };
  date: {
    fontSize: number;
    fontWeight: number;
    letterSpacing: string;
  };
  address: {
    fontSize: number;
    fontWeight: number;
    letterSpacing: string;
  };
}

export default function Section1({
  title, name, date, address,
}: Props): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [titleFontSize, setTitleFontSize] = useState(`${title.fontSize}px`);
  const [nameFontSize, setNameFontSize] = useState(`${name.fontSize}px`);
  const [dateFontSize, setDateFontSize] = useState(`${date.fontSize}px`);
  const [addressFontSize, setAddressFontSize] = useState(`${address.fontSize}px`);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setTitleFontSize(`${(title.fontSize / 720) * ref.current!.clientWidth}px`);
    setNameFontSize(`${(name.fontSize / 720) * ref.current!.clientWidth}px`);
    setDateFontSize(`${(date.fontSize / 720) * ref.current!.clientWidth}px`);
    setAddressFontSize(`${(address.fontSize / 720) * ref.current!.clientWidth}px`);
    setZoom(ref.current!.clientWidth / 720);

    window.addEventListener('resize', () => {
      setTitleFontSize(`${(title.fontSize / 720) * ref.current!.clientWidth}px`);
      setNameFontSize(`${(name.fontSize / 720) * ref.current!.clientWidth}px`);
      setDateFontSize(`${(date.fontSize / 720) * ref.current!.clientWidth}px`);
      setAddressFontSize(`${(address.fontSize / 720) * ref.current!.clientWidth}px`);
      setZoom(ref.current!.clientWidth / 720);
    });
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        maxWidth: '720px',
        margin: 'auto',
      }}
    >
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
        We
        <br />
        are
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
    </section>
  );
}
