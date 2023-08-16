import { AppDispatch } from '../../../../../store/store';
import { RootFigure } from '../interfaces/RootFigure';
import { PositionInterface } from '../interfaces/tableInterfaces';
import { tableAction } from '../tableSlice';

export const makeMoveCreator = (figure: RootFigure, toPosition: PositionInterface) => (dispath: AppDispatch) => {
  try {
    dispath(tableAction.moveFigureTo({ figureForMove: figure, toPosition }));
    dispath(tableAction.resetAll());
  } catch (e) {
    console.log(e);
  }
};
