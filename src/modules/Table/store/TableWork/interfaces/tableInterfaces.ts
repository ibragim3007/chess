import { RootFigure } from './RootFigure';

export interface TableInterface {
  cells: CellInterface;
}

export interface CellInterface {
  position: PositionInterface;
  currentFigure?: RootFigure;
  color: boolean;
}

export interface PositionInterface {
  letter: LettersType;
  number: NumbersType;
}

export type LettersType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type NumbersType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
