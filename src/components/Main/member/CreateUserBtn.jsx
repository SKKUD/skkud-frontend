import React from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const ButtonWrap = styled(Box)`
    width: 100%;
    min-height: 200px;
    height: calc(100vh - 620px);
    padding-bottom: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;

const Text = styled.div`
    font-size: 0.75rem;
    font-weight: 500;
    margin-bottom: 6px;
`;

const StyledButton = styled(Button)`
    border-radius: 24px;
    border: 0.5px solid #727272;
    background-color: #2c2c2e;
    color: white;
    height: 48px;
    width: 312px;
    font-size: 0.875rem;
`;

export default function CreateUserBtn() {
    const navigate = useNavigate();
    const navigateToCreateUser = () => {
        navigate('/maintab/member/createuser');
    };
    return (
        <ButtonWrap>
            <Text>회원가입하고 스꾸디와 함께해요!</Text>
            <StyledButton onClick={navigateToCreateUser} variant="contained">
                회원가입하기
            </StyledButton>
        </ButtonWrap>
    );
}
