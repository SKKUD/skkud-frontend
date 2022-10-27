import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import Header from './components/common/Header';
import MainTab from './pages/MainTab';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00FFB0',
            contrastText: '#292929',
            dark: '#027d56'
        },
        neutral: {
            main: '#7c7c7c',
            contrastText: '#FFF',
            dark: '#111111'
        },
        background: {
            default: '#292929',
            paper: '#292929'
        }
    }
});

function App() {
    useEffect(() => {
        axios
            .post(
                'http://localhost:8000/auth/login',
                { userID: 'skkud', passwd: 'skkud' },
                { withCredentials: true }
            )
            .then((user) => console.log(user));
    }, []);
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="App" color="primary">
                <Header position="static" />
                <MainTab />
            </div>
        </ThemeProvider>
    );
}

export default App;
