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
import PreImages from '../../../components/Main/project/PreImages';

export default function EditProject() {
    // const history = createBrowserHistory();
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/project');
    };

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [images, setImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState('');

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
            setImages(data.images);
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
            images.map((image) => formData.append('images', image));
            formData.append('_id', index);
            await axios
                .patch(`http://localhost:8000/posts/${index}`, formData)
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
            {PreviewImg
                ? null
                : images.map((img) => <img src={img} alt={title} key={img} width="20%" />)}
            {PreviewImg && <PreImages imgFiles={PreviewImg} />}
        </form>
    );
}
