import React from 'react';
import { useAppliedUserApi, useAppliedUserDeleteApi } from '../../hooks/Application';
import { Button, Box } from '@mui/material';
import ApplicantCard from '../../components/applicant/ApplicantCard';
import styled from '@emotion/styled';

const Track = styled.div`
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 1.3rem;
    color: #00ffb0;
`;

function confirmModal() {
    if (window.confirm('정말 삭제하시겠습니까?')) {
        useAppliedUserDeleteApi();
        window.location.reload(true);
    } else {
        console.log('취소. 변화 없음');
    }
}

export default function ApplicantsList() {
    const [users] = useAppliedUserApi();
    const frontend = [];
    const backend = [];
    const design = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].track === 'frontend') {
            frontend.push(users[i]);
        } else if (users[i].track === 'backend') {
            backend.push(users[i]);
        } else {
            design.push(users[i]);
        }
    }

    return (
        <Box>
            <Track>Frontend</Track>
            {frontend.length > 0 &&
                frontend.map((user) => (
                    <ApplicantCard
                        key={user._id}
                        documentAnswers={user.documentAnswers}
                        documentScores={user.documentScores}
                        email={user.email}
                        interviewScores={user.interviewScores}
                        name={user.name}
                        phoneNumber={user.phoneNumber}
                        studentId={user.studentId}
                        _id={user._id}
                        track={user.track}
                        major={user.major}
                    />
                ))}
            <Track>Backend</Track>
            {backend.length > 0 &&
                backend.map((user) => (
                    <ApplicantCard
                        key={user._id}
                        documentAnswers={user.documentAnswers}
                        documentScores={user.documentScores}
                        email={user.email}
                        interviewScores={user.interviewScores}
                        name={user.name}
                        phoneNumber={user.phoneNumber}
                        studentId={user.studentId}
                        _id={user._id}
                        track={user.track}
                        major={user.major}
                    />
                ))}
            <Track>Design</Track>
            {design.length > 0 &&
                design.map((user) => (
                    <ApplicantCard
                        key={user._id}
                        documentAnswers={user.documentAnswers}
                        documentScores={user.documentScores}
                        email={user.email}
                        interviewScores={user.interviewScores}
                        name={user.name}
                        phoneNumber={user.phoneNumber}
                        studentId={user.studentId}
                        _id={user._id}
                        track={user.track}
                        major={user.major}
                    />
                ))}
            <Button variant="outlined" color="error" onClick={confirmModal}>
                지원서 모두 삭제하기
            </Button>
        </Box>
    );
}
