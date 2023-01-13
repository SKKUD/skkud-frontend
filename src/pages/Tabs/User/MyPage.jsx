import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { MemberEditDetailBtn } from '../../../components/Main/member/MemberEditBtn';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyPage() {
    const location = useLocation();
    // const id = location.pathname.split('/')[3];
    const [cookies] = useCookies(['id']);
    // const id = location.state.id;
    const id = cookies.id;
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/users/${id}`);
            console.log('res', res.data.data.user);
            setUser(res.data.data.user);
            setPreviewImg(res.data.data.user.image);
        };
        fetchEvents();
    }, []);
    const major = user.major;
    const name = user.username;
    const bio = user.bio;
    const insta = user.insta;
    const otherLinks = user.otherLinks;
    const { email } = user;
    const skill = user.skills;
    const [newname, setName] = useState(name);
    const [newemail, setEmail] = useState(email);
    const [newmajor, setMajor] = useState(major);
    const [newbio, setBio] = useState(bio);
    const [newinsta, setInsta] = useState(insta);
    const [newlinks, setLinks] = useState(otherLinks);
    const [PreviewImg, setPreviewImg] = useState('');
    const [newskill, setSkill] = useState(skill);

    useEffect(() => {
        setName(name);
        setEmail(email);
        setMajor(major);
        setBio(bio);
        setInsta(insta);
        setLinks(otherLinks);
        setSkill(skill);
        console.log(newskill);
        if (newskill === []) {
            setSkill('skill set을 입력하세요.');
        }
    }, [name, email, bio, insta, otherLinks, major, skill]);

    const validEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    const navigate = useNavigate();
    const navigateToMember = () => {
        navigate('/maintab/member');
    };

    const submit = useCallback(async () => {
        if (
            newname === '' ||
            newmajor === '' ||
            newemail === '' ||
            newlinks === '' ||
            newinsta === '' ||
            newbio === ''
        ) {
            alert('입력을 완료하세요');
        } else if (newemail.match(validEmail) == null) {
            alert('이메일 형식에 맞춰 입력하세요');
        } else {
            await axios.patch(`http://localhost:8000/users/${id}`, {
                username: newname,
                email: newemail,
                major: newmajor,
                otherLinks: newlinks,
                insta: newinsta,
                bio: newbio,
                skills: newskill
            });
            navigateToMember();
        }
    }, [newname, newemail, newbio, newinsta, newlinks, newmajor, newskill]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography variant="h6" textAlign={'center'}>
                My Page
            </Typography>
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

            <TextField
                id="name"
                label="이름"
                variant="standard"
                value={newname || ''}
                onChange={(e) => setName(e.target.value)}
            />
            <MemberEditDetailBtn _id={id} />

            <TextField
                id="major"
                label="학과"
                variant="standard"
                value={newmajor || ''}
                onChange={(e) => setMajor(e.target.value)}
            />
            <TextField
                id="email"
                label="이메일"
                variant="standard"
                value={newemail || ''}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="link"
                label="Web"
                variant="standard"
                value={newlinks || ''}
                onChange={(e) => setLinks(e.target.value)}
            />
            <TextField
                id="insta"
                label="SNS"
                variant="standard"
                value={newinsta || ''}
                onChange={(e) => setInsta(e.target.value)}
            />
            <TextField
                id="bio"
                label="한줄소개"
                variant="standard"
                value={newbio || ''}
                onChange={(e) => setBio(e.target.value)}
            />
            <TextField
                id="skill"
                label="skill set"
                variant="standard"
                value={newskill || ''}
                onChange={(e) => {
                    const skilArr = e.target.value.split(',');
                    setSkill(skilArr);
                }}
            />

            <Button
                variant="contained"
                onClick={submit}
                color="background"
                style={{
                    borderRadius: 17,
                    border: '1px solid #00ffa8',
                    color: '#00ffa8',
                    width: '90px',
                    height: '21px',
                    fontSize: '11px',
                    padding: '4px 14px',
                    gap: '10px'
                }}
            >
                회원정보 수정
            </Button>
        </Box>
    );
}
