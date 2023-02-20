import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { MemberEditDetailBtn } from '../../../components/Main/member/MemberEditBtn';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MemberDeleteBtn from '../../../components/Main/member/MemberDeleteBtn';
import { ButtonBase } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function MyPage() {
    const [alert, setAlert] = useState(false);
    const [emailAlert, setEmailAlert] = useState(false);
    const [cookies] = useCookies(['id']);
    const id = cookies.id;
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`https://api.skku.dev/users/${id}`);

            setUser(res.data.data.user);
            setPreviewImg(res.data.data.user.image);
        };
        fetchEvents();
    }, []);
    const major = user.major;
    const name = user.username;
    const bio = user.bio;
    const insta = user.insta;
    const otherLinks = user.otherLinks;
    const { email } = user;
    const skill = user.skills;
    const image = user.image;
    const [newname, setName] = useState(name);
    const [newemail, setEmail] = useState(email);
    const [newmajor, setMajor] = useState(major);
    const [newbio, setBio] = useState(bio);
    const [, setImage] = useState(image);
    const [newinsta, setInsta] = useState(insta);
    const [newlinks, setLinks] = useState(otherLinks);
    const [PreviewImg, setPreviewImg] = useState('');
    const [newskill, setSkill] = useState(skill);

    useEffect(() => {
        setName(name);
        setEmail(email);
        setMajor(major);
        setBio(bio);
        setInsta(insta);
        setLinks(otherLinks);
        setSkill(skill);

        if (newskill === []) {
            setSkill('skill set을 입력하세요.');
        }
    }, [name, email, bio, insta, otherLinks, major, skill]);

    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const navigate = useNavigate();
    const navigateToMember = () => {
        navigate('/maintab/member');
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
            await axios
                .patch(`https://api.skku.dev/users/${id}`, {
                    username: newname,
                    email: newemail,
                    major: newmajor,
                    otherLinks: newlinks,
                    insta: newinsta,
                    bio: newbio,
                    skills: newskill,
                    image: PreviewImg
                })
                .catch((error) => console.log(error));
            navigateToMember();
        }
    }, [newname, newemail, newbio, newinsta, newlinks, newmajor, newskill, PreviewImg]);

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="h6" textAlign={'center'}>
                    My Page
                </Typography>
                <div
                    style={{
                        width: '150px',
                        height: '150px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '100%'
                    }}
                >
                    <ButtonBase>
                        <img
                            src={PreviewImg}
                            alt={name}
                            style={{
                                borderRadius: '100%',
                                width: '149px',
                                height: '149px',
                                objectFit: 'cover'
                            }}
                        />{' '}
                    </ButtonBase>
                </div>
                <IconButton color="primary" aria-label="upload picture" component="label">
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
                />
                <MemberEditDetailBtn _id={id} />

                <TextField
                    id="major"
                    label="학과"
                    variant="standard"
                    value={newmajor || ''}
                    onChange={(e) => setMajor(e.target.value)}
                />
                <TextField
                    id="email"
                    label="이메일"
                    variant="standard"
                    value={newemail || ''}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="link"
                    label="Web"
                    variant="standard"
                    value={newlinks || ''}
                    onChange={(e) => setLinks(e.target.value)}
                />
                <TextField
                    id="insta"
                    label="SNS"
                    variant="standard"
                    value={newinsta || ''}
                    onChange={(e) => setInsta(e.target.value)}
                />
                <TextField
                    id="bio"
                    label="한줄소개"
                    variant="standard"
                    value={newbio || ''}
                    onChange={(e) => setBio(e.target.value)}
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
                />

                <Button
                    variant="contained"
                    onClick={submit}
                    color="background"
                    style={{
                        borderRadius: 17,
                        border: '1px solid #00ffa8',
                        color: '#00ffa8',
                        width: '90px',
                        height: '21px',
                        fontSize: '11px',
                        padding: '4px 14px',
                        gap: '10px'
                    }}
                >
                    회원정보 수정
                </Button>
                <MemberDeleteBtn />
            </Box>
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
