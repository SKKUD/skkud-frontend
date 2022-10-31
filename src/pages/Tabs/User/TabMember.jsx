import React from 'react';
import { Link } from 'react-router-dom';
import MemberNav from '../../../components/Main/member/MemberNav';
import MemberList from '../../../components/Main/member/MemberList';
import CreateUserBtn from '../../../components/Main/member/CreateUserBtn';

function TabMember() {
    return (
        <>
            <MemberNav />
            <MemberList />
            <Link to="/createuser">
                {' '}
                <CreateUserBtn />
            </Link>
        </>
    );
}

export default TabMember;
