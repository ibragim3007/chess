import { FIGURES_NAME_TYPES, RootFigure } from '../interfaces/RootFigure';
import { PositionInterface } from '../interfaces/tableInterfaces';
import white from '../../../../../assets/FiguresImages/Chess_qlt60.png';
import black from '../../../../../assets/FiguresImages/Chess_qdt60.png';

export class King extends RootFigure {
  constructor(name: FIGURES_NAME_TYPES, position: PositionInterface, isEnemy: boolean) {
    let imageUrl = white;
    if (isEnemy) imageUrl = black;
    super(name, position, isEnemy, imageUrl);
  }
}
