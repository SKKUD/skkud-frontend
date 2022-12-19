import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TabAboutUs from './Tabs/TabAboutUs';
import ProjectList from './Tabs/Project/TabProject';
import TabMember from './Tabs/User/TabMember';
import PostProject from './Tabs/Project/PostProject';
import ProjectDetail from './Tabs/Project/ProjectDetail';
import EditProject from './Tabs/Project/EditProject';
import CreateUser from './Tabs/User/CreateUser';
import EditUser from './Tabs/User/EditUser';
import FrontendTab from './Tabs/User/FrontendTab';
import BackendTab from './Tabs/User/BackendTab';

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
                    </Tabs>
                </Box>

                <TabPanel value={value} index={value}>
                    <Routes>
                        <Route path="/" element={<TabAboutUs />} />
                        <Route path="/project" element={<ProjectList />} />
                        <Route path="/postproject" element={<PostProject />} />
                        <Route path="/editproject/:index" element={<EditProject />} />
                        <Route path="/projectdetail/:index" element={<ProjectDetail />} />
                        <Route path="/member" element={<TabMember />} />
                        <Route path="/member/frontend" element={<FrontendTab />} />
                        <Route path="/member/backend" element={<BackendTab />} />
                        <Route path="/createuser" element={<CreateUser />} />
                        <Route path="/edituser/:index" element={<EditUser />} />
                    </Routes>
                </TabPanel>
            </Box>
        </Router>
    );
}
