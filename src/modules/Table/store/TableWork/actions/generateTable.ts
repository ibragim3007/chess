import { AppDispatch } from '../../../../../store/store';
import { tableAction } from '../tableSlice';
import { preventNumberToLetterPosition, preventNumberToNumberPosition } from './helpers/preventToPosition';

const SIZE = 8;

//   1  2  3  4  5  6  7  8
// A A1 A2 A3 A4 A5 A6 A7 A8
// B B1 B2 B3 B4 B5 B6 B7 B8
// C C1 C2 C3 C4 C5 C6 C7 C8
// D
// E
// F
// G
// H

export const generateTable = () => (dispath: AppDispatch) => {
  try {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        dispath(
          tableAction.initCell({
            position: {
              letter: preventNumberToLetterPosition(j),
              number: preventNumberToNumberPosition(i),
            },
            color: (i + j) % 2 === 0 ? true : false,
          }),
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
};
