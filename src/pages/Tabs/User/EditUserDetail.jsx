import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function EditUserDetail() {
    const location = useLocation();
    const id = location.pathname.split('/')[3];

    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/users/${id}`);
            console.log('res', res.data.data.user);
            setUser(res.data.data.user);
        };
        fetchEvents();
    }, []);

    const ID = user.userID;
    const pw = user.passwd;

    const [newID, setID] = useState(ID);

    const [newpw, setPw] = useState(pw);

    useEffect(() => {
        setID(ID);
        setPw(pw);
    }, [ID, pw]);

    const navigate = useNavigate();
    const navigateToMember = () => {
        navigate('/maintab/member');
    };
    const navigateToIDpw = () => {
        navigate('/maintab/edituserdetail');
    };
    const submit = useCallback(async () => {
        await axios.patch(`http://localhost:8000/users/${id}`, {
            userID: newID,
            passwd: newpw
        });
        navigateToMember();
        alert('user edit');
    }, []);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' }
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
            <TextField
                id="originalPW"
                label="현재 비밀번호 입력"
                variant="standard"
                // value={|| ''}
                onChange={(e) => setPw(e.target.value)}
            />
            <TextField
                id="newPW"
                label="새 비밀번호 입력"
                variant="standard"
                value={newpw || ''}
                onChange={(e) => setPw(e.target.value)}
            />
            <TextField
                id="newPW2"
                label="새 비밀번호 확인"
                variant="standard"
                value={newpw || ''}
                onChange={(e) => setID(e.target.value)}
            />

            <Button
                variant="contained"
                onClick={submit}
                style={{
                    position: 'absolute',
                    borderRadius: '99px',
                    width: '312px',
                    height: '44px',
                    left: '24px',
                    top: '635px'
                }}
            >
                비밀번호 바꾸기
            </Button>
        </Box>
    );
}