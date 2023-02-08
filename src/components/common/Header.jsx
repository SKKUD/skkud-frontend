import * as React from 'react';
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SideBar from './SideBar';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';

function Header() {
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };

    return (
        <AppBar>
            <Toolbar
                sx={{
                    position: 'fixed',
                    width: '100%',
                    backgroundColor: '#222222',
                    padding: '30px 24px 10px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <img
                    src={SKKUDLOGO}
                    alt="SKKUD"
                    style={{
                        width: '146px',
                        margin: 0
                    }}
                    onClick={navigateToMaintab}
                />
                <SideBar />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
