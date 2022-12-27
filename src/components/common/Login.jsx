import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../context/UserContext';
import skkud from '../../assets/SKKUD_green.jpeg';
import Header from './Header';

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
                    <div style={{ margin: '30px' }}>{cookies.id}님 안녕하세요</div>
                    <Button variant="contained" onClick={logoutBtn}>
                        Logout
                    </Button>
                </div>
            ) : (
                <>
                    <Box
                        sx={{
                            height: '700px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '& > :not(style)': { m: 1 }
                        }}
                    >
                        <img src={skkud} alt="SKKUD" />
                        <TextField
                            id="demo-helper-text-aligned"
                            label="ID"
                            onChange={(e) => setID(e.target.value)}
                        />

                        <TextField
                            id="demo-helper-text-aligned"
                            label="PW"
                            onChange={(e) => setPW(e.target.value)}
                        />
                        <Button variant="contained" onClick={loginBtn}>
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
