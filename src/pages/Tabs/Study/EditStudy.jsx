import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useStudiesApi, useStudyDetailApi } from '../../../hooks/Study';
import { Box, Card, Button, Alert, Snackbar } from '@mui/material';
import AttendantInput from '../../../components/Main/study/AttendantInput';
import StudyDateNLocInput from '../../../components/Main/study/StudyDateNLocInput';
import StudyTitleInput from '../../../components/Main/study/StudyTitleInput';
import StudyContentInput from '../../../components/Main/study/StudyContentInput';
import StudyImageInput from '../../../components/Main/study/StudyImageInput';
import StudyTaskInput from '../../../components/Main/study/StudyTaskInput';
import styled from '@emotion/styled';

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

export default function EditStudy() {
    const [, , , , updateStudy] = useStudiesApi();

    // :id 파라미터
    const { index } = useParams();
    const StudyDetail = useStudyDetailApi();
    const navigate = useNavigate();
    const navigateToStudy = () => {
        navigate('/maintab/study');
        window.location.reload();
    };
    const [alertTitle, setAlertTitle] = useState(false);
    const [alertContent, setAlertContent] = useState(false);
    const [alertTaskContent, setAlertTaskContent] = useState(false);
    const [alertTaskName, setAlertTaskName] = useState(false);

    const [title, setTitle] = StudyDetail[0];
    const [content, setContent] = StudyDetail[1];
    const [location, setLocation] = StudyDetail[2];
    const [attendance, setAtd] = StudyDetail[3];
    const [taskContents, setTaskContents] = StudyDetail[4];
    const [taskNames, setTaskNames] = StudyDetail[5];
    const [images, setImages] = StudyDetail[6]; // eslint-disable-line no-unused-vars
    const [studyTimeStart, setStart] = StudyDetail[7];
    const [studyTimeEnd, setEnd] = StudyDetail[8];
    const [taskContent, setTaskContent] = useState('');
    const [taskName, setTaskName] = useState('');
    const [newimages, setnewImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);
    let initialTask = [];
    const [Task, setTask] = useState([]);
    useEffect(() => {
        for (let i = 0; i < taskContents.length; i++) {
            initialTask.push({ task: taskContents[i], name: taskNames[i] });
        }
        setTask(initialTask);
        console.log(taskContents);
    }, [taskContents]);

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

            updateStudy(formData, index);
            navigateToStudy();
        }
    };

    return (
        <>
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
                autoHideDuration={1000}
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
                autoHideDuration={1000}
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
                autoHideDuration={1000}
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
                autoHideDuration={1000}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    내용을 입력하세요.
                </Alert>
            </Snackbar>
        </>
    );
}
