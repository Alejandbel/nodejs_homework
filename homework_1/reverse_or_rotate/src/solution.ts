export function revRot(s: string, sz: number): string {
  if (isInputInvalid(s, sz)) {
    return '';
  }
  const chunks: string[] | null = s.match(new RegExp(`.{${sz}}`, 'g'));

  if (!chunks) {
    return '';
  }

  for (let i = 0; i < chunks.length; ++i) {
    const odds: number = getOdds(chunks, i);

    if (odds % 2 === 0) {
      reverseChunk(chunks, i);
    } else {
      rotateChunkLeft(chunks, i, sz);
    }
  }

  return chunks.join('');
}

function isInputInvalid(s: string, sz: number): boolean {
  return sz <= 0 || s.length === 0 || sz > s.length;
}

function reverseChunk(chunks: string[], i: number): void {
  chunks[i] = chunks[i].split('').reverse().join('');
}

function rotateChunkLeft(chunks: string[], i: number, sz: number): void {
  chunks[i] = chunks[i].slice(1, sz) + chunks[i][0];
}

function getOdds(chunks: string[], i: number): number {
  return chunks[i].split('').reduce((acc, cur) => {
    if (parseInt(cur) % 2 === 1) {
      return acc + 1;
    }
    return acc;
  }, 0);
}
