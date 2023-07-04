import * as React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PostBtn from '../../../components/Main/project/PostBtn';
import ProjectList from '../../../components/Main/project/ProjectList';

const ProjectsContainer = styled.div`
    @media (min-width: 1024px) {
        width: 75%;
        min-width: 1000px;
        margin: 50px auto 150px;
    }
`;

export default function TabProject() {
    const [cookies] = useCookies(['id']);

    return (
        <ProjectsContainer>
            {cookies.id ? (
                <Link to="/maintab/project/post" style={{ textDecoration: 'inherit' }}>
                    <PostBtn content="+ Add New Post" />
                </Link>
            ) : (
                ''
            )}
            <ProjectList />
        </ProjectsContainer>
    );
}
