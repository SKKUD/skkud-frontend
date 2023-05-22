import * as React from 'react';
import { useState, useEffect } from 'react';
import MemberCard from './MemberCard';
import { useUsersApi } from '../../../hooks/Member';
import MemberNav from './MemberNav';

export default function MemberList() {
    const [users] = useUsersApi();

    const [trackTab, setTrackTab] = useState('backend');
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(users.filter((user) => user.track === trackTab));
    }, [users, trackTab]);

    return (
        <>
            <MemberNav trackTab={trackTab} setTrackTab={setTrackTab} />
            {data.map((member) => (
                <MemberCard
                    key={member.userID}
                    id={member.userID}
                    name={member.username}
                    engname={member.usernameEng}
                    img={member.image}
                    {...member}
                />
            ))}
        </>
    );
}
