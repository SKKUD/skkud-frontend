import React, { useState } from 'react';
import ApplicantCardDetail from './ApplicantCardDetail';
import Card from '@mui/material/Card';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const StyledButtonBase = styled(ButtonBase)`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const StyledCard = styled(Card)`
    width: 100%;
    margintop: 13;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const ApplicantInfoCard = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
`;

const Name = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
`;
const PersonalInfo = styled(Box)`
    display: flex;
    flex-direction: row;
`;

const ApplicationInfo = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 15px;
    height: 80px;
    justify-content: space-around;
`;

export default function ApplicantCard({
    documentAnswers,
    documentScores,
    email,
    interviewScores,
    name,
    phoneNumber,
    studentId,
    track,
    major,
    _id
}) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <StyledButtonBase onClick={() => setIsVisible(!isVisible)}>
                <StyledCard key={_id}>
                    <ApplicantInfoCard>
                        <Name>{name}</Name>
                        <PersonalInfo>
                            <div style={{ marginRight: '10px' }}>{major}</div>
                            <div>{studentId}</div>
                        </PersonalInfo>
                    </ApplicantInfoCard>
                    <ApplicationInfo>
                        <div>지원 트랙 : {track}</div>
                        <div>이메일 : {email}</div>
                        <div>전화번호 : {phoneNumber}</div>
                    </ApplicationInfo>
                </StyledCard>
            </StyledButtonBase>
            {isVisible ? (
                <ApplicantCardDetail
                    id={_id}
                    documentAnswers={documentAnswers}
                    documentScores={documentScores}
                    interviewScores={interviewScores}
                />
            ) : null}
        </>
    );
}

{
}

// ApplicantCard.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     engname: PropTypes.string.isRequired,
//     bio: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     otherLinks: PropTypes.array.isRequired,
//     insta: PropTypes.string.isRequired
// };
