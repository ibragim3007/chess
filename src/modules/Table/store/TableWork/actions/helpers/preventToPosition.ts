import { LettersType, NumbersType } from '../../interfaces/tableInterfaces';

const numbers: NumbersType[] = [1, 2, 3, 4, 5, 6, 7, 8];
export const preventNumberToNumberPosition = (num: number): NumbersType => {
  return numbers.at(num) || 1;
};

const letters: LettersType[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const preventNumberToLetterPosition = (num: number): LettersType => {
  return letters.at(num) || 'A';
};

export const preventLetterToNumberPostion = (letter: LettersType): number => {
  let number = 0;
  letters.forEach((elem, index) => {
    if (elem === letter) {
      number = index;
    }
  });
  return number;
};
