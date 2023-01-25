import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function CreateUser() {
    const [alert, setAlert] = useState(false);
    const [emailAlert, setEmailAlert] = useState(false);
    const [pwAlert, setPwAlert] = useState(false);
    const [ID, setID] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [repw, setrePw] = useState('');
    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const navigate = useNavigate();
    const nextBtn = () => {
        if (ID === '' || email === '' || pw === '') {
            // alert('입력을 완료하세요');
            setAlert(true);
        } else if (email.match(validEmail) == null) {
            // alert('이메일 형식에 맞춰 입력하세요');
            setEmailAlert(true);
        } else if (pw !== repw) {
            // alert('동일한 비밀번호가 아닙니다');
            setPwAlert(true);
        } else {
            navigate('/maintab/member/createuser2', { state: { id: ID, pw: pw, email: email } });
        }
    };

    return (
        <>
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
                    <Typography
                        variant="h6"
                        textAlign={'center'}
                        style={{ fontWeight: 700, fontSize: '1rem' }}
                    >
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
                            display: 'flex',
                            borderRadius: '99px',
                            width: '312px',
                            height: '44px',
                            marginTop: '150px'

                            // left: '24px',
                            // top: '635px'
                        }}
                    >
                        다음
                    </Button>
                </Box>
            </userForm>
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
            <Snackbar open={pwAlert} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    동일한 비밀번호가 아닙니다.
                </Alert>
            </Snackbar>
        </>
    );
}
