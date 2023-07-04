import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const JoinUsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    @media (min-width: 1024px) {
        margin-bottom: 200px;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 48px;

    @media (min-width: 1024px) {
        font-size: 80px;
    }
`;

const Detail = styled.div`
    font-size: 0.8rem;
    line-height: 200%;
    margin-bottom: 10px;
    @media (min-width: 1024px) {
        font-size: 24px;
        font-weight: 700;
        margin: 30px auto 80px;
    }
`;

const StyledButton = styled(Button)`
    border-radius: 25px;
    width: 255px;
    height: 38px;
    margin: 15px;
    font-weight: 600;

    @media (min-width: 1024px) {
        font-size: 24px;
        border-radius: 64px;
        width: 350px;
        height: 68px;
        padding: 8px 84px;
        letter-spacing: 1.5px;
    }
`;

export default function JoinUs() {
    const navigate = useNavigate();
    const navigateToJoin = () => {
        navigate('/application');
    };

    return (
        <JoinUsWrap>
            <Title>Join Us</Title>
            <Detail>여러분들의 개발자로의 여정, 저희 스꾸디가 도와드리겠습니다!</Detail>
            <StyledButton variant="contained" onClick={navigateToJoin}>
                지금 지원하기
            </StyledButton>
        </JoinUsWrap>
    );
}
