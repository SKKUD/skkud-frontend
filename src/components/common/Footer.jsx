import * as React from 'react';
import { Link } from 'react-router-dom';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';
import styled from '@emotion/styled';
import insta from '../../assets/insta.png';
import sender from '../../assets/send.png';

const Typography = styled.div`
    font-size: 0.625rem;
    color: #3a3a3a;
    font-weight: 700;
    line-height: 12px;
    align-items: center;
    > p {
        margin-top: 6px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
        line-height: 25px;
        font-weight: 400;
    }
`;

const FooterWrap = styled.div`
    width: 100%;
    background-color: #1b1b1b;
    display: flex;
    justify-content: center;
`;

const FooterContainer = styled.div`
    width: 390px;
    height: 125px;
    padding-top: 16px;
    padding-left: 25px;
    padding-right: 23px;
    @media (min-width: 1024px) {
        min-width: 1000px;
        width: 80%;
        height: 200px;
        padding-top: 40px;
    }
`;

const TopDiv = styled.div`
    height: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const BottomDiv = styled.div`
    margin-top: 27.5px;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.img`
    width: 100px;
    filter: opacity(0.5) drop-shadow(0 0 0 #000000);
    @media (min-width: 1024px) {
        width: 150px;
    }
`;

const IconWrap = styled.div`
    height: 18px;
    & img:first-of-type {
        margin-right: 16px;
    }

    @media (min-width: 1024px) {
        height: 25px;
        img {
            width: 25px;
        }
    }
`;

export default function Footer() {
    return (
        <FooterWrap>
            <FooterContainer>
                <TopDiv>
                    <Logo src={SKKUDLOGO} alt="SKKUD" />
                    <IconWrap>
                        <a
                            href="https://instagram.com/skku.devs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={insta} alt="instagram" />
                        </a>
                        <img src={sender} alt="send" />
                    </IconWrap>
                </TopDiv>
                <BottomDiv>
                    <Typography>Sungkyunkwan University</Typography>
                    <Typography>Designer & Developer Group</Typography>
                    <Typography>
                        <p>Team Leader 강동헌</p>
                    </Typography>
                </BottomDiv>
            </FooterContainer>
        </FooterWrap>
    );
}
