import React from 'react';


const MAX_GRID = 40;

const Header = ({
  setGrid, custom, reset, running, toggleStart, toggleForm,
}) => {
  const createGrid = () => {
    const height = parseInt(document.getElementById('height').value || 0, 10);
    const width = parseInt(document.getElementById('width').value || 0, 10);

    const grid = new Array(Math.min(height, MAX_GRID)).fill(0).map(() => new Array(Math.min(width, MAX_GRID)).fill(0));
    setGrid(grid);
  };

  return (
    <>
      <h1>Game of life</h1>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <button type="button" onClick={reset}>Reiniciar</button>
        <button type="button" onClick={() => toggleForm(true)}>Custom</button>
        <button type="button" onClick={() => toggleStart(!running)}>
          {running ? 'Pausar' : 'Iniciar'}
        </button>
      </div>

      {
        custom && (
          <div style={{ display: 'flex' }}>
            <input id="height" type="number" max={MAX_GRID} placeholder="Altura" />
            <input id="width" type="number" max={MAX_GRID} placeholder="Largura" />
            <button type="button" onClick={createGrid}>Gerar</button>
          </div>
        )
      }
    </>
  );
};

export default Header;
