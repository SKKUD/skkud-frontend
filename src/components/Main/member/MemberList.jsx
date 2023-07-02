import * as React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import MemberCard from './MemberCard';
import { useUsersApi } from '../../../hooks/Member';
import MemberNav from './MemberNav';

const Container = styled.div`
    @media (min-width: 1024px) {
        width: 75%;
        min-width: 1000px;
        margin: 60px auto 150px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
    }
`;
const WeAreSKKUD = styled.div`
    color: #00ffa8;
    font-size: 60px;
    font-weight: 900;
    line-height: 104.836%;
`;

const CardWrap = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
    }
`;

export default function MemberList() {
    const match1024 = useMediaQuery('(min-width:1024px)');
    const [users] = useUsersApi();

    const [trackTab, setTrackTab] = useState('backend');
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(users.filter((user) => user.track === trackTab));
    }, [users, trackTab]);

    return (
        <Container>
            {match1024 ? <WeAreSKKUD>We Are SKKU.D</WeAreSKKUD> : null}
            <MemberNav trackTab={trackTab} setTrackTab={setTrackTab} />
            <CardWrap>
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
            </CardWrap>
        </Container>
    );
}
