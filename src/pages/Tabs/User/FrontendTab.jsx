// import React, { useContext } from 'react';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import MemberNav from '../../../components/Main/member/MemberNav';
import MemberList from '../../../components/Main/member/MemberList';

function FrontendTab() {
    // const { user } = useContext(UserContext);
    const [cookies] = useCookies(['id']);
    return (
        <>
            <MemberNav />
            <MemberList />
        </>
    );
}

export default FrontendTab;
