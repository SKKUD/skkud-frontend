import * as React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useProjectListApi } from '../../../hooks/Project';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ProjectCard from './ProjectCard';
import styled from '@emotion/styled';

const StyledTitle = styled.div`
    margin: 60px 0 30px;
    color: #00ffa8;
    font-size: 60px;
    font-weight: 900;
    line-height: 104.836%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: contents;
    width: 100%;
`;

const StyledCard = styled(Card)`
    border-radius: 25px;
    margin-bottom: 10px;

    @media (min-width: 1024px) {
        border-radius: 15px;
    }
`;

export default function ProjectList() {
    const match1024 = useMediaQuery('(min-width:1024px)');
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

    return (
        <>
            {match1024 ? (
                <>
                    <StyledTitle>Our Projects</StyledTitle>
                    <Grid container spacing={2}>
                        {Projects.slice(0)
                            .reverse()
                            .map((project) => (
                                <Grid item xs={6} key={project.index}>
                                    <StyledCard>
                                        <StyledLink
                                            to={`/maintab/project/${project._id}`}
                                            key={project.index}
                                            state={{ project }}
                                        >
                                            <ProjectCard project={project} />
                                        </StyledLink>
                                    </StyledCard>
                                </Grid>
                            ))}
                    </Grid>
                </>
            ) : (
                Projects.slice(0)
                    .reverse()
                    .map((project) => (
                        <StyledCard key={project.index}>
                            <StyledLink
                                to={`/maintab/project/${project._id}`}
                                key={project.index}
                                state={{ project }}
                            >
                                <ProjectCard project={project} />
                            </StyledLink>
                        </StyledCard>
                    ))
            )}
        </>
    );
}
