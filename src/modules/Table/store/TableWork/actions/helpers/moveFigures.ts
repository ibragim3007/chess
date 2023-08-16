import { NumbersType } from '../../interfaces/tableInterfaces';

export const availablePawnToMax = (num: number): NumbersType => {
  if (num > 8) return 8;
  else if (num < 1) return 1;

  return num as NumbersType;
};
