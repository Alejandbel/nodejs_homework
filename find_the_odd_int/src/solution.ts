export const findOdd = (xs: number[]): number => {
  const appearNums = new Map<number, number>();

  for (const num of xs) {
    const appears: number | undefined = appearNums.get(num);
    if (appears) {
      appearNums.set(num, appears + 1);
    } else {
      appearNums.set(num, 1);
    }
  }

  for (const appearNum of appearNums) {
    if (appearNum[1] % 2 === 1) {
      return appearNum[0];
    }
  }

  throw 'Invalid input';
};
