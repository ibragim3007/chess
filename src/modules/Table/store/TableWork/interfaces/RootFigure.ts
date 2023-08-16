import { PositionInterface } from './tableInterfaces';

export type FIGURES_NAME_TYPES = 'Bishop' | 'King' | 'Knight' | 'Pawn' | 'Queen' | 'Rook';

export class RootFigure {
  static currentId: number;
  id: number;
  name: 'Bishop' | 'King' | 'Knight' | 'Pawn' | 'Queen' | 'Rook';
  position: PositionInterface;
  isAlive: boolean;
  isEnemy: boolean;
  imageUrl: string;
  isActiveNow?: boolean;

  static getNextId() {
    return RootFigure.currentId++;
  }

  constructor(name: FIGURES_NAME_TYPES, postion: PositionInterface, isEnemy: boolean, imageUrl: string) {
    this.id = RootFigure.getNextId();
    this.name = name;
    this.isAlive = true;
    this.position = postion;
    this.isEnemy = isEnemy;
    this.imageUrl = imageUrl;
  }

  killFigure() {
    this.isAlive = false;
  }

  changePostion(newPosition: PositionInterface) {
    this.position = newPosition;
  }

  makeActive() {
    this.isActiveNow = true;
  }

  disActive() {
    this.isActiveNow = false;
  }
}
