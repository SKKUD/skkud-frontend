import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';
import { UserContext } from '../context/UserContext';
import skkud from '../assets/SKKUD_LOGO.png';
import avatar_f from '../assets/avatar_f.png';
import Header from '../components/common/Header';

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const navigate = useNavigate();
    const navigateToMainTab = () => {
        navigate('/maintab');
    };

    const loginBtn = async (e) => {
        console.log('login bnt');
        e.preventDefault();

        await axios
            .post('http://localhost:8000/auth/login', { userID: ID, passwd: PW })
            .then((userData) => {
                console.log(userData);
                console.log(user);
                if (userData.data.loginSuccess === true) {
                    console.log('login success');
                    setUser(ID);
                    setCookie('id', ID);
                    navigateToMainTab();
                } else if (userData.data.message === '비밀번호가 틀렸습니다.') {
                    alert('비밀번호가 틀렸습니다.');
                } else {
                    alert('아이디에 해당하는 유저 정보가 없습니다.');
                }
            })
            .catch((error) => console.log(error));
    };

    const logoutBtn = async () => {
        setUser('');
        removeCookie('id');
        console.log('remove cookies', cookies);
        await axios
            .post('http://localhost:8000/auth/logout')
            .then((userData) => console.log(userData))
            .catch((error) => console.log(error));
    };

    const authCheck = () => {
        console.log('cookies', cookies.id);

        const token = cookies.id;
        axios
            .post('http://localhost:8000/auth/verify')
            .then((res) => {
                console.log(res);
                console.log('id', res.data.data.userID);
                if (res.data.data.userID !== token) {
                    alert('세션이 만료되었습니다.');
                    logoutBtn();
                } else {
                    console.log('login 유지');
                }
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        authCheck();
        console.log('user', ID);
        console.log('cookies', cookies);
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <Header />
                    <div
                        style={{
                            marginTop: '-70px',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
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
                            <img
                                src={avatar_f}
                                alt="avatar"
                                style={{ width: '149px', marginTop: '-30px' }}
                            />
                        </div>
                        <div
                            style={{
                                marginTop: '40px',
                                marginBottom: '40px',
                                fontSize: '1.25rem',
                                fontWeight: 400
                            }}
                        >
                            {cookies.id}님, 안녕하세요
                        </div>
                        <Button
                            variant="contained"
                            onClick={logoutBtn}
                            color="mint"
                            sx={{
                                borderRadius: '20px',
                                width: '120px',
                                height: '40px',
                                fontWeight: 500,
                                fontSize: '1.12rem'
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    <Box
                        sx={{
                            height: '100vh',
                            marginTop: '-80px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '& > :not(style)': { m: 1 }
                        }}
                    >
                        <img
                            src={skkud}
                            alt="SKKUD"
                            style={{ width: '149px', marginBottom: '127px' }}
                        />
                        <TextField
                            id="demo-helper-text-aligned"
                            label="ID"
                            onChange={(e) => setID(e.target.value)}
                            size="small"
                        />

                        <TextField
                            id="demo-helper-text-aligned"
                            label="PW"
                            onChange={(e) => setPW(e.target.value)}
                            size="small"
                            sx={{ paddingBottom: '100px' }}
                        />
                        <Button
                            variant="contained"
                            onClick={loginBtn}
                            color="mint"
                            sx={{
                                borderRadius: '20px',
                                width: '120px',
                                height: '40px',
                                fontWeight: 500,
                                fontSize: '1.12rem'
                            }}
                        >
                            Login
                        </Button>
                        <div style={{ textDecoration: 'underline' }} onClick={navigateToMainTab}>
                            나중에 로그인하기
                        </div>
                    </Box>
                </>
            )}
        </div>
    );
}
