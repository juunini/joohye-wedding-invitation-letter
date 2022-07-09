import image from './section1.jpg';
import Title from './Title';
import SaveTheDate from '../SaveTheDate';
import Name from './Name';
import Date from './Date';
import Address from './Address';

interface Props {
  title: {
    lineHeight: number;
    fontSize: string;
    fontWeight: number;
  };
  name: {
    fontSize: string;
    fontWeight: number;
  };
  date: {
    fontSize: string;
    fontWeight: number;
    letterSpacing: string;
  };
  address: {
    fontSize: string;
    fontWeight: number;
    letterSpacing: string;
  };
}

export default function Section1({
  title, name, date, address,
}: Props): JSX.Element {
  return (
    <section
      style={{
        position: 'relative',
        maxWidth: '720px',
        margin: 'auto',
      }}
    >
      <SaveTheDate top="40px" right="40px" />

      <Title
        lineHeight={title.lineHeight}
        fontSize={title.fontSize}
        fontWeight={title.fontWeight}
        style={{
          paddingLeft: '110px',
          marginBottom: '-185px',
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
        fontSize={name.fontSize}
        rotate={-90}
        left="calc(-100px + 50 / 720 * 100%)"
      >
        KIM CHEOL SOO
      </Name>

      <Name
        fontWeight={name.fontWeight}
        fontSize={name.fontSize}
        rotate={-90}
        right="calc(-100px + 50 / 720 * 100%)"
      >
        YANG JOO HYE
      </Name>

      <Date
        fontWeight={date.fontWeight}
        fontSize={date.fontSize}
        letterSpacing={date.letterSpacing}
      >
        2022.10.03 MON 14:00
      </Date>

      <Address
        fontWeight={address.fontWeight}
        fontSize={address.fontSize}
        letterSpacing={address.letterSpacing}
      >
        로프트가든344
      </Address>
    </section>
  );
}
