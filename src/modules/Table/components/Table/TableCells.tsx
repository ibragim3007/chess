import React from 'react';
import { useAppSelector } from '../../../../hooks/redux/reduxHooks';
import TableWrapper from './TableWrapper';
import Cell from '../Cell/Cell';

const TableCells = () => {
  const { cells, availableMoves } = useAppSelector(state => state.tableReducer);

  console.log(availableMoves);

  return (
    <TableWrapper>
      {cells.map((cell, index) => {
        return <Cell cell={cell} key={index} color={cell.color} />;
      })}
    </TableWrapper>
  );
};

export default TableCells;
