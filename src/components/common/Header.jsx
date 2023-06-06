import * as React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { AppBar, Toolbar, useMediaQuery } from '@mui/material';
import SideBar from './SideBar';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';
import LoginBtn from './LoginBtn';

const Logo = styled.img`
    width: 146px;
    margin: 0;

    @media (min-width: 1024px) {
        width: 180px;
        margin-left: 100px;
    }
`;

const HeaderWrap = styled(Toolbar)`
    position: fixed;
    width: 100%;
    background-color: #222222;
    padding: 20px 24px 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 26px 0px rgba(0, 0, 0, 0.25);
`;

function Header() {
    const match1024 = useMediaQuery('(min-width:1024px)');
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };

    return (
        <AppBar>
            <HeaderWrap>
                <Logo src={SKKUDLOGO} alt="SKKUD" onClick={navigateToMaintab} />
                {match1024 ? <LoginBtn /> : <SideBar />}
            </HeaderWrap>
        </AppBar>
    );
}

export default Header;
