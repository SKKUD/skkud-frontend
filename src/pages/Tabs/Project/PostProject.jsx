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

    const postContent = {
        title,
        body,
        tags,
        images
    };

    const onImageInput = (e) => {
        // const selectedImageList = e.target.files;
        // for (let i = 0; i < selectedImageList.length; i += 1) {
        //     setImages([selectedImageList[i].name, ...images]);
        // }

        const formData = new FormData();
        // for (let i = 0; i < e.target.files.length; i += 1) {
        //     formData.append('images', e.target.files[i]);

        // }
        formData.append('images', e.target.files[0]);
        setImages(formData);
        // console.log(formData);
        // console.log(e.target.files[0]);
        // console.log(images)
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
