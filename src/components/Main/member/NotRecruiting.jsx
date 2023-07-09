import * as React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from '@emotion/styled';
import SorryImg from '../../../assets/sorry.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 175px);
    margin-top: 80px;

    @media (min-width: 1024px) {
        width: 500px;
        margin: 100px auto 50px;
        border-radius: 25px;
        background-color: #292929;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
    }
`;

const ImageSorry = styled.img`
    width: 150px;
    height: 150px;
`;

const MainMessage = styled.div`
    margin: 30px 0px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
`;

const Message = styled.div`
    text-align: center;
    font-size: 18px;
    margin-bottom: 40px;
`;

export default function NotRecruiting() {
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };

    return (
        <>
            <Container>
                <ImageSorry src={SorryImg} alt="sorry" />
                <MainMessage>현재 모집 중이 아닙니다.</MainMessage>
                <Message>다음 모집 기간에 만나요!</Message>
                <Button variant="outlined" onClick={navigateToMaintab}>
                    홈으로 이동
                    <ArrowRightAltIcon />
                </Button>
            </Container>
        </>
    );
}
