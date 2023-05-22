import * as React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, IconButton, Snackbar, TextField, Alert } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import PreImages from '../../../components/Main/project/PreImages';
import ContributorList from '../../../components/Main/project/ContributorList';
import { useProjectPostDetailApi, useProjectEditApi } from '../../../hooks/Project';
import { useUsersApi } from '../../../hooks/Member';
import styled from '@emotion/styled';

const ImgWrap = styled(Box)`
    margin-bottom: 12px;
    border: 1px solid #00ffa8;
    box-sizing: border-box;
    height: 205px;
    overflow: hidden;
`;
const ButtonWrap = styled(Box)`
    display: flex;
    margin-top: 12px;
    align-content: center;
    justify-content: space-between;
`;

export default function EditProject() {
    const [editProjectPost] = useProjectEditApi();
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
    const [addContributors, setAddContributors] = useState([]);
    const [deleteContributors, setDeleteContributors] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);
    const [users] = useUsersApi();

    const handleClose = () => {
        setAlertContent(false);
        setAlertTitle(false);
        setAlertPeriod(false);
    };

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
            formData.append('addContributors', addContributors);
            formData.append('deleteContributors', deleteContributors);

            editProjectPost(index, formData);
        }
    };

    function CheckboxMemberList() {
        const handleToggle = (id) => () => {
            const currentIndex = checked.indexOf(id);
            const newChecked = [...checked];
            const newAddContributors = [...addContributors];
            const newDeleteContributors = [...deleteContributors];

            if (currentIndex === -1) {
                newChecked.push(id);
                newAddContributors.push(id);
                const deleteIndex = newDeleteContributors.indexOf(id);
                if (deleteIndex !== -1) {
                    newDeleteContributors.splice(deleteIndex, 1);
                }
            } else {
                newChecked.splice(currentIndex, 1);
                newDeleteContributors.push(id);
                const addIndex = newAddContributors.indexOf(id);
                if (addIndex !== -1) {
                    newAddContributors.splice(addIndex, 1);
                }
            }

            setChecked(newChecked);
            setAddContributors(newAddContributors);
            setDeleteContributors(newDeleteContributors);
        };
        return <ContributorList users={users} handleToggle={handleToggle} checked={checked} />;
    }

    return (
        <>
            <form>
                <ImgWrap>
                    {PreviewImg.length === 0
                        ? images && <img src={images} alt="project" key={images} width="100%" />
                        : PreviewImg && <PreImages imgFiles={PreviewImg} />}
                </ImgWrap>
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
                <ButtonWrap>
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
                </ButtonWrap>
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
