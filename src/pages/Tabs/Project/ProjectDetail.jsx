import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
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

    const { title, body, images, mainimage, tags, language, _id } = post;

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Link
                    to={`/editproject/${_id}`}
                    style={{
                        textDecoration: 'none',
                        display: 'contents',
                        width: '100%'
                    }}
                    state={{ title, body, images, mainimage, language, tags, _id }}
                >
                    <EditBtn />
                </Link>
                <DeleteBtn state={_id} />
            </Box>
            <img src={mainimage} alt={title} style={{ width: '100%' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ lineHeight: '36.5px', ml: '5px' }}>{title}</Box>
                <Chip key={language} label={`# ${language}`} variant="outlined" color="primary" />
            </Box>
            <Divider component="div" />
            <Box sx={{ mt: '10px' }}>
                <Container> {body}</Container>
                <Stack direction="row" spacing={0.5} mt={1.5}>
                    {tags &&
                        tags.map((tag) => (
                            <Chip key={tag} label={`# ${tag}`} variant="outlined" color="primary" />
                        ))}
                </Stack>
                {images &&
                    images.map((img) => <img src={img} alt={title} key={img} width="100%" />)}
            </Box>
        </>
    );
}
