import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import MemberCard from './MemberCard';
import { TrackContext } from '../../../context/TrackContext';
import { useUsersApi } from '../../../hooks/Member';

export default function MemberList() {
    const [users] = useUsersApi();
    const { trackTab } = useContext(TrackContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(users.filter((user) => user.track === trackTab));
    }, [users, trackTab]);

    return (
        <>
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
