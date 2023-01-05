import * as React from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

export default function CreateUser3() {
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [otherLinks, setOtherLinks] = useState([]);
    const navigate = useNavigate();

    const location = useLocation();
    const ID = location.state.id;
    const pw = location.state.pw;
    const email = location.state.email;
    const name = location.state.name;
    const engName = location.state.engName;
    const track = location.state.track;
    const image = location.state.image;
    const major = location.state.major;
    const member = { ID, name, engName, email, pw, bio, track, insta, otherLinks, image, major };
    const submit = useCallback(async () => {
        if (bio === '' || insta === '') {
            alert('입력을 완료하세요');
        } else {
            const formData = new FormData();
            formData.append('userID', ID);
            formData.append('username', name);
            formData.append('usernameEng', engName);
            formData.append('email', email);
            formData.append('passwd', pw);
            formData.append('bio', bio);
            formData.append('track', track);
            formData.append('insta', insta);
            formData.append('otherLinks', otherLinks);
            formData.append('image', image);
            formData.append('major', major);
            await axios
                .post('http://localhost:8000/users', formData)
                .then((response) => console.log(response))
                .catch((error) => console.log(error));

            navigate('/maintab/usercreated', { state: { name: name, image: image, id: ID } });
        }
    }, [member]);
    const backBtn = () => {
        navigate('/maintab/createuser2');
    };
    return (
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
                회원가입
            </Typography>
            <div>
                {/* <IconButton
                    color="primary"
                    aria-label="backBtn"
                    component="label"
                    onClick={backBtn}
                >
                    <ArrowBackIcon />
                </IconButton> */}
            </div>
            <TextField
                id="bio"
                label="한줄 소개"
                variant="standard"
                onChange={(e) => setBio(e.target.value)}
            />

            <TextField
                id="insta"
                label="인스타"
                variant="standard"
                onChange={(e) => setInsta(e.target.value)}
            />
            <TextField
                id="link1"
                label="기타 링크"
                variant="standard"
                onChange={(e) => setOtherLinks([e.target.value])}
            />

            <Button
                variant="contained"
                onClick={submit}
                style={{
                    position: 'absolute',
                    borderRadius: '99px',
                    width: '312px',
                    height: '44px',
                    left: '24px',
                    top: '635px'
                }}
            >
                가입 완료
            </Button>
        </Box>
    );
}
