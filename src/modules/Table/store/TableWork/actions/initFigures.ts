import { AppDispatch } from '../../../../../store/store';
import { Bishop } from '../Figures/Bishop';
import { King } from '../Figures/King';
import { Knight } from '../Figures/Knight';
import { Pawn } from '../Figures/Pawn';
import { Queen } from '../Figures/Queen';
import { Rook } from '../Figures/Rook';
import { tableAction } from '../tableSlice';
import { preventNumberToLetterPosition } from './helpers/preventToPosition';

//   1  2  3  4  5  6  7  8
// A A1 A2 A3 A4 A5 A6 A7 A8
// B B1 B2 B3 B4 B5 B6 B7 B8
// C C1 C2 C3 C4 C5 C6 C7 C8
// D
// Eq
// F
// G
// H

export const initFigures = () => (dispath: AppDispatch) => {
  try {
    for (let i = 0; i < 8; i++)
      dispath(tableAction.initFigure(new Pawn('pawn', { letter: preventNumberToLetterPosition(i), number: 7 }, false)));

    for (let i = 0; i < 8; i++)
      dispath(tableAction.initFigure(new Pawn('pawn', { letter: preventNumberToLetterPosition(i), number: 2 }, true)));

    // Bishop
    dispath(tableAction.initFigure(new Bishop('Bishop', { letter: 'C', number: 8 }, false)));
    dispath(tableAction.initFigure(new Bishop('Bishop', { letter: 'F', number: 8 }, false)));
    dispath(tableAction.initFigure(new Bishop('Bishop', { letter: 'C', number: 1 }, true)));
    dispath(tableAction.initFigure(new Bishop('Bishop', { letter: 'F', number: 1 }, true)));

    // Knight
    dispath(tableAction.initFigure(new Knight('Knight', { letter: 'B', number: 8 }, false)));
    dispath(tableAction.initFigure(new Knight('Knight', { letter: 'G', number: 8 }, false)));
    dispath(tableAction.initFigure(new Knight('Knight', { letter: 'B', number: 1 }, true)));
    dispath(tableAction.initFigure(new Knight('Knight', { letter: 'G', number: 1 }, true)));

    // Rook
    dispath(tableAction.initFigure(new Rook('Rook', { letter: 'A', number: 8 }, false)));
    dispath(tableAction.initFigure(new Rook('Rook', { letter: 'H', number: 8 }, false)));
    dispath(tableAction.initFigure(new Rook('Rook', { letter: 'A', number: 1 }, true)));
    dispath(tableAction.initFigure(new Rook('Rook', { letter: 'H', number: 1 }, true)));

    //king
    dispath(tableAction.initFigure(new King('King', { letter: 'D', number: 8 }, false)));
    dispath(tableAction.initFigure(new King('King', { letter: 'D', number: 1 }, true)));

    //Queen
    dispath(tableAction.initFigure(new Queen('Queen', { letter: 'E', number: 8 }, false)));
    dispath(tableAction.initFigure(new Queen('Queen', { letter: 'E', number: 1 }, true)));
  } catch (e) {
    console.log(e);
  }
};
