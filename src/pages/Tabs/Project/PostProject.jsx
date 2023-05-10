import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, IconButton, Snackbar, TextField, Alert } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import PreImages from '../../../components/Main/project/PreImages';
import ContributorList from '../../../components/Main/project/ContributorList';
import { useProjectPostApi } from '../../../hooks/Project';
import { useUsersApi } from '../../../hooks/Member';

export default function PostProject() {
    const [postProjectPost] = useProjectPostApi();
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/maintab/project');
    };
    const [alertTitle, setAlertTitle] = useState(false);
    const [alertContent, setAlertContent] = useState(false);
    const [alertPeriod, setAlertPeriod] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [period, setPeriod] = useState('');
    const [link, setLink] = useState('');
    const [images, setImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);
    const [users] = useUsersApi();
    const [checked, setChecked] = React.useState([]);
    const handleClose = (event, reason) => {
        setAlertContent(false);
        setAlertTitle(false);
        setAlertPeriod(false);
    };

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
            setAlertTitle(true);
        } else if (body === '') {
            setAlertContent(true);
        } else if (period === '') {
            setAlertPeriod(true);
        } else {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('body', body);
            for (let i = 0; i < tags.length; i++) {
                formData.append('tags', tags[i]);
            }

            formData.append('developPeriod', period);
            formData.append('link', link);
            images.map((image) => formData.append('images', image));

            postProjectPost.then(() => {
                navigateToProject();
            });
        }
    };

    function CheckboxMemberList() {
        const handleToggle = (id) => () => {
            const currentIndex = checked.indexOf(id);
            const newChecked = [...checked];

            if (currentIndex === -1) {
                newChecked.push(id);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setChecked(newChecked);
        };

        return <ContributorList users={users} handleToggle={handleToggle} checked={checked} />;
    }
    return (
        <>
            <form encType="multipart/form-data">
                {PreviewImg.length !== 0 ? (
                    <Box
                        mb="12px"
                        sx={{
                            border: '1px solid #00FFA8',
                            boxSizing: 'border-box',
                            height: '205px',
                            overflow: 'hidden'
                        }}
                    >
                        <PreImages imgFiles={PreviewImg} />
                    </Box>
                ) : null}
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
                <TextField
                    fullWidth
                    label="developPeriod"
                    id="developPeriod"
                    variant="filled"
                    onChange={(e) => setPeriod(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="link"
                    id="link"
                    variant="filled"
                    onChange={(e) => setLink(e.target.value)}
                />
                <CheckboxMemberList members={users} />
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
                            accept="image/jpg,image/png,image/jpeg,image/gif"
                            onChange={uploadImgFile}
                        />
                        <PhotoCamera />
                    </IconButton>
                    <Button variant="contained" onClick={HandlPostSubmit}>
                        submit
                    </Button>
                </Box>
            </form>
            <Snackbar open={alertTitle} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    제목을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={alertContent} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    내용을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={alertPeriod} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    개발 기간을 입력하세요.
                </Alert>
            </Snackbar>
        </>
    );
}
