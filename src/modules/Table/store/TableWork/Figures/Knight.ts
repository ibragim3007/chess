import { RootFigure } from '../interfaces/RootFigure';
import { PositionInterface } from '../interfaces/tableInterfaces';
import white from '../../../../../assets/FiguresImages/Chess_nlt60.png';
import black from '../../../../../assets/FiguresImages/Chess_ndt60.png';

export class Knight extends RootFigure {
  constructor(name: string, position: PositionInterface, isEnemy: boolean) {
    let imageUrl = white;
    if (isEnemy) imageUrl = black;
    super(name, position, isEnemy, imageUrl);
  }
}
