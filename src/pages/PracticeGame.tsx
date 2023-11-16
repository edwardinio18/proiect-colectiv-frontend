import React from 'react';
import '../styles/Mode.css'
import '../styles/Game.css'
import Header from '../components/Header';
import { useState } from 'react';

export const PracticeGame: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    const handleClick = (buttonId: string) => {
        setSelectedButton(buttonId);
    };

    return (
        <div className="game-container">
            <Header />
            <div className="game-main">
                <h1>Question number 1?</h1>
                <div className="mode-buttons">
                    <div className="button-row">
                        <button
                            className={`mode-button ${selectedButton === 'A' ? 'selected-wrong' : ''}`}
                            onClick={() => handleClick('A')}> A. Option One
                            {selectedButton === 'A' && <span className="mark">X</span>}
                        </button>
                        <button className="mode-button">B. Option Two</button>
                    </div>
                    <div className="button-row">
                        <button className="mode-button">C. Option Three</button>
                        <button className="mode-button">D. Option Four</button>
                    </div>
                </div>
                <div className="score-time">
                    <p>Score: 120</p>
                    <p>Time left: 0:55</p>
                </div>
            </div>
        </div>
    );
};

export default PracticeGame;
