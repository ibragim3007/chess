import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/reduxHooks';
import { CellInterface } from '../../store/TableWork/interfaces/tableInterfaces';
import { calcAvailablePositionts } from '../../store/TableWork/actions/calcAvailablePositionts';
import { H1 } from '../../../../shared/Typography/H';

interface CellProps {
  color: boolean;
  label?: string;
  cell: CellInterface;
}

const Cell: React.FC<CellProps> = ({ color, label, cell }) => {
  const { figures } = useAppSelector(state => state.tableReducer);
  const dispath = useAppDispatch();
  const figure = figures.find(figure => JSON.stringify(figure.position) === JSON.stringify(cell.position));

  const clickCell = () => {
    if (figure) {
      dispath(calcAvailablePositionts(figure));
    }
  };

  return (
    <div
      onClick={clickCell}
      style={{
        width: 60,
        height: 60,
        backgroundColor: color ? '#626' : '#fef',
        cursor: 'pointer',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img src={figure?.imageUrl} />
    </div>
  );
};

export default Cell;
