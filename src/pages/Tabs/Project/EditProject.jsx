import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';

export default function EditProject() {
    const location = useLocation();
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/project');
    };

    const { title, body, images, tags, _id } = location.state;

    const [titleinput, setTitle] = useState(title);
    const [bodyinput, setBody] = useState(body);
    const [tagsinput, setTags] = useState(tags);
    const [imginput, setImage] = useState(images);

    const postContent = {
        title: titleinput,
        body: bodyinput,
        tags: tagsinput,
        images: imginput
    };

    const onInputChange = (e) => {
        setImage(e.target.files[0]);
        const formData = new FormData();
        formData.append('file', imginput);
    };

    const HandlPostSubmit = async () => {
        if (postContent.title === '') {
            alert('제목을 입력하세요');
        } else if (postContent.body === '') {
            alert('내용을 입력하세요');
        } else {
            await axios
                .patch(`http://localhost:8000/posts/${_id}`, postContent)
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
                value={titleinput || ''}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                fullWidth
                label="Project Detail"
                id="ProjectDetail"
                sx={{ mt: '10px' }}
                multiline
                rows={10}
                value={bodyinput || ''}
                onChange={(e) => setBody(e.target.value)}
            />
            <TextField
                fullWidth
                label="# tags"
                id="ProjectTags"
                variant="filled"
                value={tagsinput || ''}
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
