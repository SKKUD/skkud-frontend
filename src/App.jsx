import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/common/Header';
import MainTabs from './components/Main/MainTabs';


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
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="App" color="primary">
                <Header position="static" />
                <MainTabs />
            </div>
        </ThemeProvider>
    );
}

export default App;
