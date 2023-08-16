import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/reduxHooks';
import { calcAvailablePositionts } from '../../store/TableWork/actions/calcAvailablePositionts';
import { makeMoveCreator } from '../../store/TableWork/actions/makeMoveCreator';
import { CellInterface } from '../../store/TableWork/interfaces/tableInterfaces';
import MaskCell from './MaskCell';

interface CellProps {
  color: boolean;
  cell: CellInterface;
}

const Cell: React.FC<CellProps> = ({ color, cell }) => {
  const { figures, currentPickedFigure } = useAppSelector(state => state.tableReducer);
  const dispath = useAppDispatch();
  const figure = figures.find(figure => JSON.stringify(figure.position) === JSON.stringify(cell.position));

  const clickCell = () => {
    console.log(figure);
    if (cell.isAvailableForMove && currentPickedFigure) {
      dispath(makeMoveCreator(currentPickedFigure, cell.position));
    }
    if (figure) {
      dispath(calcAvailablePositionts(figure));
    }
  };

  const activeFigure = figure?.isActiveNow;

  return (
    <div
      onClick={clickCell}
      style={{
        width: 60,
        height: 60,
        backgroundColor: activeFigure ? 'yellowgreen' : color ? '#626' : '#fef',
        cursor: 'pointer',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        transition: '0.15s ease',
      }}
    >
      {cell.isAvailableForMove && <MaskCell />}
      <img
        style={{ transition: '0.15s ease', transform: `scale(${figure?.isActiveNow ? '1.2' : '1'})` }}
        src={figure?.imageUrl}
      />
    </div>
  );
};

export default Cell;
