import * as React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import PostBtn from '../../../components/Main/project/PostBtn';
import ProjectList from '../../../components/Main/project/ProjectList';

export default function TabProject() {
    const [cookies] = useCookies(['id']);

    return (
        <>
            {cookies.id ? (
                <Link to="/maintab/project/post" style={{ textDecoration: 'inherit' }}>
                    <PostBtn content="Add New Post" />
                </Link>
            ) : (
                ''
            )}
            <ProjectList />
        </>
    );
}
