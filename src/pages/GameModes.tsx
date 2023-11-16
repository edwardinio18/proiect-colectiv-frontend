import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GameModes.css'
import '../styles/Game.css'
import Header from '../components/Header';

export const GameModes: React.FC = () => {
  const navigate = useNavigate();

  const navigateToGame = (path: string) => {
    navigate(path);
  };

  return (
    <div className="game-container">
      <Header />
      <main className="game-main">
        <h1>Please select</h1><h1>the game mode:</h1>
        <div className="game-mode-buttons">
          <button className="game-mode-button" onClick={() => navigateToGame('/practice')}>Practice</button>
          <button className="game-mode-button" onClick={() => navigateToGame('/normal')}>Normal</button>
        </div>
      </main>
    </div>
  );
};

export default GameModes;
