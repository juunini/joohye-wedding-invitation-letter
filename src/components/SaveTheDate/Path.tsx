interface Props {
  cx: number;
  cy: number;
  radius: number;
}

export default function Path({ cx, cy, radius }: Props): JSX.Element {
  return (
    <path
      id="path"
      d={`
          M ${cx} ${cy}
          m -${radius}, 0
          a ${radius},${radius} 0 1,0 ${radius * 2},0
          a ${radius},${radius} 0 1,0 ${-radius * 2},0
        `}
      fill="none"
    />
  );
}
