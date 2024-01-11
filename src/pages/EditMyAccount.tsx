import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Jwt } from '../interfaces/Jwt.ts';
import '../styles/GameModes.css';
import '../styles/MyAccount.css';

const API_URL = import.meta.env.VITE_API_URL;

export const EditMyAccount: React.FC = () => {
    const TOKEN = jwtDecode<Jwt>(localStorage.getItem('token')!);
    const USER_ID = TOKEN.nameid;
    const USER_USERNAME_URL = `${API_URL}/Users/${USER_ID}`;

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch(USER_USERNAME_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newUsername,
                    newPassword,
                }),
            });

            if (response.ok) {
                setSuccessMessage('Account updated successfully.');
            } else {
                setErrorMessage('Failed to update account. Please try again.');
            }
        } catch (error) {
            console.error('Error updating account:', error);
            setErrorMessage('An error occurred while updating the account.');
        }
    };

    return (
        <div className="game-container">
            <Header />
            <div className="game-main">
                <h1>Edit My Account</h1>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="newUsername">New Username:</label>
                        <input
                            type="text"
                            id="newUsername"
                            name="newUsername"
                            value={newUsername}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">New Password:</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
                <Link to="/myaccount" className="back-button">
                    Back to My Account
                </Link>
            </div>
        </div>
    );
};

export default EditMyAccount;
