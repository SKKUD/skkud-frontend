]import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
<<<<<<< HEAD
import { UserContext } from './context/UserContext';
import MainPage from './pages/MainPage';
import './utils/font.css';
// import SideBarDrawer from './components/common/SideBarDrawer';

axios.defaults.withCredentials = true;
=======
import Header from './components/common/Header';
import MainTabs from './components/Main/MainTabs';

>>>>>>> 5ab0976 (fix tab router)

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00FFB0',
<<<<<<< HEAD
            contrastText: '#222222',
=======
            contrastText: '#292929',
>>>>>>> cf06860 (add ProjectList)
            dark: '#027d56'
        },
        neutral: {
            main: '#7c7c7c',
            contrastText: '#FFF',
            dark: '#111111'
        },
        background: {
            default: '#222222',
            paper: '#222222'
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
    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
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
<<<<<<< HEAD
            <UserContext.Provider value={userValue}>
                <div className="App" color="primary" style={{ paddingTop: '60px', width: '100%' }}>
                    <MainPage />
                </div>
            </UserContext.Provider>
=======
            <div className="App" color="primary">
                <Header position="static" />
                <MainTabs />
            </div>
>>>>>>> 5ab0976 (fix tab router)
        </ThemeProvider>
    );
}

export default App;
