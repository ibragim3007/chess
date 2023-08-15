import { AppDispatch } from '../../../../../store/store';
import { Pawn } from '../Figures/Pawn';
import { tableAction } from '../tableSlice';

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
    dispath(tableAction.initFigure(new Pawn('pawn', { letter: 'A', number: 1 }, false)));
  } catch (e) {
    console.log(e);
  }
};