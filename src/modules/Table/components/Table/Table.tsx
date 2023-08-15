import { Center } from '../../../../shared/layouts/Center';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/redux/reduxHooks';
import { generateTable } from '../../store/TableWork/actions/generateTable';
import TableCells from './TableCells';
import UserInfo from '../Labels/UserInfo';

const Table = () => {
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(generateTable());
  }, [dispath]);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <Center style={{ paddingTop: 40 }}>
        <TableCells />
      </Center>
      <UserInfo />
    </div>
  );
};

export default Table;
