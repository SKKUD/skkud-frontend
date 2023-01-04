import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
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
    const image = location.state.image.name;

    // const name = 'name';
    // const image = 'skkud-frontend/src/assets/memberImg.png';
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigateToMaintab();
    //     }, 5000);
    // });
    console.log(image);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography variant="h7" fontWeight="bold">
                가입을 축하합니다!
            </Typography>
            <CardMedia sx={{ flexDirection: 'row' }} component="img" image={image} alt={name} />
            <Typography variant="h7" color="#00FFA8">
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
