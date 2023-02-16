import React from 'react';
import { useAppliedUserApi, useAppliedUserDeleteApi } from '../../hooks/Application';
import { TextField, Typography, Button, Box } from '@mui/material';
import ApplicantCard from '../../components/applicant/ApplicantCard';

function confirmModal() {
    if (window.confirm('정말 삭제하시겠습니까?')) {
        useAppliedUserDeleteApi();
        window.location.reload();
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
            <div style={{ fontWeight: '700', fontSize: '1.3rem', color: '#00FFB0' }}>Frontend</div>
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
            <div style={{ fontWeight: '700', fontSize: '1.3rem', color: '#00FFB0' }}>Backend</div>
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
            <div style={{ fontWeight: '700', fontSize: '1.3rem', color: '#00FFB0' }}>Design</div>
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
