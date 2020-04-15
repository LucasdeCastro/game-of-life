import React from 'react';
import './header.css';

const Header = ({
  reset, running, toggleStart, clear,
}) => {
  const runningText = running ? 'Pausar' : 'Iniciar';
  return (
    <div className="header-container">
      <h1 style={{ marginBottom: '0px' }}>Game of life</h1>
      <p>
        Para mais informações sobre as regras acesse a
        {' '}
        <a href="https://pt.wikipedia.org/wiki/Jogo_da_vida">Wiki</a>
      </p>

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
