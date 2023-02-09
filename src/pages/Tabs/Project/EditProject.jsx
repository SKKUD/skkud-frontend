import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import PreImages from '../../../components/Main/project/PreImages';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useProjectPostDetailApi } from '../../../hooks/Project';

export default function EditProject() {
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/maintab/project');
    };

    const PostDetail = useProjectPostDetailApi();
    const [alertTitle, setAlertTitle] = useState(false);
    const [alertContent, setAlertContent] = useState(false);
    const [alertPeriod, setAlertPeriod] = useState(false);
    const [title, setTitle] = PostDetail[0];
    const [body, setBody] = PostDetail[1];
    const [tags, setTags] = PostDetail[2];
    const [period, setPeriod] = PostDetail[3];
    const [link, setLink] = PostDetail[4];
    const [images] = PostDetail[5];
    const [checked, setChecked] = PostDetail[6];
    const [newImages, setNewImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);
    const [users, getUsers] = useState([]);
    const handleClose = (event, reason) => {
        setAlertContent(false);
        setAlertTitle(false);
        setAlertPeriod(false);
    };
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('http://3.38.103.20:8000/users');
            getUsers(res.data.data.users);
        };
        fetchEvents();
    }, []);

    // :id 파라미터
    const { index } = useParams();

    const uploadImgFile = (event) => {
        const fileArr = event.target.files;
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
            // alert('제목을 입력하세요');
            setAlertTitle(true);
        } else if (body === '') {
            // alert('내용을 입력하세요');
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
            formData.append('period', period);
            formData.append('link', link);
            newImages.map((image) => formData.append('images', image));
            // formData.append('addCotributors', checked);
            // console.log(checked);
            // console.log(PreviousChecked);
            // console.log(checked.filter((x) => !PreviousChecked.includes(x)));
            // console.log(PreviousChecked.filter((x) => !checked.includes(x)));
            // formData.append(
            //     'deleteContributors',
            //     PreviousChecked.filter((x) => !checked.includes(x))
            // );

            await axios
                .patch(`http://3.38.103.20:8000/posts/contributor/${index}`, {
                    contributors: checked
                })
                .then((response) => {
                    console.log(response.status);
                })
                .catch((error) => {
                    console.log(error);
                });

            await axios
                .post(`http://3.38.103.20:8000/posts/revise/${index}`, formData)
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

        return (
            <div style={{ backgroundColor: '#333', borderBottom: '1px solid #ffffff99' }}>
                <div
                    style={{
                        fontSize: '0.75rem',
                        color: '#ffffff99',
                        padding: '12px 0px 0px 12px'
                    }}
                >
                    참여 멤버
                </div>
                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: '#333' }}>
                    {users.map((member) => {
                        const id = member._id;
                        const name = member.username;
                        const labelId = `checkbox-list-secondary-label-${id}`;
                        return (
                            <ListItem
                                key={id}
                                secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        onChange={handleToggle(id)}
                                        checked={checked.indexOf(id) !== -1}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemText id={labelId} primary={`${name}`} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );
    }
    return (
        <>
            <form>
                <Box
                    mb="12px"
                    sx={{
                        border: '1px solid #00FFA8',
                        boxSizing: 'border-box',
                        height: '205px',
                        overflow: 'hidden'
                    }}
                >
                    {PreviewImg.length === 0
                        ? images && <img src={images} alt="project" key={images} width="100%" />
                        : PreviewImg && <PreImages imgFiles={PreviewImg} />}
                </Box>
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
                    label="사용 기술"
                    id="ProjectTags"
                    variant="filled"
                    value={tags || ''}
                    onChange={(e) => {
                        const tagsArray = e.target.value.split(',');
                        setTags(tagsArray);
                    }}
                />
                <TextField
                    fullWidth
                    label="개발 기간"
                    id="period"
                    variant="filled"
                    value={period || ''}
                    onChange={(e) => setPeriod(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="연결 링크"
                    id="link"
                    variant="filled"
                    value={link || ''}
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
