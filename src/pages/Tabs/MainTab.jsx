import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import TabAboutUs from './TabAboutUs';
import ProjectList from './Project/TabProject';
import TabMember from './User/TabMember';
import PostProject from './Project/PostProject';
import ProjectDetail from './Project/ProjectDetail';
import EditProject from './Project/EditProject';
// import CreateUser from './Tabs/User/CreateUser';
// import EditUser from './Tabs/User/EditUser';
import Header from '../../components/common/Header';
import Login from '../../components/common/Login';

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

function MainTab() {
    let TabIndex = 0;
    const [value, setValue] = React.useState(TabIndex);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/maintab/project') {
            TabIndex = 1;
            setValue(TabIndex);
        } else if (location.pathname === '/maintab/member') {
            TabIndex = 2;
            setValue(TabIndex);
        } else {
            TabIndex = 0;
            setValue(TabIndex);
        }
    }, [location]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Header position="static" />
            <Login sx={{ mt: '20px' }} />
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
                    sx={{ width: '80%' }}
                >
                    <StyledTab label="about us" {...a11yProps(0)} component={Link} to="" />
                    <StyledTab label="project" {...a11yProps(1)} component={Link} to="project" />
                    <StyledTab label="member" {...a11yProps(2)} component={Link} to="member" />
                </StyledTabs>
            </Box>

            <TabPanel value={value} index={value}>
                <Routes>
                    <Route path="" element={<TabAboutUs />} />
                    <Route path="project" element={<ProjectList />} />
                    <Route path="postproject" element={<PostProject />} />
                    <Route path="editproject/:index" element={<EditProject />} />
                    <Route path="projectdetail/:index" element={<ProjectDetail />} />
                    <Route path="member" element={<TabMember />} />
                    {/* <Route path="/createuser" element={<CreateUser />} />
                <Route path="/edituser/:index" element={<EditUser />} /> */}
                </Routes>
            </TabPanel>
        </Box>
    );
}

export default MainTab;