import { PositionInterface } from './tableInterfaces';

export class RootFigure {
  static currentId: number;
  id: number;
  name: string;
  position: PositionInterface;
  isAlive: boolean;
  isEnemy: boolean;
  imageUrl: string;

  private color?: string;

  private detecColor(isEnemy: boolean) {
    this.color = isEnemy ? 'red' : 'grenn';
  }

  static getNextId() {
    return RootFigure.currentId++;
  }

  constructor(name: string, postion: PositionInterface, isEnemy: boolean, imageUrl: string) {
    this.id = RootFigure.getNextId();
    this.name = name;
    this.isAlive = true;
    this.position = postion;
    this.isEnemy = isEnemy;
    this.imageUrl = imageUrl;
    this.detecColor(isEnemy);
  }

  killFigure() {
    this.isAlive = false;
  }

  changePostion(newPosition: PositionInterface) {
    this.position = newPosition;
  }
}
