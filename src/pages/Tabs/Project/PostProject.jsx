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
    const [images, setImages] = useState([]);

    const onImageInput = (e) => {
        e.preventDefault();

        if (e.target.files.length > 0) {
            setImages(e.target.files[0]);
        }
    };

    const HandlPostSubmit = async () => {
        if (title === '') {
            alert('제목을 입력하세요');
        } else if (body === '') {
            alert('내용을 입력하세요');
        } else {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('body', body);
            formData.append('tags', tags);
            formData.append('images', images);
            await axios
                .post('http://localhost:8000/posts', formData)
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
        <form encType="multipart/form-data">
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
                    <input
                        hidden
                        name="images"
                        multiple
                        type="file"
                        accept="image/jpg,impge/png,image/jpeg,image/gif"
                        onChange={onImageInput}
                    />
                    <PhotoCamera />
                </IconButton>
                <Button variant="contained" onClick={HandlPostSubmit}>
                    submit
                </Button>
            </Box>
        </form>
    );
}
