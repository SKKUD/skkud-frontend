import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import memberImg from '../../../assets/memberImg.png';
import MemberDeleteBtn from './MemberDeleteBtn';
import MemberEditBtn from './MemberEditBtn';
import { UserContext } from '../../../context/UserContext';

const Members = [
    {
        name: '김민지',
        position: '팀장',
        role: 'UI/UX Designer',
        desc: '스꾸디에서 팀장을 맡고 있습니다!',
        img: memberImg,
        email: 'minjikim@g.skku.edu',
        link1: 'minjikim@g.skku.edu',
        insta: 'minjikim@g.skku.edu',
        link2: 'minjikim@g.skku.edu'
    },
    {
        name: '김민지2',
        position: '팀장2',
        role: 'UI/UX Designer2',
        desc: '스꾸디에서 팀장을 맡고 있습니다!2',
        img: memberImg,
        email: 'minjikim@g.skku.edu',
        link1: 'minjikim@g.skku.edu',
        insta: 'minjikim@g.skku.edu',
        link2: 'minjikim@g.skku.edu'
    },
    {
        name: '김민지3',
        position: '팀장3',
        role: 'UI/UX Designer3',
        desc: '스꾸디에서 팀장을 맡고 있습니다!3',
        img: memberImg,
        email: 'minjikim@g.skku.edu',
        link1: 'minjikim@g.skku.edu',
        insta: 'minjikim@g.skku.edu',
        link2: 'minjikim@g.skku.edu'
    }
];

export default function MemberList() {
    const { user } = useContext(UserContext);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('http://localhost:8000/users');

            setUsers(res.data.data.users);
        };
        fetchEvents();
    }, []);

    return (
        <>
            {Members.map((member) => (
                <MemberCard
                    key={member.name}
                    name={member.name}
                    position={member.position}
                    role={member.role}
                    desc={member.desc}
                    img={member.img}
                    email={member.email}
                    link1={member.link1}
                    insta={member.insta}
                    link2={member.link2}
                />
            ))}
            {users.map((u) => (
                <div key={u._id}>
                    <h1>ID: {u.userID}</h1>
                    <h2>name: {u.username}</h2>
                    <h3>nameEng: {u.usernameEng}</h3>
                    <p>email: {u.email}</p>
                    <p>passwd: {u.passwd}</p>
                    {user ? (
                        <>
                            <MemberDeleteBtn _id={u.userID} />
                            <MemberEditBtn _id={u.userID} />
                        </>
                    ) : (
                        <p>read only</p>
                    )}

                    <p>===============================================</p>
                </div>
            ))}
        </>
    );
}
