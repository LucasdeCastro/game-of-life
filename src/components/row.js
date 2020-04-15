
import React from 'react';

const Row = ({
  value, setValue, x, y,
}) => (
    <div
      onClick={() => setValue(x, y, value === 1 ? 0 : 1)}
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        margin: 3,
        cursor: 'pointer',
        border: '1px solid #ccc',
        background: value ? 'blue' : '#fff',
      }}
    />
  );

export default Row;
