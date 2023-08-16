import React from 'react';
import styles from './CellStyle.module.css';

const MaskCell = () => {
  return (
    <div className={styles.maskCell}>
      <div className={styles.maskInd} />
    </div>
  );
};

export default MaskCell;
