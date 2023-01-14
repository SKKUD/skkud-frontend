import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import PostBtn from '../../../components/common/PostBtn';
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
                    <PostBtn content="Add New Post" />
                </Link>
            ) : (
                ''
            )}
            <ProjectList />
        </>
    );
}
