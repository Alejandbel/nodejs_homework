export function revRot(s: string, sz: number): string {
  if (sz <= 0 || s.length === 0 || sz > s.length) {
    return '';
  }
  const chunks: string[] | null = s.match(new RegExp(`.{${sz}}`,'g'));

  if (!chunks) {
    return '';
  }

  for (let i = 0; i < chunks.length; ++i) {
    const odds: number = chunks[i].split('').reduce((acc, cur) => {
      if (parseInt(cur) % 2 === 1) {
        return acc + 1;
      }
      return acc;
    }, 0);

    if (odds % 2 === 0) {
      chunks[i] = chunks[i].split('').reverse().join('');
    } else {
      chunks[i] = chunks[i].slice(1, sz) + chunks[i][0];
    }
  }

  return chunks.join('');
}
