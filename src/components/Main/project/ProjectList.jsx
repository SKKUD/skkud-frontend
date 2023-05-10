import * as React from 'react';
import { Link } from 'react-router-dom';
import { useProjectListApi } from '../../../hooks/Project';
import Card from '@mui/material/Card';
import ProjectCard from './ProjectCard';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
    text-decoration: none;
    display: contents;
    width: 100%;
`;

const StyledCard = styled(Card)`
    border-radius: 25px;
    margin-bottom: 10px;
`;

export default function ProjectList() {
    const [postList] = useProjectListApi();

    function createData(
        index,
        _id,
        title,
        body,
        images,
        mainimage,
        tags,
        developPeriod,
        link,
        createdAt
    ) {
        return { index, _id, title, body, images, mainimage, tags, developPeriod, link, createdAt };
    }

    const Projects = [];
    for (let i = 0; i < postList.length; i += 1) {
        Projects[i] = createData(
            i,
            postList[i]._id,
            postList[i].title,
            postList[i].body,
            postList[i].images,
            postList[i].mainimage,
            postList[i].tags,
            postList[i].developPeriod,
            postList[i].link,
            postList[i].createdAt
        );
    }

    return Projects.slice(0)
        .reverse()
        .map((project) => {
            return (
                <StyledCard key={project.index}>
                    <StyledLink
                        to={`/maintab/project/${project._id}`}
                        key={project.index}
                        state={{ project }}
                    >
                        <ProjectCard project={project} />
                    </StyledLink>
                </StyledCard>
            );
        });
}
