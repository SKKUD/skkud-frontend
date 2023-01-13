import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
export default function FinishCreateUser() {
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };
    const location = useLocation();
    const name = location.state.name;
    const image = location.state.image;
    const [PreviewImg, setPreviewImg] = useState('');
    const id = location.state.id;
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/users/${id}`);
            setPreviewImg(res.data.data.user.image);
        };
        fetchEvents();
    }, []);
    console.log('id', id);
    console.log('prev', PreviewImg);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography variant="h7" fontWeight="bold" style={{ marginTop: '10px' }}>
                가입을 축하합니다!
            </Typography>
            <CardMedia
                sx={{ flexDirection: 'row' }}
                component="img"
                image={PreviewImg}
                alt={name}
                style={{ width: '150px', height: '150px', borderRadius: '150px', margin: '40px' }}
            />
            <Typography variant="h7" color="#00FFA8" style={{ marginBottom: '10px' }}>
                가입 완료!
            </Typography>
            <Typography variant="h5">{name}님, 환영해요</Typography>
            <Button
                onClick={navigateToMaintab}
                variant="contained"
                style={{
                    borderRadius: '24px',
                    border: '0.5px solid #727272',
                    backgroundColor: '#2c2c2e',
                    color: 'white',
                    marginTop: '150px',
                    height: '48px',
                    width: '312px'
                }}
            >
                스꾸디 둘러보기
            </Button>
        </div>
    );
}
