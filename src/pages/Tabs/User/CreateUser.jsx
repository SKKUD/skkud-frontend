import * as React from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
<<<<<<< HEAD
=======
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import PreImages from '../../../components/Main/project/PreImages';
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79

export default function CreateUser() {
    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [engName, setEngName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
<<<<<<< HEAD
    const member = { ID, name, engName, email, pw };
=======
    const [bio, setBio] = useState('');
    const [track, setTrack] = useState('');
    const [insta, setInsta] = useState('');
    const [otherLinks, setOtherLinks] = useState([]);
    const [images, setImages] = useState([]);
    const [PreviewImg, setPreviewImg] = useState([]);
    const member = { ID, name, engName, email, pw, bio, track, insta, otherLinks };
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const navigate = useNavigate();
    const navigateToMember = () => {
        navigate('/member');
    };
    const submit = useCallback(async () => {
        console.log(member);
<<<<<<< HEAD
        if (ID === '' || name === '' || engName === '' || email === '' || pw === '') {
=======
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
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
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
<<<<<<< HEAD
                    passwd: member.pw
                })
                .then((response) => console.log(response));
=======
                    passwd: member.pw,
                    bio: member.bio,
                    track: member.track,
                    insta: member.insta,
                    otherLinks: member.otherLinks
                })
                .then((response) => console.log(response));

>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
            navigateToMember();
            alert('user create');
        }
    }, [member]);

<<<<<<< HEAD
=======
    const uploadImgFile = (event) => {
        const fileArr = event.target.files;
        setImages(Array.from(fileArr)); // 업로드할 이미지 배열 저장
        const fileURLs = [];
        const filesLength = fileArr.length > 10 ? 10 : fileArr.length;

        // 미리보기
        for (let i = 0; i < filesLength; i += 1) {
            const file = fileArr[i];
            const reader = new FileReader();
            reader.onload = () => {
                fileURLs[i] = reader.result;
                setPreviewImg([...fileURLs]);
            };
            reader.readAsDataURL(file);
        }
    };

>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
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
<<<<<<< HEAD
=======
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

            <Box
                sx={{
                    display: 'flex',
                    mt: '5px',
                    alignContent: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <FormLabel id="demo-row-radio-buttons-group-label">Image</FormLabel>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input
                        hidden
                        name="images"
                        multiple
                        type="file"
                        accept="image/jpg,impge/png,image/jpeg,image/gif"
                        onChange={uploadImgFile}
                    />
                    <PhotoCamera />
                </IconButton>
            </Box>
            <PreImages imgFiles={PreviewImg} />
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79

            <Button variant="contained" onClick={submit}>
                Submit
            </Button>
        </Box>
    );
}
