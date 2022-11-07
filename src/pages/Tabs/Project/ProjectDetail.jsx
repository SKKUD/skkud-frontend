import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DeleteBtn from '../../../components/Main/project/DeleteBtn';
import EditBtn from '../../../components/Main/project/EditBtn';

export default function ProjectDetail() {
    const [post, setPost] = useState({});

    // :id 파라미터
    const { index } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/posts/${index}`);
            setPost(res.data.data);
        };
        fetchEvents();
    }, []);
    console.log(post);
    const { title, body, images, mainimage, tags, _id } = post;

    return (
        <>
            <img src={mainimage} alt={title} style={{ width: '100%' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ lineHeight: '36.5px', ml: '5px' }}>{title}</Box>
                <Box>
                    <Link
                        to={`/editproject/${_id}`}
                        style={{
                            textDecoration: 'none',
                            display: 'contents',
                            width: '100%'
                        }}
                        state={{ title, body, images, mainimage, tags, _id }}
                    >
                        <EditBtn />
                    </Link>
                    <DeleteBtn state={_id} />
                </Box>
            </Box>
            <Divider component="div" />
            <Box sx={{ mt: '10px' }}>
                <Container> {body}</Container>
                {images && images.map((img) => <img src={img} alt={title} key={img} />)}
            </Box>
        </>
    );
}
