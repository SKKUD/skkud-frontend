import * as React from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function CreateUser3() {
    const [alert, setAlert] = useState(false);
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
            // alert('입력을 완료하세요');
            setAlert(true);
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
                .post('http://3.38.103.20:8000/users', formData)
                .then((response) => console.log(response))
                .catch((error) => console.log(error));

            navigate('/maintab/member/usercreated', {
                state: { name: name, image: image, id: ID }
            });
        }
    }, [member]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '300px' }
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
                <Typography
                    variant="h6"
                    textAlign={'center'}
                    style={{ fontWeight: 700, fontSize: '1rem' }}
                >
                    회원가입
                </Typography>

                <Typography style={{ fontWeight: '700', fontSize: '0.75rem' }}>
                    1. 본인을 소개할 수 있는 sns 링크를 첨부해주세요. <br /> (인스타그램, 페이스북
                    등)
                </Typography>
                <TextField
                    id="insta"
                    label="인스타"
                    variant="standard"
                    onChange={(e) => setInsta(e.target.value)}
                />

                <Typography style={{ fontWeight: '700', fontSize: '0.75rem' }}>
                    2.본인을 소개할 수 있는 기타 링크를 첨부해주세요. <br /> (Figma, Github, GitLab,
                    Behance 등)
                </Typography>

                <TextField
                    id="link1"
                    label="기타 링크"
                    variant="standard"
                    onChange={(e) => setOtherLinks([e.target.value])}
                />
                <Typography style={{ fontWeight: '700', fontSize: '0.75rem' }}>
                    3. 20자 내로 본인을 소개해주세요. <br /> (예시:스꾸디 신입 김OO)
                </Typography>
                <TextField
                    id="bio"
                    label="한줄 소개"
                    variant="standard"
                    onChange={(e) => setBio(e.target.value)}
                />

                <Button
                    variant="contained"
                    onClick={submit}
                    style={{
                        display: 'flex',
                        borderRadius: '99px',
                        width: '312px',
                        height: '44px',
                        marginTop: '58px'
                    }}
                >
                    가입 완료
                </Button>
            </Box>
            <Snackbar open={alert} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    입력을 완료하세요.
                </Alert>
            </Snackbar>
        </div>
    );
}
