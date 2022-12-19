import * as React from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CreateUser() {
    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [engName, setEngName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [bio, setBio] = useState('');
    const [track, setTrack] = useState('');
    const [insta, setInsta] = useState('');
    const [otherLinks, setOtherLinks] = useState([]);
    const member = { ID, name, engName, email, pw, bio, track, insta, otherLinks };
    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const navigate = useNavigate();
    const navigateToMember = () => {
        navigate('/member');
    };
    const submit = useCallback(async () => {
        console.log(member);
        if (
            ID === '' ||
            name === '' ||
            engName === '' ||
            email === '' ||
            pw === '' ||
            bio === '' ||
            track === '' ||
            insta === ''
        ) {
            alert('입력을 완료하세요');
        } else if (email.match(validEmail) == null) {
            alert('이메일 형식에 맞춰 입력하세요');
        } else {
            await axios
                .post('http://localhost:8000/users', {
                    userID: member.ID,
                    username: member.name,
                    usernameEng: member.engName,
                    email: member.email,
                    passwd: member.pw,
                    bio: member.bio,
                    track: member.track,
                    insta: member.insta,
                    otherLinks: member.otherLinks
                })
                .then((response) => console.log(response));

            navigateToMember();
            alert('user create');
        }
    }, [member]);

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
                onChange={(e) => setID(e.target.value)}
            />
            <TextField
                id="name"
                label="name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                id="engName"
                label="engName"
                variant="outlined"
                onChange={(e) => setEngName(e.target.value)}
            />
            <TextField
                id="email"
                label="email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="pw"
                label="pw"
                variant="outlined"
                onChange={(e) => setPw(e.target.value)}
            />
            <TextField
                id="bio"
                label="bio"
                variant="outlined"
                onChange={(e) => setBio(e.target.value)}
            />
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Track</FormLabel>
                <RadioGroup row>
                    <FormControlLabel
                        value="design"
                        control={<Radio onClick={() => setTrack('design')} />}
                        label="design"
                    />
                    <FormControlLabel
                        value="backend"
                        control={<Radio onClick={() => setTrack('backend')} />}
                        label="backend"
                    />
                    <FormControlLabel
                        value="frontend"
                        control={<Radio onClick={() => setTrack('frontend')} />}
                        label="frontend"
                    />
                </RadioGroup>
            </FormControl>
            <TextField
                id="insta"
                label="insta"
                variant="outlined"
                onChange={(e) => setInsta(e.target.value)}
            />
            <TextField
                id="link1"
                label="other link"
                variant="outlined"
                onChange={(e) => setOtherLinks([...otherLinks, e.target.value])}
            />

            <Button variant="contained" onClick={submit}>
                Submit
            </Button>
        </Box>
    );
}
