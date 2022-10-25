import * as React from 'react';
import MemberCard from './MemberCard';
import memberImg from '../../../assets/memberImg.png';

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
        </>
    );
}
