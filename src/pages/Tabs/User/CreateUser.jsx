import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreateUser() {
    const [ID, setID] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [repw, setrePw] = useState('');
    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const navigate = useNavigate();
    const nextBtn = () => {
        if (ID === '' || email === '' || pw === '') {
            alert('입력을 완료하세요');
        } else if (email.match(validEmail) == null) {
            alert('이메일 형식에 맞춰 입력하세요');
        } else if (pw !== repw) {
            alert('동일한 비밀번호가 아닙니다');
        } else {
            navigate('/maintab/createuser2', { state: { id: ID, pw: pw, email: email } });
        }
    };

    return (
        <userForm>
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
                {' '}
                <Typography variant="h6" textAlign={'center'}>
                    회원가입
                </Typography>
                <TextField
                    id="ID"
                    label="아이디 입력"
                    variant="standard"
                    onChange={(e) => setID(e.target.value)}
                />
                <TextField
                    id="email"
                    label="이메일 입력"
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="pw"
                    label="비밀번호 입력"
                    variant="standard"
                    onChange={(e) => setPw(e.target.value)}
                />
                <TextField
                    id="repw"
                    label="비밀번호 확인"
                    variant="standard"
                    onChange={(e) => setrePw(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={nextBtn}
                    style={{
                        position: 'absolute',
                        borderRadius: '99px',
                        width: '312px',
                        height: '44px',
                        left: '24px',
                        top: '635px'
                    }}
                >
                    다음
                </Button>
            </Box>
        </userForm>
    );
}
