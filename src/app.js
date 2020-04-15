import React, { useState, useEffect } from 'react';
import Grid from './components/grid';
import game, { gosper } from './gameOfLife';
import Header from './components/header';

const App = () => {
  const [state, setState] = useState(gosper);
  const [custom, toggleForm] = useState(false);
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

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Header
        reset={() => setState(gosper)}
        custom={custom}
        running={running}
        setGrid={setState}
        toggleForm={toggleForm}
        toggleStart={toggleStart}
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
