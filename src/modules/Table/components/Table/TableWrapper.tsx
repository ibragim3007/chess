import React from 'react';

interface TableWrapperProps {
  children: React.ReactNode;
}

const TableWrapper: React.FC<TableWrapperProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
        gap: 0,
        overflow: 'hidden',
        borderRadius: 5,
        margin: 30,
      }}
    >
      {children}
    </div>
  );
};

export default TableWrapper;
