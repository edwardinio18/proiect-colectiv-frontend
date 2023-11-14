import { Box, Button, TextField, Typography } from '@mui/material';
import background from '../resources/background.png';
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
}

export function Register() {
    return (<>
        <Box style={{
            color: 'white',
        }}>
            <Header />

            <Box style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                height: "100vh",
                color: 'white',
                flexDirection: 'column',
            }}>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    //justifyContent: 'center',
                    height: '100vh',
                    backgroundColor: 'transparent', // Transparent background
                    fontFamily: "'Chalkduster', sans-serif",
                }}>
                    <Typography variant="h2" style={{ 
                        marginBottom: '10px' , 
                        marginTop: '70px', 
                        fontFamily: "'Chalkduster', sans-serif",
                        }}>
                        Register
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            height: '50vh', // Adjust height to match your design
                            maxWidth: '400px', // Adjust width to match your design
                            //margin: 'auto',
                            marginTop: '65px',
                            padding: '10px',
                            borderRadius: '12px',
                            backgroundColor: 'transparent', // Semi-transparent white
                            //backdropFilter: 'blur(8px)', // Apply a blur effect to the background
                            // '& .MuiTextField-root': {
                            //     m: 1, // Margin
                            //     width: '100%', // Full width of the container
                            // },
                            // '& .MuiInputBase-root': {
                            //     color: '#000', // Input text color
                            // },
                            // '& .MuiOutlinedInput-root': {
                            //     '& fieldset': {
                            //         borderColor: 'rgba(0, 0, 0, 0.23)', // Border color
                            //     },
                            //     '&:hover fieldset': {
                            //         borderColor: 'rgba(0, 0, 0, 0.5)', // Border color on hover
                            //     },
                            //     '&.Mui-focused fieldset': {
                            //         borderColor: '#1976d2', // Border color when focused (adjust as needed)
                            //     },
                            // },
                            // '& .MuiInputLabel-root': {
                            //     color: '#000', // Label color
                            // },
                            // '& .MuiButton-root': {
                            //     mt: 3, // Margin top
                            //     width: '100%', // Full width of the container
                            //     backgroundColor: '#1976d2', // Button color (adjust as needed)
                            //     color: 'white', // Button text color
                            //     padding: '10px 0', // Padding inside the button (adjust as needed)
                            //     '&:hover': {
                            //         backgroundColor: '#115293', // Button hover color (adjust as needed)
                            //     },
                            // },
                        }}
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <Typography variant="h5" style={{ 
                                marginBottom: '10px' , 
                                fontFamily: "'Chalkduster', sans-serif",
                                width: '550px'
                            }}>
                                Please insert your username:
                            </Typography>
                        <TextField
                            
                            required
                            name='username'
                            label="Your username:"
                            variant="outlined"
                            style={{ 
                                marginBottom: '20px', 
                                fontFamily: "'Chalkduster', sans-serif",
                                backgroundColor: '#e6e6e6',
                                width: '550px',
                                borderRadius: '10px',
                            }}
                                sx={{
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Chalkduster, sans-serif',
                                        color: '#a3a3a3'
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Chalkduster, sans-serif',
                                        color: '#a3a3a3'
                                    },
                                }}
                        />
                        <Typography variant="h5" style={{ 
                                marginBottom: '10px' , 
                                marginTop: '10px', 
                                fontFamily: "'Chalkduster', sans-serif",
                                width: '550px'
                            }}>
                                Please insert your password:
                            </Typography>
                        <TextField
                            required
                            name='password'
                            label="Your password:"
                            type="password"
                            variant="outlined"
                            style={{ 
                                marginBottom: '20px', 
                                fontFamily: "'Chalkduster', sans-serif",
                                backgroundColor: '#e6e6e6',
                                width: '550px',
                                borderRadius: '10px',}}
                                sx={{
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Chalkduster, sans-serif',
                                        color: '#a3a3a3'
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Chalkduster, sans-serif',
                                        color: '#a3a3a3'
                                    },
                                }}
                        />
                        <Typography variant="h5" style={{ 
                                marginBottom: '10px' , 
                                marginTop: '10px', 
                                maxWidth: '600px',
                                fontFamily: "'Chalkduster', sans-serif",
                                width: '550px'
                            }}>
                                Please confirm your password:
                            </Typography>
                        <TextField
                            required
                            name='confirmPassword'
                            label="Your password:"
                            type="password"
                            variant="outlined"
                            style={{ 
                                marginBottom: '20px', 
                                fontFamily: "'Chalkduster', sans-serif",
                                backgroundColor: '#e6e6e6',
                                width: '550px',
                                borderRadius: '10px',}}
                                sx={{
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Chalkduster, sans-serif',
                                        color: '#a3a3a3'
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Chalkduster, sans-serif',
                                        color: '#a3a3a3'
                                    },
                                }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                textTransform: 'none', // Prevent capitalization
                                width: '300px',
                                fontFamily: "'Chalkduster', sans-serif",
                                fontSize: '30px',
                                backgroundColor: '#1095e0',
                                borderRadius: '10px',
                                marginTop: '30px'
                            }}
                        >
                            Register
                        </Button>
                    </Box>     
                </Box>
            </Box>
        </Box>
    </>
    );
}
