import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import TabAboutUs from './TabAboutUs';
import ProjectList from './Project/TabProject';
import TabMember from './User/TabMember';
import PostProject from './Project/PostProject';
import ProjectDetail from './Project/ProjectDetail';
import EditProject from './Project/EditProject';
import TabStudy from './Study/TabStudy';
import StudyContent from './Study/StudyContent';
import EditStudy from './Study/EditStudy';
import PostStudy from './Study/PostStudy';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import MyPageDetail from './User/MyPageDetail';
import MyPage from './User/MyPage';
import MainTabs from '../../components/Main/MainTabs';

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

const Container = styled(Box)`
    width: 100%;
    padding-top: 71px;
`;

const TabPanelContainer = styled(Box)`
    margin: 65px auto 15px;
    max-width: 480px;
    width: 90%;
    min-height: calc(100vh - 235px);

    @media (min-width: 1024px) {
        max-width: 100%;
        width: 100%;
        margin: 0px auto 15px;
    }
`;

function MainTab() {
    return (
        <Container>
            <Header position="static" />
            <MainTabs />
            <TabPanelContainer>
                <Routes>
                    <Route path="" element={<TabAboutUs />} />
                    <Route path="project" element={<ProjectList />} />
                    <Route path="project/post" element={<PostProject />} />
                    <Route path="project/:index" element={<ProjectDetail />} />
                    <Route path="project/edit/:index" element={<EditProject />} />
                    <Route path="member" element={<TabMember />} />
                    <Route path="member/mypage" element={<MyPage />} />
                    <Route path="member/mypagedetail" element={<MyPageDetail />} />
                    <Route path="study" element={<TabStudy />} />
                    <Route path="study/:index" element={<StudyContent />} />
                    <Route path="study/edit/:index" element={<EditStudy />} />
                    <Route path="study/post" element={<PostStudy />} />
                </Routes>
            </TabPanelContainer>

            <Footer />
        </Container>
    );
}

export default MainTab;
