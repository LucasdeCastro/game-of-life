import React from 'react';
import Row from './row';

const Grid = ({ grid, setValue }) => grid.map((row, y) => (
  <div key={`grid-${y}`} style={{ display: 'flex' }}>
    {row.map((value, x) => <Row key={`row-${x}-${y}`} setValue={setValue} y={y} x={x} value={value} />)}
  </div>
));

export default Grid;
