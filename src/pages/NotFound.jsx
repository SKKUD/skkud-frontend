import * as React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import styled from '@emotion/styled';
import Img404 from '../assets/404.png';

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

const Image404 = styled.img`
    width: 200px;
    height: 200px;
`;

const ErrorMessage = styled.div`
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

export default function NotFound() {
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };
    const location = useLocation();
    console.log(location.pathname.substring(1, 8));
    function IsMainTab() {
        if (location.pathname.substring(1, 8) === 'maintab') return false;
        else return true;
    }

    return (
        <>
            {IsMainTab() && <Header />}

            <Container>
                <Image404 src={Img404} alt="404 image" />
                <ErrorMessage>404 ERROR - Page Not Found</ErrorMessage>
                <Message>해당 페이지를 찾을 수 없습니다.</Message>
                <Button variant="outlined" onClick={navigateToMaintab}>
                    홈으로 이동
                    <ArrowRightAltIcon />
                </Button>
            </Container>

            {IsMainTab() && <Footer />}
        </>
    );
}
