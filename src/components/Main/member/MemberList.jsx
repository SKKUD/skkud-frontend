import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import memberImg from '../../../assets/memberImg.png';
import MemberDeleteBtn from './MemberDeleteBtn';
import MemberEditBtn from './MemberEditBtn';

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
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('http://localhost:8000/users');

            console.log('성공?', res);
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
            {users.map((user) => (
                <div key={user._id}>
                    <h1>ID: {user.userID}</h1>
                    <h2>name: {user.username}</h2>
                    <h3>nameEng: {user.usernameEng}</h3>
                    <p>email: {user.email}</p>
                    <p>passwd: {user.passwd}</p>
                    <MemberDeleteBtn _id={user.userID} />
                    <MemberEditBtn _id={user.userID} />
                    <p>===============================================</p>
                </div>
            ))}
        </>
    );
}
