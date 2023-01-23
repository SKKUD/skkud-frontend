import React from 'react';
import { useCookies } from 'react-cookie';
import MemberNav from '../../../components/Main/member/MemberNav';
import MemberList from '../../../components/Main/member/MemberList';

function FrontendTab() {
    const [cookies] = useCookies(['id']);
    return (
        <>
            <MemberNav />
            <MemberList />
        </>
    );
}

export default FrontendTab;
