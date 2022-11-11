import React from 'react';
import './utils/font.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/common/Header';
import MainTab from './pages/MainTab';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00FFB0',
            contrastText: '#222222',
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
        }
    }
});

function App() {
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
