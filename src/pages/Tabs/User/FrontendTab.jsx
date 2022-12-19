import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import MemberNav from '../../../components/Main/member/MemberNav';
import MemberList from '../../../components/Main/member/MemberList';
import CreateUserBtn from '../../../components/Main/member/CreateUserBtn';
import { UserContext } from '../../../context/UserContext';

function FrontendTab() {
    const { user } = useContext(UserContext);
    return (
        <>
            <MemberNav />
            <MemberList />
            {user ? (
                <Link to="/createuser">
                    {' '}
                    <CreateUserBtn />
                </Link>
            ) : (
                <p>read only</p>
            )}
        </>
    );
}

export default FrontendTab;
