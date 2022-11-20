import * as React from 'react';
// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import SideBarBtn from './SideBarBtn';
import SideBar from './SideBar';

function Header() {
    return (
        <AppBar>
            <Toolbar
                sx={{
                    position: 'fixed',
                    width: '100%',
                    backgroundColor: '#222222'
                }}
            >
                {/* <Box sx={{ fontWeight: 700 }}>SKKU.D</Box> */}
                <Typography variant="h6" noWrap sx={{ width: '98%' }} component="div">
                    SKKU.D
                </Typography>
                <SideBar />
                {/* <SideBarBtn /> */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
