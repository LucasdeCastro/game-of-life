/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import './row.css';

const Row = ({
  value, setValue, x, y,
}) => {
  const color = value ? 'blue' : '#fff';
  return (
    <div
      className="row"
      onClick={() => setValue(x, y, value === 1 ? 0 : 1)}
      style={{
        background: color,
      }}
    />
  );
};

export default Row;
