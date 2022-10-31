import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditUser() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/users/${id}`);

            setUser(res.data.data.user);
        };
        fetchEvents();
    }, []);

    const ID = user.userID;
    const name = user.username;
    const engName = user.usernameEng;
    const pw = user.passwd;
    const { email } = user;

    const [newID, setID] = useState(ID);
    const [newname, setName] = useState(name);
    const [newengName, setEngName] = useState(engName);
    const [newemail, setEmail] = useState(email);
    const [newpw, setPw] = useState(pw);
    useEffect(() => {
        setID(ID);
        setName(name);
        setEngName(engName);
        setEmail(email);
        setPw(pw);
    }, [ID, name, engName, email, pw]);
    const newMember = { newID, newname, newengName, newemail, newpw };
    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const navigate = useNavigate();
    const navigateToMember = () => {
        navigate('/member');
    };
    const submit = useCallback(async () => {
        console.log('newmember', newMember);
        if (ID === '' || name === '' || engName === '' || email === '' || pw === '') {
            alert('입력을 완료하세요');
        } else if (email.match(validEmail) == null) {
            alert('이메일 형식에 맞춰 입력하세요');
        } else {
            await axios
                .patch(`http://localhost:8000/users/${id}`, {
                    userID: newMember.newID,
                    username: newMember.newname,
                    usernameEng: newMember.newengName,
                    email: newMember.newemail,
                    passwd: newMember.newpw
                })
                .then((response) => console.log('edit 성공?', response));
            navigateToMember();
            alert('user edit');
        }
    }, [newMember]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="ID"
                label="ID"
                variant="outlined"
                value={newID || ''}
                onChange={(e) => setID(e.target.value)}
            />
            <TextField
                id="name"
                label="name"
                variant="outlined"
                value={newname || ''}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                id="engName"
                label="engName"
                variant="outlined"
                multiline
                value={newengName || ''}
                onChange={(e) => setEngName(e.target.value)}
            />
            <TextField
                id="email"
                label="email"
                value={newemail || ''}
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="pw"
                label="pw"
                value={newpw || ''}
                variant="outlined"
                onChange={(e) => setPw(e.target.value)}
            />

            <Button variant="contained" onClick={submit}>
                Submit
            </Button>
        </Box>
    );
}
