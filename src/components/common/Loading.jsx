import React from 'react';
import styled from '@emotion/styled';
import Spinner from '../../assets/loading.gif';

export const Background = styled.div`
    width: 100%;
    margin-top: 80px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoadingText = styled.div`
    margin-top: 5px;
    text-align: center;
`;

const Loading = () => {
    return (
        <Background>
            <img src={Spinner} alt="로딩중" width="5%" />
            <LoadingText>Loading...</LoadingText>
        </Background>
    );
};

export default Loading;
