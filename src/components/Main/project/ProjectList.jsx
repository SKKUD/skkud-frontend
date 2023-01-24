import * as React from 'react';

import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useProjectListApi } from '../../../hooks/Project';

import Card from '@mui/material/Card';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
    // const [cookies] = useCookies(['id']);
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
            const { _id, body, title, images, mainimage, tags, developPeriod, link } = project;
            return (
                <Card sx={{ borderRadius: '25px', mb: 2 }} key={project.index}>
                    <Link
                        to={`/maintab/projectdetail/${project._id}`}
                        style={{
                            textDecoration: 'none',
                            display: 'contents',
                            width: '100%'
                        }}
                        key={project.index}
                        state={{ project }}
                    >
                        <ProjectCard project={project} />
                    </Link>
                </Card>
            );
        });
}
