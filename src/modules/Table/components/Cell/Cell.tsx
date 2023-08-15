import React from 'react';

interface CellProps {
  color: boolean;
  label?: string;
}

const Cell: React.FC<CellProps> = ({ color, label }) => {
  return <div style={{ padding: '40px 40px', backgroundColor: color ? '#626' : '#fef' }} />;
};

export default Cell;
