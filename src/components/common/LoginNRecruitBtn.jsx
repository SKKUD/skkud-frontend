import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import UserToggle from './UserToggle';

import axios from 'axios';

const BASE_URI = () => {
    if (process.env.REACT_APP_ENV === 'production') return process.env.REACT_APP_PROD_URI;
    else return process.env.REACT_APP_DEV_URI;
};

const Wrap = styled.div`
    width: 25%;
    height: 40px;
    display: flex;
    flex-direction: row;
`;

const LoginBtn = styled(Button)`
    width: 86px;
    height: 35px;
    text-transform: none;
    border-radius: 37px;
    color: #fff;
    background-color: #4d4d4d;
    font-weight: 700;
    margin-right: 10px;

    :hover {
        background-color: #888888;
    }
`;

const RecruitBtn = styled(Button)`
    width: 126px;
    height: 35px;
    text-transform: none;
    border-radius: 37px;
    color: #fff;
    background-color: #05e49f;
    font-weight: 700;

    :hover {
        color: #888888;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export default function LoginNRecruitBtn() {
    const [cookies, , removeCookie] = useCookies([]);
    const [username, setName] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const navigateToMainTab = () => {
        navigate('/maintab');
        window.location.reload(true);
    };

    const authCheck = async () => {
        const token = cookies.id;
        try {
            const res = await axios.post(BASE_URI() + '/auth/verify');
            if (res.data.data.userID !== token) logoutBtn();
            setName(res.data.data.username);
        } catch (error) {
            console.log('auth check error');
            removeCookie('id');
        }
    };

    useEffect(() => {
        authCheck();
    }, []);

    const logoutBtn = async () => {
        removeCookie('id');
        authCheck();
        await axios
            .post(BASE_URI() + '/auth/logout')
            .then((userData) => console.log(userData))
            .catch((error) => console.log(error));
        navigateToMainTab();
    };

    return cookies.id ? (
        <Wrap>
            <UserToggle username={username} logout={logoutBtn} />
            <StyledLink to="/application">
                <RecruitBtn variant="contained">recruiment</RecruitBtn>
            </StyledLink>
        </Wrap>
    ) : pathname === '/login' ? null : (
        <Wrap>
            <StyledLink to="/login">
                <LoginBtn variant="contained">log in</LoginBtn>
            </StyledLink>
            <StyledLink to="/application">
                <RecruitBtn variant="contained">recruiment</RecruitBtn>
            </StyledLink>
        </Wrap>
    );
}
