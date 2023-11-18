import '../styles/Mode.css';
import '../styles/Game.css';
import Header from '../components/Header';
import {Link} from "react-router-dom";
import React from "react";

export const NormalGame: React.FC = () => {
    return (
        <div className="game-container">
            <Header/>
            <div className="game-main">
                <h1>Not available yet</h1>
                <div className="game-mode-buttons">
                    <Link to="/gamemode" className="game-mode-button">Go back</Link>
                </div>
            </div>
        </div>
    );
};

export default NormalGame;
