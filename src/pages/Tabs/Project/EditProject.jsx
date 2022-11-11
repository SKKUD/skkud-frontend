import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';

export default function EditProject() {
    // const history = createBrowserHistory();
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/project');
    };

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');
    const [images, setImages] = useState('');

    // :id 파라미터
    const { index } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/posts/${index}`);
            return res.data.data;
        };
        fetchEvents().then((data) => {
            setTitle(data.title);
            setBody(data.body);
            setTags(data.tags);
        });
    }, []);

    // useEffect(() => {
    //     const listenHistoryEvent = history.listen((action) => {
    //         if (action === 'PUSH' || action === 'POP') {
    //             navigate(`/projectdetail/${index}`);
    //         }
    //     });

    //     listenHistoryEvent();
    // }, [history]);

    const postContent = {
        title,
        body,
        tags,
        images
    };

    const onInputChange = (e) => {
        setImages(e.target.files[0]);
        const formData = new FormData();
        formData.append('file', images);
    };

    const HandlPostSubmit = async () => {
        if (postContent.title === '') {
            alert('제목을 입력하세요');
        } else if (postContent.body === '') {
            alert('내용을 입력하세요');
        } else {
            await axios
                .patch(`http://localhost:8000/posts/${index}`, postContent)
                .then((response) => {
                    console.log(response.status);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <form>
            <TextField
                fullWidth
                label="Project Title"
                id="ProjectTitle"
                value={title || ''}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                fullWidth
                label="Project Detail"
                id="ProjectDetail"
                sx={{ mt: '10px' }}
                multiline
                rows={10}
                value={body || ''}
                onChange={(e) => setBody(e.target.value)}
            />
            <TextField
                fullWidth
                label="# tags"
                id="ProjectTags"
                variant="filled"
                value={tags || ''}
                onChange={(e) => {
                    const tagsArray = e.target.value.split(',');
                    setTags(tagsArray);
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    mt: '5px',
                    alignContent: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="images/*" type="file" onChange={onInputChange} />
                    <PhotoCamera />
                </IconButton>
                <Button
                    variant="contained"
                    onClick={() =>
                        HandlPostSubmit().then(() => {
                            navigateToProject();
                        })
                    }
                >
                    submit
                </Button>
            </Box>
        </form>
    );
}
