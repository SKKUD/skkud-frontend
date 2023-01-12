import * as React from 'react';
import Footer from '../components/common/Footer';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCookies } from 'react-cookie';
import { UserContext } from '../context/UserContext';
import skkud from '../assets/SKKUD_LOGO.png';
import avatar_f from '../assets/avatar_f.png';
import Header from '../components/common/Header';
import CreateUserBtn from '../components/Main/member/CreateUserBtn';

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const navigate = useNavigate();
    const navigateToMainTab = () => {
        navigate('/maintab');
    };
    const [PreviewImg, setPreviewImg] = useState('');
    const loginBtn = async (e) => {
        e.preventDefault();

        await axios
            .post('http://localhost:8000/auth/login', { userID: ID, passwd: PW })
            .then((userData) => {
                if (userData.data.loginSuccess === true) {
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
        // window.location.reload();
    };

    if (cookies.id) {
        useEffect(() => {
            const fetchEvents = async () => {
                const res = await axios.get(`http://localhost:8000/users/${cookies.id}`);
                setPreviewImg(res.data.data.user.image);
            };
            fetchEvents();
            console.log('cookied id', cookies.id);
        }, []);
    }

    const logoutBtn = async () => {
        setUser('');
        removeCookie('id');
        // authCheck();
        await axios
            .post('http://localhost:8000/auth/logout')
            .then((userData) => console.log(userData))
            .catch((error) => console.log(error));

        navigateToMainTab();
    };
    console.log('cookies x_auth', cookies.x_auth);
    const authCheck = () => {
        const token = cookies.id;
        axios
            .post('http://localhost:8000/auth/verify')
            .then((res) => {
                console.log('authcheck', res);
                if (res.data.data.userID !== token) {
                    // alert('세션이 만료되었습니다.');
                    logoutBtn();
                } else {
                }
                // if (cookies.x_auth !== 'a') {
                //     console.log(' verify');
                //     logoutBtn();
                // }
            })
            .catch((error) => {
                console.log(error);
                removeCookie('id');
            });
    };
    useEffect(() => {
        authCheck();
    }, []);

    return (
        <div>
            <Header />
            {cookies.id ? (
                <div>
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
                                src={PreviewImg}
                                alt="avatar"
                                style={{ borderRadius: '100%', width: '149px', height: '149px' }}
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
                        {/* <img
                            src={skkud}
                            alt="SKKUD"
                            style={{ width: '149px', marginBottom: '127px' }}
                        /> */}
                        <Typography variant="h7" fontWeight="bold" style={{ marginTop: '50px' }}>
                            로그인
                        </Typography>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="ID"
                            size="small"
                            onChange={(e) => setID(e.target.value)}
                            style={{ width: '312px', height: '40px', paddingBottom: '20px' }}
                        />

                        <TextField
                            id="demo-helper-text-aligned"
                            label="PW"
                            onChange={(e) => setPW(e.target.value)}
                            size="small"
                            style={{ width: '312px', height: '40px', paddingBottom: '100px' }}
                        />
                        <Button
                            variant="contained"
                            onClick={loginBtn}
                            color="mint"
                            sx={{
                                borderRadius: '99px',
                                width: '312px',
                                height: '48px',
                                fontWeight: 500,
                                fontSize: '1.12rem'
                            }}
                        >
                            로그인하기
                        </Button>
                        <div style={{ textDecoration: 'underline' }} onClick={navigateToMainTab}>
                            나중에 로그인하기
                        </div>

                        <CreateUserBtn />
                    </Box>
                </>
            )}
            <Footer />
        </div>
    );
}
