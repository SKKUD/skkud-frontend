import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import memberImg from '../../../assets/memberImg.png';
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
            setUsers(res.data.data.users);
        };
        fetchEvents();
    }, []);

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
                    major={member.major}
                />
            ))}
        </>
    );
}
