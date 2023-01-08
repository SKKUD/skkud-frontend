import * as React from 'react';
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SideBar from './SideBar';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';

export default function Footer() {
    return (
        <AppBar>
            <Toolbar
                sx={{
                    width: '100%',
                    backgroundColor: '#222222',
                    padding: '50px 24px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={SKKUDLOGO}
                    alt="SKKUD"
                    style={{
                        width: '167px',
                        margin: 0
                    }}
                />
                <SideBar />
            </Toolbar>
        </AppBar>
    );
}
