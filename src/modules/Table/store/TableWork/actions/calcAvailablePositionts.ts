import { PositionInterface } from './../interfaces/tableInterfaces';
import { AppDispatch } from '../../../../../store/store';
import { RootFigure } from '../interfaces/RootFigure';
import { tableAction } from '../tableSlice';
import { preventLetterToNumberPostion, preventNumberToLetterPosition } from './helpers/preventToPosition';

//   1  2  3  4  5  6  7  8
// A A1 A2 A3 A4 A5 A6 A7 A8
// B B1 B2 B3 B4 B5 B6 B7 B8
// C C1 C2 C3 C4 C5 C6 C7 C8
// D D1 D2 D3 D4 D5 D6 D7 D8
// E
// F
// G
// H

export const calcAvailablePositionts = (pickedFigure: RootFigure) => (dispath: AppDispatch) => {
  try {
    if (pickedFigure.name === 'Pawn') {
      const currentLetterPos = preventLetterToNumberPostion('F');

      if (pickedFigure.isEnemy) {
        const availablePositions: PositionInterface[] = Array.from({ length: 2 }, (elem, index) => ({
          letter: preventNumberToLetterPosition(currentLetterPos + index + 1),
          number: pickedFigure.position.number,
        }));

        dispath(tableAction.setAvailableMoves(availablePositions));
        return;
      }
      if (!pickedFigure.isEnemy) {
        const availablePositions: PositionInterface[] = Array.from({ length: 2 }, (elem, index) => ({
          letter: pickedFigure.position.letter,
          number: pickedFigure.position.number,
        }));

        dispath(tableAction.setAvailableMoves(availablePositions));
        return;
      }
    }
  } catch (e) {
    console.log(e);
  }
};
