import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import PreImages from '../../../components/Main/project/PreImages';

export default function PostProject() {
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/maintab/project');
    };

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [language, setLanguage] = useState('');
    const [images, setImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);

    const uploadImgFile = (event) => {
        const fileArr = event.target.files;
        setImages(Array.from(fileArr)); // 업로드할 이미지 배열 저장
        const fileURLs = [];
        const filesLength = fileArr.length > 10 ? 10 : fileArr.length;

        // 미리보기
        for (let i = 0; i < filesLength; i += 1) {
            const file = fileArr[i];
            const reader = new FileReader();
            reader.onload = () => {
                fileURLs[i] = reader.result;
                setPreviewImg([...fileURLs]);
            };
            reader.readAsDataURL(file);
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
            formData.append('language', language);
            images.map((image) => formData.append('images', image));

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
                    console.log(tagsArray);
                    setTags(tagsArray);
                }}
            />
            <TextField
                fullWidth
                label="# language"
                id="language"
                variant="filled"
                onChange={(e) => setLanguage(e.target.value)}
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
                        onChange={uploadImgFile}
                    />
                    <PhotoCamera />
                </IconButton>
                <Button variant="contained" onClick={HandlPostSubmit}>
                    submit
                </Button>
            </Box>
            <PreImages imgFiles={PreviewImg} />
        </form>
    );
}
