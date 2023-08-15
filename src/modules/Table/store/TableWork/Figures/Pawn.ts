import { RootFigure } from '../interfaces/RootFigure';
import { PositionInterface } from '../interfaces/tableInterfaces';
import PawnWhite from '../../../../../assets/FiguresImages/Chess_plt60.png';

export class Pawn extends RootFigure {
  constructor(name: string, position: PositionInterface, isEnemy: boolean) {
    const imageUrl = PawnWhite;
    super(name, position, isEnemy, imageUrl);
  }
}
