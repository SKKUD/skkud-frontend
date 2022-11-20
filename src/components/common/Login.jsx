import * as React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserContext } from '../../context/UserContext';

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    const login = { ID, PW };

    const loginBtn = async () => {
        console.log('clicked');
        setUser(login.ID);
        console.log(login);
        await axios
            .post(
                'http://localhost:8000/auth/login',
                { userID: ID, passwd: PW }
                // { withCredentials: true }
            )
            .then((userData) => console.log(userData))
            .catch((error) => console.log(error));
    };

    const logoutBtn = async () => {
        setUser('');
        axios
            .post('http://localhost:8000/auth/logout')
            .then((userData) => console.log(userData))
            .catch((error) => console.log(error));
    };

    return (
        <div>
            {user ? (
                <div>
                    <Typography>{user}님 안녕하세요</Typography>
                    <Button variant="contained" onClick={logoutBtn}>
                        Logout
                    </Button>
                </div>
            ) : (
                <>
                    {' '}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 }
                        }}
                    >
                        ID{' '}
                        <TextField
                            id="demo-helper-text-aligned"
                            label="ID"
                            onChange={(e) => setID(e.target.value)}
                        />
                        PW{' '}
                        <TextField
                            id="demo-helper-text-aligned"
                            label="PW"
                            onChange={(e) => setPW(e.target.value)}
                        />
                    </Box>
                    <Button variant="contained" onClick={loginBtn}>
                        Login
                    </Button>
                </>
            )}
        </div>
    );
}
