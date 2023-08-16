import { AppDispatch } from '../../../../../store/store';
import { RootFigure } from '../interfaces/RootFigure';
import { tableAction } from '../tableSlice';
import { PositionInterface } from './../interfaces/tableInterfaces';
import { generateEmptyArray } from './helpers/generate2DArray';
import { availablePawnToMax } from './helpers/moveFigures';
import { getBinaryPosition, transferFromBinaryMaskToPositionInterfaces } from './helpers/transfer';

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
    if (pickedFigure.isActiveNow) {
      dispath(tableAction.resetAll());
      return;
    }
    dispath(tableAction.activeFigure(pickedFigure));
    if (pickedFigure.name === 'Pawn') dispath(calcPawn(pickedFigure));
    if (pickedFigure.name === 'Rook') dispath(calcRook(pickedFigure));
  } catch (e) {
    console.log(e);
  }
};

const calcRook = (pickedFigure: RootFigure) => (dispath: AppDispatch) => {
  const rookPosition = getBinaryPosition(pickedFigure.position);
  const zeroArray = generateEmptyArray();

  const settedArray = zeroArray.map((Y, yIndex) => {
    return Y.map((X, xIndex) => {
      if (yIndex === rookPosition.y) X = 1;
      if (xIndex === rookPosition.x) X = 1;
      return X;
    });
  });

  const availablePositions = transferFromBinaryMaskToPositionInterfaces(settedArray);

  dispath(tableAction.setAvailableMoves(availablePositions));
  return;
};

const calcPawn = (pickedFigure: RootFigure) => (dispath: AppDispatch) => {
  if (pickedFigure.isEnemy) {
    const availablePositions: PositionInterface[] = Array.from({ length: 2 }, (elem, index) => ({
      letter: pickedFigure.position.letter,
      number: availablePawnToMax(pickedFigure.position.number + index + 1),
    }));

    dispath(tableAction.setAvailableMoves(availablePositions));
    return;
  }
  if (!pickedFigure.isEnemy) {
    const availablePositions: PositionInterface[] = Array.from({ length: 2 }, (elem, index) => ({
      letter: pickedFigure.position.letter,
      number: availablePawnToMax(pickedFigure.position.number - index - 1),
    }));

    dispath(tableAction.setAvailableMoves(availablePositions));
    return;
  }
};
