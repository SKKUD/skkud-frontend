import React from 'react';
import { useAppliedUserApi } from '../../hooks/Application';
import { TextField, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import ApplicantCard from '../../components/applicant/ApplicantCard';

export default function ApplicantsList() {
    const [users] = useAppliedUserApi();
    const frontend = [];
    const backend = [];
    const design = [];
    console.log(users);

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
        </Box>
    );
}
