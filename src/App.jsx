import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { UserContext } from './context/UserContext';
import { TrackContext } from './context/TrackContext';
import Header from './components/common/Header';
import MainTab from './pages/MainTab';
import Login from './components/common/Login';

axios.defaults.withCredentials = true;

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
        },
        mint: {
            main: '#00FFB0',
            contrastText: '#000000',
            dark: '#000000'
        }
    }
});

function App() {
    const [user, setUser] = useState();
    const [trackTab, setTrackTab] = useState();
    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
    const trackValue = useMemo(() => ({ trackTab, setTrackTab }), [trackTab, setTrackTab]);
    // useEffect(() => {
    //     axios
    //         .post(
    //             'http://localhost:8000/auth/login',
    //             { userID: 'skkud', passwd: 'skkud' },
    //             { withCredentials: true }
    //         )
    //         .then((user) => console.log(user));
    // }, []);
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <UserContext.Provider value={userValue}>
                <TrackContext.Provider value={trackValue}>
                    <div className="App" color="primary">
                        <Header position="static" />
                        <Login />
                        <MainTab />
                    </div>
                </TrackContext.Provider>
            </UserContext.Provider>
        </ThemeProvider>
    );
}

export default App;
