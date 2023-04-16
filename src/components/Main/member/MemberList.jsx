import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import MemberCard from './MemberCard';
import { TrackContext } from '../../../context/TrackContext';
import { useUsersApi } from '../../../hooks/Member';

export default function MemberList() {
    const [users] = useUsersApi();
    const [design, setDesign] = useState([]);
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);
    const { trackTab } = useContext(TrackContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        let frontArr = [];
        let backArr = [];
        let designArr = [];
        for (let i = 0; i < users.length; i += 1) {
            if (users[i].track === 'design') {
                designArr.push(users[i]);
            } else if (users[i].track === 'frontend') {
                frontArr.push(users[i]);
            } else if (users[i].track === 'backend') {
                backArr.push(users[i]);
            }
        }
        setFrontend([...frontArr]);
        setBackend([...backArr]);
        setDesign([...designArr]);
    }, [users]);

    useEffect(() => {
        if (trackTab === 'design') {
            setData(design);
        } else if (trackTab === 'frontend') {
            setData(frontend);
        } else if (trackTab === 'backend') {
            setData(backend);
        }
    }, [design]);
    return (
        <>
            {data.map((member) => (
                <MemberCard
                    key={member.userID}
                    id={member.userID}
                    name={member.username}
                    engname={member.usernameEng}
                    bio={member.bio}
                    img={member.image}
                    email={member.email}
                    otherLinks={member.otherLinks}
                    insta={member.insta}
                    major={member.major}
                    projects={member.projects}
                />
            ))}
        </>
    );
}
