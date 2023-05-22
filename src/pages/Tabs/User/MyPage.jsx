import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEditMemberApi, useUserApi } from '../../../hooks/Member';
import {
    Box,
    Typography,
    ButtonBase,
    IconButton,
    TextField,
    Button,
    Snackbar,
    Alert
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { MemberEditDetailBtn } from '../../../components/Main/member/MemberEditBtn';
import MemberDeleteBtn from '../../../components/Main/member/MemberDeleteBtn';
import styled from '@emotion/styled';

const FormWrapper = styled(Box)`
    & > :not(style) {
        margin: 1;
        width: 25ch;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        text-align: center;
    }

    .image-wrapper {
        width: 150px;
        height: 150px;
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }

    .profile-img {
        border-radius: 100%;
        width: 149px;
        height: 149px;
        object-fit: cover;
    }

    .upload-btn {
        color: primary;
    }

    .form-field {
        margin: 10px;
        width: 80%;
    }

    .submit-btn {
        border-radius: 17px;
        color: #000;
        background-color: #00ffa8;
        font-weight: 600;
        font-size: 11px;
        padding: 2px 14px;
        margin-top: 15px;
    }
`;

export default function MyPage() {
    const [alert, setAlert] = useState(false);
    const [emailAlert, setEmailAlert] = useState(false);
    const [cookies] = useCookies(['id']);
    const id = cookies.id;
    const [user] = useUserApi(id);
    const [newname, setName] = useState('');
    const [newemail, setEmail] = useState('');
    const [newmajor, setMajor] = useState('');
    const [newbio, setBio] = useState('');
    const [newinsta, setInsta] = useState('');
    const [newlinks, setLinks] = useState('');
    const [newskill, setSkill] = useState('');
    const [PreviewImg, setPreviewImg] = useState('');
    const [, setImage] = useState('');
    const [editUserINfo] = useEditMemberApi();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setName(user.username);
                setEmail(user.email);
                setMajor(user.major);
                setBio(user.bio);
                setInsta(user.insta);
                setLinks(user.otherLinks);
                setSkill(user.skills);
                setPreviewImg(user.image);
                setImage(user.image);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserData();
    }, [user]);

    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };

    const uploadImgFile = (event) => {
        const file = event.target.files[0];
        const fileURL = [];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
            fileURL[0] = reader.result;
            setPreviewImg(fileURL[0]);
        };
        reader.readAsDataURL(file);
    };

    const submit = useCallback(async () => {
        if (
            newname === '' ||
            newmajor === '' ||
            newemail === '' ||
            newlinks === '' ||
            newinsta === '' ||
            newbio === ''
        ) {
            // alert('입력을 완료하세요');
            setAlert(true);
        } else if (newemail.match(validEmail) == null) {
            // alert('이메일 형식에 맞춰 입력하세요');
            setEmailAlert(true);
        } else {
            editUserINfo(
                id,
                newname,
                newemail,
                newbio,
                newinsta,
                newlinks,
                newmajor,
                newskill,
                PreviewImg
            );
            navigateToMaintab();
        }
    }, [newname, newemail, newbio, newinsta, newlinks, newmajor, newskill, PreviewImg]);

    return (
        <>
            <FormWrapper component="form" noValidate autoComplete="off" onSubmit={submit}>
                <Typography variant="h6" className="title">
                    My Page
                </Typography>
                <div className="image-wrapper">
                    <ButtonBase>
                        <img src={PreviewImg} alt={newname} className="profile-img" />
                    </ButtonBase>
                </div>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    className="upload-btn"
                >
                    <input
                        hidden
                        name="image"
                        type="file"
                        accept="image/jpg,image/png,image/jpeg,image/gif"
                        onChange={uploadImgFile}
                    />
                    <PhotoCamera />
                </IconButton>
                <TextField
                    id="name"
                    label="이름"
                    variant="standard"
                    value={newname || ''}
                    onChange={(e) => setName(e.target.value)}
                    className="form-field"
                />
                <MemberEditDetailBtn _id={id} className="form-field" />
                <TextField
                    id="major"
                    label="학과"
                    variant="standard"
                    value={newmajor || ''}
                    onChange={(e) => setMajor(e.target.value)}
                    className="form-field"
                />
                <TextField
                    id="email"
                    label="이메일"
                    variant="standard"
                    value={newemail || ''}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-field"
                />
                <TextField
                    id="link"
                    label="Web"
                    variant="standard"
                    value={newlinks || ''}
                    onChange={(e) => setLinks(e.target.value)}
                    className="form-field"
                />
                <TextField
                    id="insta"
                    label="SNS"
                    variant="standard"
                    value={newinsta || ''}
                    onChange={(e) => setInsta(e.target.value)}
                    className="form-field"
                />
                <TextField
                    id="bio"
                    label="한줄소개"
                    variant="standard"
                    value={newbio || ''}
                    onChange={(e) => setBio(e.target.value)}
                    className="form-field"
                />
                <TextField
                    id="skill"
                    label="skill set"
                    variant="standard"
                    value={newskill || ''}
                    onChange={(e) => {
                        const skilArr = e.target.value.split(',');
                        setSkill(skilArr);
                    }}
                    className="form-field"
                />

                <Button
                    variant="contained"
                    onClick={submit}
                    color="background"
                    className="submit-btn"
                >
                    Submit
                </Button>
                <MemberDeleteBtn />
            </FormWrapper>
            <Snackbar open={alert} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    입력을 완료하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={emailAlert} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    이메일 형식에 맞춰 입력하세요.
                </Alert>
            </Snackbar>
        </>
    );
}
