import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStudiesApi } from '../../../hooks/Study';
import { Box, Card, Button, Alert, Snackbar } from '@mui/material';
import dayjs from 'dayjs';
import AttendantInput from '../../../components/Main/study/AttendantInput';
import StudyDateNLocInput from '../../../components/Main/study/StudyDateNLocInput';
import StudyTitleInput from '../../../components/Main/study/StudyTitleInput';
import StudyContentInput from '../../../components/Main/study/StudyContentInput';
import StudyImageInput from '../../../components/Main/study/StudyImageInput';
import StudyTaskInput from '../../../components/Main/study/StudyTaskInput';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    @media (min-width: 1024px) {
        width: 55%;
        min-width: 1000px;
        margin: 60px auto 150px;
    }
`;

const StyledCard = styled(Card)`
    border-radius: 24px;
    padding-bottom: 40px;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 21px;
    margin-top: 20px;
    justify-content: center;
`;

const StyledButton = styled(Button)`
    margin-bottom: 1.5;
    text-transform: none;
`;

export default function PostStudy() {
    const [, , , createStudy, ,] = useStudiesApi();
    const loc = useLocation();

    const GroupId = loc.state.id;

    const navigate = useNavigate();
    const navigateToStudy = () => {
        navigate('/maintab/study');
        window.location.reload();
    };
    const [alertTitle, setAlertTitle] = useState(false);
    const [alertContent, setAlertContent] = useState(false);
    const [alertTaskContent, setAlertTaskContent] = useState(false);
    const [alertTaskName, setAlertTaskName] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');
    const [attendance, setAtd] = useState([]);
    const [Task, setTask] = useState([]);
    const [taskContent, setTaskContent] = useState('');
    const [taskContents, setTaskContents] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskNames, setTaskNames] = useState([]);
    const [images, setImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);
    const [studyTimeStart, setStart] = useState(dayjs());
    const [studyTimeEnd, setEnd] = useState(dayjs());
    const handleClose = (event, reason) => {
        setAlertTitle(false);
        setAlertContent(false);
        setAlertTaskContent(false);
        setAlertTaskName(false);
    };
    const handleChangeStart = (newValue) => {
        setStart(newValue);
    };
    const handleChangeEnd = (newValue) => {
        setEnd(newValue);
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

    const HandleAddTask = () => {
        if (taskContent === '') {
            setAlertTaskContent(true);
        } else if (taskName === '') {
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
            setAlertTitle(true);
        } else if (content === '') {
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
            images.map((image) => formData.append('images', image));

            createStudy(formData, GroupId);
            navigateToStudy();
        }
    };

    return (
        <Wrapper>
            <form encType="multipart/form-data">
                <StyledCard>
                    <Container>
                        <StudyTitleInput setTitle={setTitle} title={title} />
                        <StudyDateNLocInput
                            studyTimeStart={studyTimeStart}
                            handleChangeStart={handleChangeStart}
                            studyTimeEnd={studyTimeEnd}
                            handleChangeEnd={handleChangeEnd}
                            location={location}
                            setLocation={setLocation}
                        />
                        <AttendantInput setAtd={setAtd} attendance={attendance} />
                        <StudyContentInput setContent={setContent} content={content} />
                        <StudyImageInput
                            PreviewImg={PreviewImg}
                            images={images}
                            uploadImgFile={uploadImgFile}
                        />
                        <StudyTaskInput
                            setTask={setTask}
                            setTaskNames={setTaskNames}
                            setTaskContents={setTaskContents}
                            Task={Task}
                            taskNames={taskNames}
                            taskContents={taskContents}
                            HandleAddTask={HandleAddTask}
                            taskContent={taskContent}
                            taskName={taskName}
                            setTaskContent={setTaskContent}
                            setTaskName={setTaskName}
                        />
                        <StyledButton
                            color="primary"
                            variant="contained"
                            size="small"
                            onClick={HandlPostSubmit}
                        >
                            Submit
                        </StyledButton>
                    </Container>
                </StyledCard>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={alertTaskName}
                autoHideDuration={700}
                onClose={handleClose}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    이름을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={alertTaskContent}
                autoHideDuration={700}
                onClose={handleClose}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    과제 내용을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={alertTitle}
                autoHideDuration={700}
                onClose={handleClose}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    제목을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={alertContent}
                autoHideDuration={700}
                onClose={handleClose}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    내용을 입력하세요.
                </Alert>
            </Snackbar>
        </Wrapper>
    );
}
