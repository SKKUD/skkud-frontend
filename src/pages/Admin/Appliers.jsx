import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import EditApplicationForm from './EditApplicationForm';
import ApplicantsList from './ApplicantsList';
import PropTypes from 'prop-types';
import { Tab, Tabs, Box } from '@mui/material';
import styled from '@emotion/styled';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const StyledTabs = styled((props) => (
    <Tabs
        variant="scrollable"
        scrollButtons={false}
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 75,
        width: '100%',
        backgroundColor: '#00FFB0'
    }
});

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
    }
}));

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};
TabPanel.defaultProps = {
    children: ''
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

function Appliers() {
    let TabIndex = 0;
    const [value, setValue] = React.useState(TabIndex);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/applier' || location.pathname === '/applier/') {
            TabIndex = 0;
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
        <Box sx={{ width: '100%', paddingTop: '71px' }}>
            <Header position="static" />
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
                    sx={{
                        width: '100%',
                        padding: '0 8px',
                        position: 'fixed',
                        bgcolor: 'background.paper',
                        zIndex: 1150
                    }}
                >
                    <StyledTab label="Edit Form" {...a11yProps(0)} component={Link} to="" />
                    <StyledTab
                        label="Applicants"
                        {...a11yProps(1)}
                        component={Link}
                        to="applicants"
                    />
                </StyledTabs>
            </Box>

            <TabPanel
                value={value}
                index={value}
                style={{
                    margin: '40px auto 0px',
                    maxWidth: '390px'
                }}
            >
                <Routes>
                    <Route path="" element={<EditApplicationForm />} />
                    <Route path="/applicants" element={<ApplicantsList />} />
                </Routes>
            </TabPanel>
            <Footer />
        </Box>
    );
}

export default Appliers;
