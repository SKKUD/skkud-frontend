import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TabAboutUs from './Tabs/TabAboutUs';
import ProjectList from './Tabs/TabProject';
// import ProjectList from './project/ProjectList';
import TabMember from './Tabs/TabMember';
import TabStudy from './Tabs/TabStudy';

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
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="mainTabs" centered>
                        <Tab label="about us" {...a11yProps(0)} component={Link} to="/" />
                        <Tab label="project" {...a11yProps(1)} component={Link} to="/project" />
                        <Tab label="member" {...a11yProps(2)} component={Link} to="/member" />
                        <Tab label="study" {...a11yProps(2)} component={Link} to="/study" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={value}>
                    <Routes>
                        <Route path="/" element={<TabAboutUs />} />
                        <Route path="/project" element={<ProjectList />} />
                        <Route path="/member" element={<TabMember />} />
                        <Route path="/study" element={<TabStudy />} />
                    </Routes>
                </TabPanel>
            </Box>
        </Router>
    );
}
