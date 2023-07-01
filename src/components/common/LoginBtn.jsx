import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import axios from 'axios';

const BASE_URI = () => {
    if (process.env.REACT_APP_ENV === 'production') return process.env.REACT_APP_PROD_URI;
    else return process.env.REACT_APP_DEV_URI;
};

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
    const [cookies, , removeCookie] = useCookies([]);
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const navigateToMainTab = () => {
        navigate('/maintab');
        window.location.reload();
    };

    const authCheck = async () => {
        const token = cookies.id;
        try {
            const res = await axios.post(BASE_URI() + '/auth/verify');
            if (res.data.data.userID !== token) logoutBtn();
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
        <Btn variant="contained" onClick={logoutBtn}>
            Logout
        </Btn>
    ) : pathname === '/login' ? null : (
        <StyledLink to="/login">
            <Btn variant="contained">Login</Btn>
        </StyledLink>
    );
}
