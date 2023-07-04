import * as React from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import CardImg from '../../../assets/four_square.png';
import WebHistorySkkud from '../../../assets/web_historySkkud.png';
import WebCard1 from '../../../assets/web_history1.png';
import WebCard2 from '../../../assets/web_history2.png';
import WebCard3 from '../../../assets/web_history3.png';
import WebCard4 from '../../../assets/web_history4.png';

const StyledContainer = styled.div`
    @media (min-width: 1024px) {
        width: 60%;
        min-width: 1000px;
        margin: 200px auto;
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-top: 84px;
    margin-left: 11px;
    margin-bottom: 7px;
`;

const Logo = styled.img`
    margin-left: auto;
    display: block;
    margin-right: 11px;
    margin-bottom: 35px;
    width: 213px;
`;
const WebLogo = styled.img`
    width: 600px;
`;

const WebDetail = styled.div`
    width: 70%;
    min-width: 850px;
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2.5px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: #141414;
    margin: 40px auto 55px;
`;

const StyledCards = styled.img`
    width: 100%;
    @media (min-width: 1024px) {
        width: 20%;
        min-width: 200px;
    }
`;

const WebCardsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export default function History() {
    const match1024 = useMediaQuery('(min-width:1024px)');
    return (
        <StyledContainer>
            {match1024 ? (
                <>
                    <WebLogo src={WebHistorySkkud} alt="SKKUD" />
                    <WebDetail>스꾸디의 프로젝트와 수상경력을 확인해보세요.</WebDetail>
                    <WebCardsContainer>
                        <StyledCards src={WebCard1} />
                        <StyledCards src={WebCard2} />
                        <StyledCards src={WebCard3} />
                        <StyledCards src={WebCard4} />
                    </WebCardsContainer>
                </>
            ) : (
                <>
                    <Title>History of</Title>
                    <Logo src={SKKUD} alt="SKKUD" />
                    <StyledCards src={CardImg} alt="cards" />
                </>
            )}
        </StyledContainer>
    );
}
