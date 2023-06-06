import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Btn = styled(Button)`
    width: 146px;
    height: 40px;
    text-transform: none;
    border-radius: 37px;
    color: #fff;
    background-color: #05e49f;
    font-weight: 700;
    margin-right: 100px;

    :hover {
        color: #888888;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export default function LoginBtn() {
    return (
        <StyledLink to="/login">
            <Btn variant="contained">Login</Btn>
        </StyledLink>
    );
}
