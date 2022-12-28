import * as React from 'react';
// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import SideBarBtn from './SideBarBtn';
import SideBar from './SideBar';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';

function Header() {
    return (
        <AppBar>
            <Toolbar
                sx={{
                    position: 'fixed',
                    width: '100%',
                    backgroundColor: '#222222',
                    padding: '50px 24px 10px',
                    display: 'flex',
                    justifyContent: 'space-between'
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

export default Header;
