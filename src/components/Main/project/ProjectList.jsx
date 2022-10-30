import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('http://localhost:8000/posts');
            setPostList(res.data.data);
        };
        fetchEvents();
    }, []);

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
            postList[i].img,
            postList[i].tags,
            postList[i].createdAt
        );
    }

    return Projects.map((project) => (
        <Link
            to={`/projectdetail/${project._id}`}
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
}
