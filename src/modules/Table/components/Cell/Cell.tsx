import React from 'react';
import { useAppSelector } from '../../../../hooks/redux/reduxHooks';
import { CellInterface } from '../../store/TableWork/interfaces/tableInterfaces';

interface CellProps {
  color: boolean;
  label?: string;
  cell: CellInterface;
}

const Cell: React.FC<CellProps> = ({ color, label, cell }) => {
  const { figures } = useAppSelector(state => state.tableReducer);

  const figure = figures.find(figure => JSON.stringify(figure.position) === JSON.stringify(cell.position));

  return (
    <div style={{ width: 60, height: 60, backgroundColor: color ? '#626' : '#fef', cursor: 'pointer' }}>
      <img src={figure?.imageUrl} />
    </div>
  );
};

export default Cell;
