import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Img from '../../../assets/memberImg.png';
import { PageContext } from '../../../pages/SignUp';

const CongratsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
`;

const CongratsImg = styled.img`
    width: 250px;
    height: 250px;
`;

const CongratsBtn = styled(Button)`
    border-radius: 24px;
    border: 0.5px solid #727272;
    background-color: #2c2c2e;
    color: white;
    margin-top: 150px;
    height: 48px;
    width: 312px;
`;

export default function FinishCreateUser() {
    const { page } = useContext(PageContext);
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };

    const name = page.state.name;

    return (
        <CongratsContainer>
            <Typography variant="h7" fontWeight="bold">
                가입을 축하합니다!
            </Typography>

            <CongratsImg alt={name} src={Img} />

            <Typography variant="h7" color="#00FFA8" style={{ marginBottom: '10px' }}>
                가입 완료!
            </Typography>

            <Typography variant="h5">{name}님, 환영해요</Typography>

            <CongratsBtn onClick={navigateToMaintab} variant="contained">
                스꾸디 둘러보기
            </CongratsBtn>
        </CongratsContainer>
    );
}
