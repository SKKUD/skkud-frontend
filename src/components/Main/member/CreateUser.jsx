import * as React from 'react';
import { useState, useContext } from 'react';
import { Typography, Box, TextField, Button, Alert, Snackbar } from '@mui/material';
import { PageContext } from '../../../pages/SignUp';
import styled from '@emotion/styled';

const FormContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;

    & > div {
        margin: 1rem;
        width: 30ch;
    }
`;

const Title = styled(Typography)`
    font-weight: 700;
`;

const StyledButton = styled(Button)`
    display: flex;
    border-radius: 99px;
    width: 30ch;
    height: 44px;
    margin-top: 100px;
`;

export default function CreateUser() {
    const { changePage } = useContext(PageContext);

    const [alert, setAlert] = useState(false);
    const [emailAlert, setEmailAlert] = useState(false);
    const [pwAlert, setPwAlert] = useState(false);
    const [ID, setID] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [repw, setrePw] = useState('');
    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const handleClose = (event, reason) => {
        setAlert(false);
        setEmailAlert(false);
        setPwAlert(false);
    };
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
            changePage({ p: 2, state: { id: ID, pw: pw, email: email } });
        }
    };

    return (
        <>
            <form>
                <FormContainer component="form" noValidate autoComplete="off">
                    {' '}
                    <Title variant="h6" textAlign={'center'}>
                        회원가입
                    </Title>
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
                        type="password"
                        variant="standard"
                        onChange={(e) => setPw(e.target.value)}
                    />
                    <TextField
                        id="repw"
                        label="비밀번호 확인"
                        type="password"
                        variant="standard"
                        onChange={(e) => setrePw(e.target.value)}
                    />
                    <StyledButton variant="contained" onClick={nextBtn}>
                        다음
                    </StyledButton>
                </FormContainer>
            </form>
            <Snackbar open={alert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    입력을 완료하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={emailAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    이메일 형식에 맞춰 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={pwAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    동일한 비밀번호가 아닙니다.
                </Alert>
            </Snackbar>
        </>
    );
}
