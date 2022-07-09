interface Props {
  fontSize?: string;
  letterSpacing?: string;
  children: React.ReactNode;
}

export default function Text({ fontSize, letterSpacing, children }: Props): JSX.Element {
  return (
    <text style={{ letterSpacing, fontSize, fontFamily: 'Montserrat' }}>
      <textPath alignmentBaseline="before-edge" xlinkHref="#path">
        {children}
      </textPath>
    </text>
  );
}
