import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCookies } from 'react-cookie';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function MyPageDetail() {
    const [cookies, , removeCookie] = useCookies(['id']);
    const id = cookies.id;
    const [editAlert, setEditAlert] = useState(false);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const navigateToMainTab = () => {
        navigate('/maintab');
    };
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`https://api.skku.dev/users/${id}`);

            setUser(res.data.data.user);
        };
        fetchEvents();
    }, []);
    const logoutBtn = async () => {
        setUser('');
        removeCookie('id');

        await axios
            .post('https://api.skku.dev/auth/logout')
            .then((userData) => console.log(userData))
            .catch((error) => console.log(error));

        navigateToMainTab();
    };

    const ID = user.userID;
    const pw = user.passwd;

    const [newID, setID] = useState(ID);

    const [newpw, setPw] = useState('');
    const [newrepw, setrePw] = useState('');

    useEffect(() => {
        setID(ID);
        setPw(pw);
    }, [ID, pw]);

    const navigateToMember = () => {
        navigate('/maintab/member');
    };
    // const navigateToIDpw = () => {
    //     navigate('/maintab/edituserdetail');
    // };
    const [checker, setChecker] = useState(true);
    const checkPw = () => {
        if (newpw !== newrepw) {
            setChecker(false);
        }
    };

    const submit = useCallback(async () => {
        if (checker === true) {
            await axios
                .patch(`https://api.skku.dev/users/${id}`, {
                    userID: newID,
                    passwd: newpw
                })
                .then((res) => console.log(res));

            setEditAlert(true);
            navigateToMember();
            logoutBtn();
        }
    }, [newID]);

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                    overflow: 'hidden'
                }}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h6" textAlign={'center'}>
                    ID/비밀번호 수정
                </Typography>
                <TextField
                    id="id"
                    label="ID"
                    variant="standard"
                    value={newID || ''}
                    onChange={(e) => setID(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={submit}
                    color="background"
                    style={{
                        borderRadius: 17,
                        border: '1px solid #00ffa8',
                        color: '#00ffa8',
                        width: '110px',
                        height: '21px',
                        fontSize: '11px',
                        padding: '4px 14px',
                        gap: '10px'
                    }}
                >
                    ID 수정
                </Button>
                {/* <TextField
                id="originalPW"
                label="현재 비밀번호 입력"
                variant="standard"
                // value={|| ''}
                onChange={(e) => setPw(e.target.value)}
            /> */}
                <TextField
                    id="newPW"
                    label="새 비밀번호 입력"
                    variant="standard"
                    // value={newpw || ''}
                    onChange={(e) => setPw(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="newPW2"
                    label="새 비밀번호 확인"
                    variant="standard"
                    // value={newpw || ''}
                    onChange={(e) => {
                        setrePw(e.target.value);
                        checkPw();
                    }}
                />
                <Button
                    variant="contained"
                    onClick={submit}
                    style={{
                        borderRadius: '99px',
                        width: '312px',
                        height: '44px'
                    }}
                >
                    비밀번호 바꾸기
                </Button>
            </Box>
            <Snackbar open={editAlert} autoHideDuration={1000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    멤버 아이디가 수정되었습니다.
                </Alert>
            </Snackbar>
        </>
    );
}
