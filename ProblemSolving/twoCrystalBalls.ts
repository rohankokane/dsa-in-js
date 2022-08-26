export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpLength = Math.floor(Math.sqrt(breaks.length));
  let i = jmpLength;
  while (i < breaks.length) {
    if (breaks[i]) break;
    else i += jmpLength;
  }
  if (i === 0) return -1;

  i = i - jmpLength;

  for (let j = 0; j < jmpLength && i < breaks.length; ++j, ++i) {
    if (breaks[i]) return i;
  }

  return -1;
}
