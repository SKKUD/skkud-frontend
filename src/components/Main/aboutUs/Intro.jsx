import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import IntroDesignImg from '../../../assets/Art+WeareSKKUD_gray.jpeg';
import WebIntroDesignImg from '../../../assets/web_WeAreSKKUD.png';
import vector from '../../../assets/Vector.png';
import webvector from '../../../assets/webVector.png';

const ImgBackground = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: -50px;
    padding-top: 50px;
    background-color: #292929;
    display: flex;
    flex-direction: column;

    > img:first-child {
        width: 70%;
        margin: 40px auto;
    }
`;

const VectorImg = styled.img`
    display: block;
    margin: 60px auto 40px;
`;

export default function Intro() {
    const match1024 = useMediaQuery('(min-width:1024px)');
    return (
        <>
            {match1024 ? (
                <ImgBackground>
                    <img src={WebIntroDesignImg} alt="introDesign" width="100%" />
                    <VectorImg src={webvector} alt="vector" />
                </ImgBackground>
            ) : (
                <>
                    <img src={IntroDesignImg} alt="introDesign" width="100%" />
                    <VectorImg src={vector} alt="vector" />
                </>
            )}
        </>
    );
}
