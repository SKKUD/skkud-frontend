import * as React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SideBar from './SideBar';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';

const Logo = styled.img`
    width: 146px;
    margin: 0;
`;

const HeaderWrap = styled(Toolbar)`
    position: fixed;
    width: 100%;
    background-color: #222222;
    padding: 20px 24px 0px;
    display: flex;
    justify-content: space-between;
`;

function Header() {
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };

    return (
        <AppBar>
            <HeaderWrap>
                <Logo src={SKKUDLOGO} alt="SKKUD" onClick={navigateToMaintab} />
                <SideBar />
            </HeaderWrap>
        </AppBar>
    );
}

export default Header;
