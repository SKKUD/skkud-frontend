// import React, { useContext } from 'react';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import MemberNav from '../../../components/Main/member/MemberNav';
import MemberList from '../../../components/Main/member/MemberList';
import CreateUserBtn from '../../../components/Main/member/CreateUserBtn';
// import { UserContext } from '../../../context/UserContext';

function TabMember() {
    // const { user } = useContext(UserContext);
    const [cookies] = useCookies(['id']);
    return (
        <>
            {' '}
            <MemberNav />
            {cookies.id ? (
                <Link to="/maintab/createuser">
                    {' '}
                    <CreateUserBtn />
                </Link>
            ) : (
                <p></p>
            )}
            <MemberList />
        </>
    );
}

export default TabMember;
