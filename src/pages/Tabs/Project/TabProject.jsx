import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import PostBtn from '../../../components/Main/project/PostBtn';
import ProjectList from '../../../components/Main/project/ProjectList';
// import { UserContext } from '../../../context/UserContext';

export default function TabProject() {
    // const { user } = useContext(UserContext);
    const [cookies] = useCookies(['id']);
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
            {cookies.id ? (
                <Link to="/maintab/postproject" style={{ textDecoration: 'inherit' }}>
                    <PostBtn />
                </Link>
            ) : (
                <div></div>
            )}

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
