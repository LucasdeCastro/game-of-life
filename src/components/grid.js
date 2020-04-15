/* eslint-disable react/no-array-index-key */
import React from 'react';
import Row from './row';

const Grid = ({ grid, setValue }) => grid.map((row, y) => (
  <div key={`grid-${y}`} style={{ display: 'flex' }}>
    {row.map((value, x) => (
      <Row
        y={y}
        x={x}
        value={value}
        setValue={setValue}
        key={`row-${x}-${y}`}
      />
    ))}
  </div>
));

export default Grid;
