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
import CreateUser from './User/CreateUser';
import CreateUser2 from './User/CreateUser2';
import CreateUser3 from './User/CreateUser3';
import FrontendTab from './User/FrontendTab';
import BackendTab from './User/BackendTab';
import TabStudy from './Study/TabStudy';
import StudyContent from './Study/StudyContent';
import EditStudy from './Study/EditStudy';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FinishCreateUser from './User/FinishCreateUser';
import MyPageDetail from './User/MyPageDetail';
import MyPage from './User/MyPage';
import PostStudy from './Study/PostStudy';

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
        maxWidth: 80,
        width: '100%',
        backgroundColor: '#00FFB0'
    }
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 600,
    paddingBottom: '5px',
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
    console.log(location);

    useEffect(() => {
        if (location.pathname === '/maintab' || location.pathname === '/maintab/') {
            TabIndex = 0;
            setValue(TabIndex);
        } else if (
            location.pathname === '/maintab/frontend' ||
            location.pathname === '/maintab/backend' ||
            location.pathname === '/maintab/design' ||
            location.pathname === '/maintab/createuser' ||
            location.pathname === '/maintab/member'
        ) {
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
        <Box sx={{ width: '100%' }}>
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
                        position: 'fixed',
                        bgcolor: 'background.paper',
                        marginTop: '40px',
                        zIndex: 1150
                    }}
                >
                    <StyledTab label="About us" {...a11yProps(0)} component={Link} to="" />
                    <StyledTab label="Project" {...a11yProps(1)} component={Link} to="project" />
                    <StyledTab label="Member" {...a11yProps(2)} component={Link} to="member" />
                    <StyledTab label="Study" {...a11yProps(3)} component={Link} to="study" />
                </StyledTabs>
            </Box>

            <TabPanel value={value} index={value} style={{ marginTop: '85px' }}>
                <Routes>
                    <Route path="" element={<TabAboutUs />} />
                    <Route path="project" element={<ProjectList />} />
                    <Route path="postproject" element={<PostProject />} />
                    <Route path="editproject/:index" element={<EditProject />} />
                    <Route path="projectdetail/:index" element={<ProjectDetail />} />
                    <Route path="member" element={<FrontendTab />} />
                    <Route path="member/design" element={<TabMember />} />
                    {/* <Route path="frontend" element={<FrontendTab />} /> */}
                    <Route path="member/backend" element={<BackendTab />} />
                    <Route path="member/createuser" element={<CreateUser />} />
                    <Route path="member/createuser2" element={<CreateUser2 />} />
                    <Route path="member/createuser3" element={<CreateUser3 />} />
                    <Route path="member/mypage" element={<MyPage />} />
                    <Route path="member/usercreated" element={<FinishCreateUser />} />
                    <Route path="member/mypagedetail" element={<MyPageDetail />} />
                    <Route path="study" element={<TabStudy />} />
                    <Route path="study/:index" element={<StudyContent />} />
                    <Route path="study/edit/:index" element={<EditStudy />} />
                    <Route path="study/post" element={<PostStudy />} />
                </Routes>
            </TabPanel>
            <Footer />
        </Box>
    );
}

export default MainTab;
