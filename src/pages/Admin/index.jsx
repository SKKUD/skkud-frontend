import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Applier from './Applier';
import { Tab, Tabs, Box, Link } from '@mui/material';
import styled from '@emotion/styled';

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(15),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff'
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)'
    }
}));

const StyledTabs = styled((props) => (
    <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 80,
        width: '100%',
        backgroundColor: '#00FFB0'
    }
});

function Admin() {
    let TabIndex = 0;
    const [value, setValue] = React.useState(TabIndex);
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <StyledTabs
                    value={value}
                    onChange={() => {}}
                    aria-label="mainTabs"
                    variant="fullWidth"
                    sx={{ width: '80%' }}
                >
                    <StyledTab label="Applier" component={Link} to="/applier" />
                </StyledTabs>
            </Box>
            <Routes>
                <Route path="applier" element={<Applier />} />
            </Routes>
        </>
    );
}

export default Admin;
