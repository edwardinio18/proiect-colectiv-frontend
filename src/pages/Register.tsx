import { Box, Button, TextField } from '@mui/material';
import background from '../resources/background2.png';
import Header from '../components/Header';
import '../styles/Header.css';
import '../styles/GameModes.css';
import React from 'react';
import { IUser } from '../interfaces/User';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userName = data.get('username');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');
    type SendToBeRegister = Omit<IUser, "highScoreMixed" | "highScorePhotos" | "highScoreText" | "id">;
    const objToSend: SendToBeRegister = {
        userName: userName as String, 
        password: password as String, 
    }
    // TODO backend shenanigans 
    // TODO2 fumeaza
    // TODO3 injural pe iakab
}

export function Register() {
    
    return (<>
        <Box style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
            color: 'white',
            flexDirection: 'column',
        }}>
            <Header />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '50vh', // Adjust height to match your design
                    maxWidth: '400px', // Adjust width to match your design
                    margin: 'auto',
                    padding: '32px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
                    backdropFilter: 'blur(8px)', // Apply a blur effect to the background
                    '& .MuiTextField-root': {
                        m: 1, // Margin
                        width: '100%', // Full width of the container
                    },
                    '& .MuiInputBase-root': {
                        color: '#000', // Input text color
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.23)', // Border color
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.5)', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#1976d2', // Border color when focused (adjust as needed)
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#000', // Label color
                    },
                    '& .MuiButton-root': {
                        mt: 3, // Margin top
                        width: '100%', // Full width of the container
                        backgroundColor: '#1976d2', // Button color (adjust as needed)
                        color: 'white', // Button text color
                        padding: '10px 0', // Padding inside the button (adjust as needed)
                        '&:hover': {
                            backgroundColor: '#115293', // Button hover color (adjust as needed)
                        },
                    },
                }}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    name='username'
                    label="Please insert your username:"
                    variant="outlined"
                />
                <TextField
                    required
                    name='password'
                    label="Please insert your password:"
                    type="password"
                    variant="outlined"
                />
                <TextField
                    required
                    name='confirmPassword'
                    label="Please confirm your password:"
                    type="password"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    Register
                </Button>
            </Box>
        </Box>
    </>
    );
}
