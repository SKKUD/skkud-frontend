import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { UserContext } from './context/UserContext';
<<<<<<< HEAD
=======
import { TrackContext } from './context/TrackContext';
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
import MainPage from './pages/MainPage';
import './utils/font.css';
// import SideBarDrawer from './components/common/SideBarDrawer';

axios.defaults.withCredentials = true;

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00FFB0',
            contrastText: '#222222',
            dark: '#027d56'
        },
        neutral: {
            main: '#ffffff99',
            contrastText: '#FFF',
            dark: '#222222'
        },
        background: {
            default: '#222222',
            paper: '#222222'
<<<<<<< HEAD
=======
        },
        mint: {
            main: '#05E49F',
            contrastText: '#FFF',
            dark: '#000000'
        },
        white: {
            main: '#FFF'
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
        }
    },
    typography: {
        fontFamily: [
            '"Pretendard Std Variable"',
            '"Pretendard Std"',
            'Pretendard',
            '-apple-system',
            'BlinkMacSystemFont',
            'system-ui',
            'Roboto',
            '"Helvetica Neue"',
            '"Segoe UI"',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            'sans-serif'
        ].join(',')
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Pretendard Std Variable';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#222222'
                }
            }
        }
    }
});

function App() {
    const [user, setUser] = useState();
<<<<<<< HEAD
    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
=======
    const [trackTab, setTrackTab] = useState();
    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
    const trackValue = useMemo(() => ({ trackTab, setTrackTab }), [trackTab, setTrackTab]);
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
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
<<<<<<< HEAD
                <div className="App" color="primary" style={{ paddingTop: '60px', width: '100%' }}>
                    <MainPage />
                </div>
=======
                <TrackContext.Provider value={trackValue}>
                    <div
                        className="App"
                        color="primary"
                        style={{ paddingTop: '60px', width: '100%' }}
                    >
                        <MainPage />
                    </div>
                </TrackContext.Provider>
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
            </UserContext.Provider>
        </ThemeProvider>
    );
}

export default App;
