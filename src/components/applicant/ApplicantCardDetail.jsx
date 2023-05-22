import * as React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import { useApplicationFormApi } from '../../hooks/Application';
import EditApplicantScore from './EditApplicantScore';

const CardWrap = styled(Card)`
    width: 342.5px;
    margin-top: -25px;
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 40px 20px;
    background-color: #303030;
    z-index: -1;
`;

const AnswerTitle = styled.div`
    font-weight: 600;
    color: #00ffa8;
`;
const AnswerContent = styled(Card)`
    margin: 10px 0px;
    padding: 10px;
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
    const showAnswers = () => {
        const result = [];
        {
            for (let i = 0; i < questions.length; i++) {
                result.push(
                    <div>
                        <AnswerTitle>{questions[i]}</AnswerTitle>
                        <AnswerContent>{documentAnswers[i]}</AnswerContent>
                    </div>
                );
            }
        }
        return result;
    };

    return (
        <CardWrap>
            {showAnswers()}

            <EditApplicantScore
                documentScores={documentScores}
                interviewScores={interviewScores}
                id={id}
            />
        </CardWrap>
    );
}
