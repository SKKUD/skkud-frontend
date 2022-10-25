import * as React from 'react';
import ProjectCard from '../../components/Main/project/ProjectCard';

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
}
