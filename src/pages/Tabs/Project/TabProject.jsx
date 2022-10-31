import * as React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import PostBtn from '../../../components/Main/project/PostBtn';
import ProjectList from '../../../components/Main/project/ProjectList';

// const Projects = [
//     {
//         name: 'SKKLUB',
//         des: '성균관대학교 교내 동아리 안내',
//         keywords: ['학교 서비스', '사용 프로그램']
//     },
//     {
//         name: 'SKKLUB2',
//         des: '성균관대학교 교내 동아리 안내',
//         keywords: ['학교 서비스', '사용 프로그램']
//     }
// ];

export default function TabProject() {
    // const [postList, setPostList] = useState([]);

    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         const res = await axios.get('http://localhost:8000/posts');
    //         console.log(res);
    //         setPostList(res.data.data);
    //         console.log(postList);
    //     };
    //     fetchEvents();
    // }, []);

    return (
        <>
            <Link to="/postproject" style={{ textDecoration: 'inherit' }}>
                <PostBtn />
            </Link>
            {/* {Projects.map((project) => (
                <Link
                    to={`/projectdetail/${project.name}`}
                    style={{
                        textDecoration: 'none',
                        display: 'contents',
                        width: '100%'
                    }}
                    key={project.name}
                >
                    <ProjectCard
                        name={project.name}
                        des={project.des}
                        keywords={project.keywords}
                        key={project.name}
                    />
                    <ProjectList />
                </Link>
            ))} */}

            <ProjectList />
        </>
    );
}
