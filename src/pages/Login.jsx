import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import CreateUserBtn from '../components/Main/member/CreateUserBtn';
import axios from 'axios';
import { TextField, Button, Typography, Alert, Snackbar } from '@mui/material';
import styled from '@emotion/styled';

const BASE_URI = () => {
    if (process.env.REACT_APP_ENV === 'production') return process.env.REACT_APP_PROD_URI;
    else return process.env.REACT_APP_DEV_URI;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 175px);
    margin-top: 80px;

    @media (min-width: 1024px) {
        width: 500px;
        margin: 100px auto 50px;
        border-radius: 25px;
        background-color: #292929;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
    }
`;

const LoginTitle = styled(Typography)`
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 55px;
`;

const TextFieldStyled = styled(TextField)`
    width: 312px;
    height: 40px;
    margin-bottom: ${({ hasBottomMargin }) => (hasBottomMargin ? '70px' : '10px')};
`;

const LoginButton = styled(Button)`
    border-radius: 99px;
    width: 312px;
    height: 48px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 10px;
`;

const LaterLogin = styled.div`
    color: #fff;
    border-bottom: 0.5px solid #c2c2c2;
    font-size: 0.875rem;
`;

export default function Login() {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const navigate = useNavigate();

    const navigateToMainTab = () => {
        navigate('/maintab');
    };
    const loginBtn = async (e) => {
        e.preventDefault();

        await axios
            .post(BASE_URI() + '/auth/login', { userID: ID, passwd: PW })
            .then((userData) => {
                if (userData.data.loginSuccess === true) {
                    setCookie('id', ID);
                    navigateToMainTab();
                }
            })
            .catch((error) => {
                console.log('error', error);
                setIsSnackbarOpen(true);
            });
    };

    const logoutBtn = async () => {
        removeCookie('id');
        authCheck();
        await axios
            .post(BASE_URI() + '/auth/logout')
            .then((userData) => console.log(userData))
            .catch((error) => console.log(error));
        navigateToMainTab();
        setIsSnackbarOpen(false);
    };

    const authCheck = async () => {
        const token = cookies.id;
        try {
            const res = await axios.post(BASE_URI() + '/auth/verify');
            if (res.data.data.userID !== token) logoutBtn();
        } catch (error) {
            console.log('auth check error');
            removeCookie('id');
        }
    };

    useEffect(() => {
        authCheck();
    }, []);

    return (
        <div>
            <Header />
            {cookies.id ? (
                logoutBtn()
            ) : (
                <>
                    <Container>
                        <LoginTitle variant="h6" fontWeight="bold">
                            로그인
                        </LoginTitle>
                        <TextFieldStyled
                            id="demo-helper-text-aligned"
                            label="ID"
                            size="small"
                            onChange={(e) => setID(e.target.value)}
                        />
                        <TextFieldStyled
                            id="demo-helper-text-aligned"
                            label="PW"
                            onChange={(e) => setPW(e.target.value)}
                            size="small"
                            hasBottomMargin
                        />
                        <LoginButton variant="contained" onClick={loginBtn} color="mint">
                            로그인하기
                        </LoginButton>
                        <LaterLogin onClick={navigateToMainTab}>나중에 로그인하기</LaterLogin>
                        <CreateUserBtn />
                    </Container>
                </>
            )}
            <Footer />
            <Snackbar
                open={isSnackbarOpen}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                autoHideDuration={1000}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    로그인에 실패하였습니다. 다시 시도해주세요.
                </Alert>
            </Snackbar>
        </div>
    );
}
