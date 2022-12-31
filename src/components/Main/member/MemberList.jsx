import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import memberImg from '../../../assets/memberImg.png';
<<<<<<< HEAD
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

=======
import { TrackContext } from '../../../context/TrackContext';

export default function MemberList() {
    const [users, setUsers] = useState([]);
    const [design, setDesign] = useState([]);
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);
    const { trackTab } = useContext(TrackContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('http://localhost:8000/users');
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
            setUsers(res.data.data.users);
        };
        fetchEvents();
    }, []);

<<<<<<< HEAD
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
=======
    useEffect(() => {
        for (let i = 0; i < users.length; i += 1) {
            if (users[i].track === 'design') {
                setDesign([...design, users[i]]);
            }
            if (users[i].track === 'frontend') {
                setFrontend([...frontend, users[i]]);
            }
            if (users[i].track === 'backend') {
                setBackend([...backend, users[i]]);
            }
        }
    }, [users]);

    useEffect(() => {
        if (trackTab === 'design') {
            setData(design);
        } else if (trackTab === 'frontend') {
            setData(frontend);
        } else if (trackTab === 'backend') {
            setData(backend);
        }
    }, [users]);
    return (
        <>
            {data.map((member) => (
                <MemberCard
                    id={member.userID}
                    name={member.username}
                    engname={member.usernameEng}
                    bio={member.bio}
                    img={memberImg}
                    email={member.email}
                    otherLinks={member.otherLinks}
                    insta={member.insta}
                />
            ))}
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
        </>
    );
}
