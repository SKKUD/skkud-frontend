import * as React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import { useApplicationFormApi } from '../../hooks/Application';
import EditApplicantScore from './EditApplicantScore';

const SkillBtn = styled.button`
    height: 22px;
    border: 1px solid #00ffa8;
    border-radius: 33px;
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 18px;
    gap: 10px;
    margin: 3px;
`;
export default function ApplicantCardDetail({
    id,
    documentAnswers,
    documentScores,
    interviewScores
}) {
    const [form] = useApplicationFormApi();

    const questions = [];
    form[0] && form[0].questions.map((item) => questions.push(item));
    const rendering = () => {
        const result = [];
        {
            for (let i = 0; i < questions.length; i++) {
                result.push(
                    <div>
                        <div style={{ fontWeight: '600', color: '#00ffa8' }}>{questions[i]}</div>
                        <Card sx={{ margin: '10px 0px', padding: '10px' }}>
                            {documentAnswers[i]}
                        </Card>
                    </div>
                );
            }
        }
        return result;
    };

    return (
        <Card
            style={{
                width: '342.5px',
                marginTop: -25,
                borderRadius: 20,
                padding: '40px 20px',
                backgroundColor: '#303030',
                zIndex: '-1'
            }}
        >
            {rendering()}

            <EditApplicantScore
                documentScores={documentScores}
                interviewScores={interviewScores}
                id={id}
            />
        </Card>
    );
}
