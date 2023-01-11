import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import PreImages from '../../../components/Main/project/PreImages';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function PostProject() {
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/maintab/project');
    };

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [period, setPeriod] = useState('');
    const [link, setLink] = useState('');
    const [images, setImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);
    const [users, getUsers] = useState([]);
    const [checked, setChecked] = React.useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('http://localhost:8000/users');
            getUsers(res.data.data.users);
        };
        fetchEvents();
    }, []);

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
            for (let i = 0; i < tags.length; i++) {
                formData.append('tags', tags[i]);
            }
            // for (let i = 0; i < checked.length; i++) {
            //     formData.append('initializeContributors', checked[i]);
            // }
            formData.append('developPeriod', period);
            formData.append('link', link);
            images.map((image) => formData.append('images', image));

            // await axios
            //     .patch(`http://localhost:8000/posts/contributor/${index}`, {
            //         contributors: checked
            //     })
            //     .then((response) => {
            //         console.log(response.status);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });

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
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
        );
    }
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
            <PreImages imgFiles={PreviewImg} />
        </form>
    );
}
