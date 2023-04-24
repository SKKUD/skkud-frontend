import * as React from 'react';
import { useState, useCallback, useContext } from 'react';
import { Box, TextField, Typography, Button, Alert, Snackbar } from '@mui/material';
import { PageContext } from '../../../pages/SignUp';
import { useMemberCreateApi } from '../../../hooks/Member';

export default function CreateUser3() {
    const { page, changePage } = useContext(PageContext);
    const [postMemberdata] = useMemberCreateApi();
    const [alert, setAlert] = useState(false);
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [otherLinks, setOtherLinks] = useState([]);

    const handleClose = () => {
        setAlert(false);
    };

    const { id, pw, name, engName, email, track, image, major } = page.state;

    const submit = useCallback(async () => {
        if (bio === '' || insta === '') {
            setAlert(true);
        } else {
            const formData = new FormData();
            formData.append('userID', id);
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

            postMemberdata(formData);
            changePage({
                p: 4,
                state: { name: name }
            });
        }
    }, [insta, bio, otherLinks]);

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
                    style={{ fontWeight: 700, fontSize: '1rem', margin: '30px' }}
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

                <Typography style={{ fontWeight: '700', fontSize: '0.75rem', marginTop: '30px' }}>
                    2.본인을 소개할 수 있는 기타 링크를 첨부해주세요. <br /> (Figma, Github, GitLab,
                    Behance 등)
                </Typography>

                <TextField
                    id="link1"
                    label="기타 링크"
                    variant="standard"
                    onChange={(e) => setOtherLinks([e.target.value])}
                />
                <Typography style={{ fontWeight: '700', fontSize: '0.75rem', marginTop: '30px' }}>
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
                        width: '30ch',
                        height: '44px',
                        marginTop: '58px'
                    }}
                >
                    가입 완료
                </Button>
            </Box>
            <Snackbar open={alert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    입력을 완료하세요.
                </Alert>
            </Snackbar>
        </div>
    );
}
