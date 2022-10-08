import * as React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { useProjectListApi } from '../../../hooks/Project';

export default function ProjectList() {
    const [postList] = useProjectListApi();

    function createData(index, _id, title, body, images, mainimage, tags, createdAt) {
        return { index, _id, title, body, images, mainimage, tags, createdAt };
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
            postList[i].createdAt
        );
    }

    return Projects.slice(0)
        .reverse()
        .map((project) => (
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
                <ProjectCard project={project} key={project.index} />
            </Link>
        ));
=======
import ProjectCard from './ProjectCard';

const Projects = [
    {
        name: 'SKKLUB',
        des: '성균관대학교 교내 동아리 안내',
        keywords: ['학교 서비스', '사용 프로그램']
    },
    {
        name: 'SKKLUB2',
        des: '성균관대학교 교내 동아리 안내',
        keywords: ['학교 서비스', '사용 프로그램']
    }
];

export default function ProjectList() {
    return Projects.map((project) => (
        <ProjectCard
            name={project.name}
            des={project.des}
            keywords={project.keywords}
            key={project.name}
        />
    ));
>>>>>>> cf06860 (add ProjectList)
}
