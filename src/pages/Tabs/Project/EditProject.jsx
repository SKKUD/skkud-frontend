import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import PreImages from '../../../components/Main/project/PreImages';
import { useProjectPostDetailApi } from '../../../hooks/Project';

export default function EditProject() {
    // const history = createBrowserHistory();
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/maintab/project');
    };
    const PostDetail = useProjectPostDetailApi();

    const [title, setTitle] = PostDetail[0];
    const [body, setBody] = PostDetail[1];
    const [tags, setTags] = PostDetail[2];
    const [images] = PostDetail[3];
    const [newImages, setNewImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState('');

    // :id 파라미터
    const { index } = useParams();

    const uploadImgFile = (event) => {
        const fileArr = event.target.files;
        // console.log(Array.from(fileArr));
        setNewImages(Array.from(fileArr)); // 업로드할 이미지 배열 저장
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

            const convertURLtoFile = async (imageUrl) => {
                const response = await fetch(imageUrl);
                const data = await response.blob();
                const ext = imageUrl.split('.').pop();
                const filename = imageUrl.split('/').pop();
                const metadata = { type: `image/${ext}` };

                const newfile = new File([data], filename, metadata);
                formData.append('images', newfile);
                // console.log(1);
                // for (const value of formData.values()) {
                //     console.log('after convert : ', value);
                // }
            };

            images.map((image) => convertURLtoFile(image));

            newImages.map(
                (image) =>
                    // console.log(3);
                    formData.append('images', image)
                // for (const value of formData.values()) {
                //     console.log('after append newfile : ', value);
                // }
            );

            // console.log(formData);
            // for (const pair of formData.entries()) {
            //     console.log(pair[0] + ', ' + pair[1]);
            // }

            await axios
                .post(`http://localhost:8000/posts/revise/${index}`, formData)
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
            {images && images.map((img) => <img src={img} alt={title} key={img} width="20%" />)}
            {PreviewImg && <PreImages imgFiles={PreviewImg} />}
        </form>
    );
}
