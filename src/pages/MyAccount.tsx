import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import {Jwt} from '../interfaces/Jwt.ts';
import '../styles/GameModes.css';

const API_URL = import.meta.env.VITE_API_URL;

export interface User {
    username: string;
    totalScore: number;
}

const getUserUsername = async (userUsernameUrl: string) => {
    const response = await fetch(userUsernameUrl);
    return await response.text();
};

const getTotalScore = async (userScoreUrl: string) => {
    const response = await fetch(userScoreUrl);
    return await response.json();
};

export const MyAccount: React.FC = () => {
    const TOKEN = jwtDecode<Jwt>(localStorage.getItem('token')!);
    const USER_ID = TOKEN.nameid;
    const USER_USERNAME_URL = `${API_URL}/Users/${USER_ID}`;
    const USER_SCORE_URL = `${API_URL}/Users/${USER_ID}/score`;

    const [userUsername, setUserUsername] = useState('');
    const [totalScore, setTotalScore] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const userUsernameData = await getUserUsername(USER_USERNAME_URL);
            setUserUsername(userUsernameData);

            const userScoreData = await getTotalScore(USER_SCORE_URL);
            setTotalScore(userScoreData.totalScore);
        };

        fetchData();
    }, [USER_USERNAME_URL, USER_SCORE_URL]);

    return (
        <div className="game-container">
            <Header/>
            <div className="game-main">
                <h1>Username: {userUsername}</h1>
                <p>Total Score: {totalScore !== null ? totalScore : 'Loading...'}</p>
                <Link to="/gamemode" className="game-mode-button">Game Modes</Link>
                <Link to="/editmyaccount" className="game-mode-button">Edit Account</Link>
            </div>
        </div>
    );
};

export default MyAccount;
