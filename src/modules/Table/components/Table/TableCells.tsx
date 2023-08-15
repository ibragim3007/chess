import React from 'react';
import { useAppSelector } from '../../../../hooks/redux/reduxHooks';
import TableWrapper from './TableWrapper';
import Cell from '../Cell/Cell';

const TableCells = () => {
  const { cells } = useAppSelector(state => state.tableReducer);
  return (
    <TableWrapper>
      {cells.map((cell, index) => {
        return <Cell label={`${cell.position.number}:${cell.position.letter}`} key={index} color={cell.color} />;
      })}
    </TableWrapper>
  );
};

export default TableCells;
