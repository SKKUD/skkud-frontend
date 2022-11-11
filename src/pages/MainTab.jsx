import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TabAboutUs from './Tabs/TabAboutUs';
import ProjectList from './Tabs/Project/TabProject';
import TabMember from './Tabs/TabMember';
import PostProject from './Tabs/Project/PostProject';
import ProjectDetail from './Tabs/Project/ProjectDetail';
import EditProject from './Tabs/Project/EditProject';

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

export default function MainTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Router>
            <Box sx={{ width: '100%' }}>
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
                        <StyledTab label="about us" {...a11yProps(0)} component={Link} to="/" />
                        <StyledTab
                            label="project"
                            {...a11yProps(1)}
                            component={Link}
                            to="/project"
                        />
                        <StyledTab label="member" {...a11yProps(2)} component={Link} to="/member" />
                    </StyledTabs>
                </Box>
                <TabPanel value={value} index={value}>
                    <Routes>
                        <Route path="/" element={<TabAboutUs />} />
                        <Route path="/project" element={<ProjectList />} />
                        <Route path="/postproject" element={<PostProject />} />
                        <Route path="/editproject/:index" element={<EditProject />} />
                        <Route path="/projectdetail/:index" element={<ProjectDetail />} />
                        <Route path="/member" element={<TabMember />} />
                    </Routes>
                </TabPanel>
            </Box>
        </Router>
    );
}
