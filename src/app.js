import React, { useState, useEffect } from 'react';
import Grid from './components/grid';
import game, { gosper, createGrid } from './gameOfLife';
import Header from './components/header';
import './index.css';

const App = () => {
  const [state, setState] = useState(gosper);
  const [running, toggleStart] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      if (running) {
        const newState = game(state);
        setState(newState);
      }
    }, 300);
    return () => clearInterval(id);
  });

  const clear = () => {
    setState(createGrid(25, 38));
    toggleStart(true);
  };

  return (
    <div className="app-container">
      <Header
        clear={clear}
        running={running}
        setGrid={setState}
        toggleStart={toggleStart}
        reset={() => setState(gosper)}
      />

      <Grid
        setValue={(x, y, v) => {
          toggleStart(false);
          if (state[y] && state[y][x] !== undefined) {
            state[y][x] = v;
            setState([].concat(state));
          }
        }}
        grid={state}
      />
    </div>
  );
};

export default App;
