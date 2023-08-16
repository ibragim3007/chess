import { PositionInterface } from '../../interfaces/tableInterfaces';
import {
  preventLetterToNumberPostion,
  preventNumberToLetterPosition,
  preventNumberToNumberPosition,
} from './preventToPosition';

export const getBinaryPosition = (position: PositionInterface) => {
  const numberPosition = position.number - 1;
  const letterNumberPosition = preventLetterToNumberPostion(position.letter);

  console.log(numberPosition, letterNumberPosition);

  return {
    x: letterNumberPosition,
    y: numberPosition,
  };
};

export const transferFromBinaryMaskToPositionInterfaces = (binaryMask: number[][]): PositionInterface[] => {
  const maskArray: PositionInterface[] = [];

  binaryMask.map((Y, yIndex) => {
    Y.map((X, xIndex) => {
      if (X === 1)
        maskArray.push({
          letter: preventNumberToLetterPosition(xIndex),
          number: preventNumberToNumberPosition(yIndex),
        });
    });
  });

  return maskArray;
};
