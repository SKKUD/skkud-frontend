import * as React from 'react';
<<<<<<< HEAD
// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import SideBarBtn from './SideBarBtn';
import SideBar from './SideBar';

function Header() {
=======
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
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
    return (
        <AppBar>
            <Toolbar
                sx={{
                    position: 'fixed',
                    width: '100%',
<<<<<<< HEAD
                    backgroundColor: '#222222'
                }}
            >
                {/* <Box sx={{ fontWeight: 700 }}>SKKU.D</Box> */}
                <Typography variant="h6" noWrap sx={{ width: '98%' }} component="div">
                    SKKU.D
                </Typography>
                <SideBar />
                {/* <SideBarBtn /> */}
=======
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
                    onClick={navigateToMaintab}
                />
                <SideBar />
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
            </Toolbar>
        </AppBar>
    );
}

export default Header;
