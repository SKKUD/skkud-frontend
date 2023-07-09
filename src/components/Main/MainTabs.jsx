import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const StyledTabs = styled((props) => (
    <Tabs
        variant="scrollable"
        scrollButtons={false}
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))(({ theme }) => ({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 68,
        width: '100%',
        backgroundColor: '#00FFB0'
    },
    width: '100%',
    padding: '0 8px',
    position: 'fixed',
    backgroundColor: theme.palette.background.paper,
    zIndex: 1150,

    '@media screen and (min-width: 1024px)': {
        top: '0px',
        right: '30%',
        width: '40%',
        height: '71px'
    }
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 600,
    padding: '5px 15px 5px',
    fontSize: theme.typography.pxToRem(15),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff'
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)'
    },

    '@media screen and (min-width: 1024px)': {
        marginTop: '18px'
    }
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function MainTabs() {
    let TabIndex = 0;
    const [value, setValue] = useState(TabIndex);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/maintab' || location.pathname === '/maintab/') {
            TabIndex = 0;
            setValue(TabIndex);
        } else if (location.pathname.substring(0, 15) === '/maintab/member') {
            TabIndex = 2;
            setValue(TabIndex);
        } else if (location.pathname.substring(0, 14) === '/maintab/study') {
            TabIndex = 3;
            setValue(TabIndex);
        } else {
            TabIndex = 1;
            setValue(TabIndex);
        }
    }, [location]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="mainTabs"
                variant="fullWidth"
            >
                <StyledTab label="About us" {...a11yProps(0)} component={Link} to="" />
                <StyledTab label="Project" {...a11yProps(1)} component={Link} to="project" />
                <StyledTab label="Member" {...a11yProps(2)} component={Link} to="member" />
                <StyledTab label="Study" {...a11yProps(3)} component={Link} to="study" />
            </StyledTabs>
        </Box>
    );
}
