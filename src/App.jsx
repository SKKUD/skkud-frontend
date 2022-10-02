import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './pages/Main';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00FFB0'
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
                <Main />
            </div>
        </ThemeProvider>
    );
}

export default App;
