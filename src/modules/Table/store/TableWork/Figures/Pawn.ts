import { FIGURES_NAME_TYPES, RootFigure } from '../interfaces/RootFigure';
import { PositionInterface } from '../interfaces/tableInterfaces';
import PawnWhite from '../../../../../assets/FiguresImages/Chess_plt60.png';
import PawnBlack from '../../../../../assets/FiguresImages/Chess_pdt60.png';

export class Pawn extends RootFigure {
  constructor(name: FIGURES_NAME_TYPES, position: PositionInterface, isEnemy: boolean) {
    let imageUrl = PawnWhite;
    if (isEnemy) imageUrl = PawnBlack;
    super(name, position, isEnemy, imageUrl);
  }
}
