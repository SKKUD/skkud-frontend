import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const Title = styled.div`
    font-size: 20px;
`;

const Detail = styled.div`
    font-size: 12px;
`;

// const ButtonBlock = styled.div`
//     .joinusBtn {
//         width: 255px;
//         height: 38px;
//         left: 57px;
//         top: 2400px;

//         background: #00ffa8;
//         box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
//         border-radius: 25px;
//     }
// `;

export default function JoinUs() {
    const navigate = useNavigate();
    const navigateToJoin = () => {
        navigate('/application');
    };
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography
                variant="h5"
                style={{ fontWeight: '700', fontSize: '40px', lineHeight: '48px' }}
            >
                Join us
            </Typography>
            <Detail
                variant="body2"
                style={{ fontWeight: '400', fontSize: '12px', lineHeight: '200%' }}
            >
                여러분들의 개발자로의 여정, 저희 스꾸디가 도와드리겠습니다!
            </Detail>
            <Button
                variant="contained"
                onClick={navigateToJoin}
                style={{
                    borderRadius: '25px',
                    width: '255px',
                    height: '38px',
                    margin: '15px'
                }}
            >
                지금 지원하기
            </Button>
        </div>
    );
}
