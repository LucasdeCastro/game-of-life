import React from 'react';
import './header.css';

const Header = ({
  reset, running, toggleStart, clear,
}) => {
  const runningText = running ? 'Pausar' : 'Iniciar';
  return (
    <div className="header-container">
      <h1>Game of life</h1>
      <div className="diplay-flex button-container">
        <button
          type="button"
          className="button"
          onClick={() => toggleStart(!running)}
        >
          {runningText}
        </button>
        <button
          type="button"
          className="button"
          onClick={() => clear(true)}
        >
          Customizado
        </button>
        <button
          type="button"
          className="button"
          onClick={reset}
        >
          Resetar
        </button>
      </div>
    </div>
  );
};

export default Header;
