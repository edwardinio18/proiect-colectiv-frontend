import React from 'react';
import '../styles/GameModes.css'
import Header from '../components/Header';

export const GameModes: React.FC = () => {
  return (
    <div className="game-modes-container">
      <Header />
      <main className="game-main">
        <h1>Please select the game mode:</h1>
        <div className="game-mode-buttons">
          <button className="game-mode-button practice">Practice</button>
          <button className="game-mode-button normal">Normal</button>
        </div>
      </main>
    </div>
  );
};

export default GameModes;
