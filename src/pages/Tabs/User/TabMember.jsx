<<<<<<< HEAD
import React from 'react';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// import MemberNav from '../../../components/Main/member/MemberNav';
// import MemberList from '../../../components/Main/member/MemberList';
// import CreateUserBtn from '../../../components/Main/member/CreateUserBtn';
=======
// import React, { useContext } from 'react';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import MemberNav from '../../../components/Main/member/MemberNav';
import MemberList from '../../../components/Main/member/MemberList';
import CreateUserBtn from '../../../components/Main/member/CreateUserBtn';
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
// import { UserContext } from '../../../context/UserContext';

function TabMember() {
    // const { user } = useContext(UserContext);
<<<<<<< HEAD
    return (
        <div>
            {/* <MemberNav />
            <MemberList />
            {user ? (
                <Link to="/createuser">
=======
    const [cookies] = useCookies(['id']);
    return (
        <>
            {' '}
            <MemberNav />
            <MemberList />
            {cookies ? (
                <Link to="/maintab/createuser">
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
                    {' '}
                    <CreateUserBtn />
                </Link>
            ) : (
                <p>read only</p>
<<<<<<< HEAD
            )} */}
        </div>
=======
            )}
        </>
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
    );
}

export default TabMember;
