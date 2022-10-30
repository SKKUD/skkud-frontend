import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';

export default function PostProject() {
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/project');
    };

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [img, setImage] = useState([]);

    const postContent = {
        title,
        body,
        tags,
        img
    };
    const onImageInput = (e) => {
        if (!e.target.files) {
            return;
        }

        const formData = new FormData();
        formData.append('image', e.target.files[0]);

        setImage(formData);
    };

    const HandlPostSubmit = async () => {
        if (postContent.title === '') {
            alert('제목을 입력하세요');
        } else if (postContent.body === '') {
            alert('내용을 입력하세요');
        } else {
            await axios
                .post('http://localhost:8000/posts', postContent)
                .then((response) => {
                    console.log(response.status);
                })
                .then(() => {
                    navigateToProject();
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
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                fullWidth
                label="Project Detail"
                id="ProjectDetail"
                sx={{ mt: '10px' }}
                multiline
                rows={10}
                onChange={(e) => setBody(e.target.value)}
            />
            <TextField
                fullWidth
                label="# tags"
                id="ProjectTags"
                variant="filled"
                onChange={(e) => {
                    const tagsArray = e.target.value.split(',');
                    console.log(tagsArray);
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
                    <input hidden accept="images/*" type="file" onChange={onImageInput} />
                    <PhotoCamera />
                </IconButton>
                <Button variant="contained" onClick={HandlPostSubmit}>
                    submit
                </Button>
            </Box>
        </form>
    );
}
