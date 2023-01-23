import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStudiesApi } from '../../../hooks/Study';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function EditStudy() {
    const loc = useLocation();
    const state = loc.state;

    const [studies, filterStudies, study, createStudy, updateStudy, deleteStudy] = useStudiesApi();

    const postId = state._id;
    const navigate = useNavigate();
    const navigateToStudy = () => {
        navigate('/maintab/study');
        window.location.reload();
    };
    const [alertTitle, setAlertTitle] = useState(false);
    const [alertContent, setAlertContent] = useState(false);
    const [alertTaskContent, setAlertTaskContent] = useState(false);
    const [alertTaskName, setAlertTaskName] = useState(false);
    const [title, setTitle] = useState(state.title);
    const [content, setContent] = useState(state.content);
    const [location, setLocation] = useState(state.location);
    const [attendance, setAtd] = useState(state.attendance);

    const [taskContent, setTaskContent] = useState('');
    const [taskContents, setTaskContents] = useState(state.taskContents);
    const [taskName, setTaskName] = useState('');
    const [taskNames, setTaskNames] = useState(state.taskNames);
    const [images, setImages] = useState(state.images);
    const [newimages, setnewImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);
    const [studyTimeStart, setStart] = useState(dayjs(state.studyTimeStart));
    const [studyTimeEnd, setEnd] = useState(dayjs(state.studyTimeEnd));
    let initialTask = [];
    for (let i = 0; i < taskContents.length; i++) {
        initialTask.push({ task: taskContents[i], name: taskNames[i] });
    }
    const [Task, setTask] = useState(initialTask);

    const handleChangeStart = (newValue) => {
        setStart(newValue);
    };
    const handleChangeEnd = (newValue) => {
        setEnd(newValue);
    };

    const uploadImgFile = (event) => {
        const fileArr = event.target.files;
        setnewImages(Array.from(fileArr)); // 업로드할 이미지 배열 저장
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

    const HandleAddTask = () => {
        if (taskContent === '') {
            // alert('과제 내용을 입력하세요');
            setAlertTaskContent(true);
        } else if (taskName === '') {
            // alert('이름을 입력하세요');
            setAlertTaskName(true);
        } else {
            setTaskContents([...taskContents, taskContent]);
            setTaskNames([...taskNames, taskName]);
            setTask([...Task, { task: taskContent, name: taskName }]);
            setTaskContent('');
            setTaskName('');
        }
    };

    const HandlPostSubmit = () => {
        if (title === '') {
            // alert('제목을 입력하세요');
            setAlertTitle(true);
        } else if (content === '') {
            // alert('내용을 입력하세요');
            setAlertContent(true);
        } else {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('location', location);
            for (let i = 0; i < attendance.length; i++) {
                formData.append('attendance', attendance[i]);
            }
            for (let i = 0; i < taskContents.length; i++) {
                formData.append('taskContents', taskContents[i]);
            }
            for (let i = 0; i < taskNames.length; i++) {
                formData.append('taskNames', taskNames[i]);
            }
            formData.append('studyTimeStart', studyTimeStart);
            formData.append('studyTimeEnd', studyTimeEnd);
            if (newimages.length > 0) {
                newimages.map((image) => formData.append('images', image));
            }

            updateStudy(formData, postId);
            navigateToStudy();
        }
    };

    function PreImages({ imgFiles }) {
        return (
            <Box
                mt="12px"
                sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    overflowX: 'scroll',
                    alignItems: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxSizing: 'border-box',
                    height: '180px'
                }}
            >
                {imgFiles.map((url) => {
                    return (
                        <Box
                            sx={{
                                flex: '0 0 auto',
                                width: '160px',
                                height: '160px',
                                borderRadius: '5px',
                                overflow: 'hidden',
                                mr: '10px'
                            }}
                            key={url}
                        >
                            <img
                                alt={url}
                                src={url}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    );
                })}
            </Box>
        );
    }

    function TaskAddBtn() {
        return (
            <IconButton color="primary" aria-label="edit" component="label" onClick={HandleAddTask}>
                <AddCircleOutlineIcon fontSize="small" />
            </IconButton>
        );
    }

    return (
        <>
            <form encType="multipart/form-data">
                <Card sx={{ borderRadius: '24px', pb: '40px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0 21px',
                            mt: '20px',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            style={{
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                lineHeight: '21.48px',
                                marginBottom: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            <Box
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem'
                                }}
                            >
                                스터디 제목
                            </Box>
                            <Input
                                fullWidth
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </Box>
                        <div
                            style={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontSize: '0.75rem',
                                lineHeight: '0.9rem',
                                margin: '20px 0',
                                width: '70%'
                            }}
                        >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={2}>
                                    <DateTimePicker
                                        label="스터디 시작 시간"
                                        value={studyTimeStart}
                                        onChange={handleChangeStart}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                size="small"
                                                variant="standard"
                                            />
                                        )}
                                    />
                                    <DateTimePicker
                                        label="스터디 종료 시간"
                                        value={studyTimeEnd}
                                        onChange={handleChangeEnd}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                size="small"
                                                variant="standard"
                                            />
                                        )}
                                    />
                                    <TextField
                                        label="location"
                                        size="small"
                                        fullWidth
                                        variant="standard"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FmdGoodOutlinedIcon
                                                        sx={{
                                                            width: '14px',
                                                            height: '16px',
                                                            margin: '0px 8px 3px 0px'
                                                        }}
                                                    />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </div>

                        <Box mb={'21px'}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    lineHeight: '14.32px',
                                    marginBottom: '10px'
                                }}
                            >
                                <Box
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.5)',
                                        fontWeight: 600,
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    참여자
                                </Box>
                                <Box
                                    sx={{
                                        ml: '12px',
                                        fontSize: '0.563rem',
                                        color: 'rgba(255, 255, 255, 0.5)'
                                    }}
                                >
                                    띄어쓰기 없이 ,로 구분하여 입력해주세요.
                                </Box>
                            </Box>
                            <Input
                                multiline
                                fullWidth
                                onChange={(e) => {
                                    const tagsArray = e.target.value.split(',');
                                    setAtd(tagsArray);
                                }}
                                value={attendance}
                            />
                        </Box>
                        <Box mb={'18px'}>
                            <Box
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                    mb: '11px'
                                }}
                            >
                                스터디 내용
                            </Box>
                            <Box
                                sx={{
                                    fontSize: '0.75rem',
                                    mb: '11px'
                                }}
                            >
                                <Input
                                    multiline
                                    fullWidth
                                    onChange={(e) => setContent(e.target.value)}
                                    value={content}
                                />
                            </Box>
                        </Box>
                        <Box mb={'18px'}>
                            <Box
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                    mb: '11px'
                                }}
                            >
                                스터디 자료
                            </Box>
                            {PreviewImg.length !== 0 ? (
                                <PreImages imgFiles={PreviewImg} />
                            ) : (
                                <PreImages imgFiles={images} />
                            )}
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                            >
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
                        </Box>
                        <Box mb={'50px'}>
                            <Box
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem'
                                }}
                            >
                                과제
                            </Box>
                            <Stack
                                direction="column"
                                spacing={0.5}
                                sx={{ justifyContent: 'left', flexWrap: 'wrap' }}
                            >
                                {Task &&
                                    Task.map((item) => (
                                        <div style={{ margin: '10px 0' }} key={item.task}>
                                            <Box
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: '0.875rem',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {item.task}
                                                <BackspaceOutlinedIcon
                                                    fontSize="0.6rem"
                                                    sx={{ ml: '10px' }}
                                                    onClick={() => {
                                                        setTask(
                                                            Task.filter((i) => i.task !== item.task)
                                                        );
                                                        setTaskNames(
                                                            taskNames.filter((i) => i !== item.name)
                                                        );
                                                        setTaskContents(
                                                            taskContents.filter(
                                                                (i) => i !== item.task
                                                            )
                                                        );
                                                    }}
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: '0.75rem'
                                                }}
                                            >
                                                {item.name}
                                            </Box>
                                        </div>
                                    ))}
                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <TaskAddBtn />
                                    <div style={{ flexDirection: 'column' }}>
                                        <Input
                                            multiline
                                            fullWidth
                                            placeholder="과제 내용"
                                            onChange={(e) => setTaskContent(e.target.value)}
                                            value={taskContent}
                                        />
                                        <Input
                                            placeholder="이름"
                                            onChange={(e) => setTaskName(e.target.value)}
                                            value={taskName}
                                        />
                                    </div>
                                </div>
                            </Stack>
                        </Box>
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            sx={{ mb: 1.5, textTransform: 'none' }}
                            onClick={HandlPostSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                </Card>
            </form>
            <Snackbar open={alertTaskName} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    이름을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={alertTaskContent} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    과제 내용을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={alertTitle} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    제목을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={alertContent} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    내용을 입력하세요.
                </Alert>
            </Snackbar>
        </>
    );
}
