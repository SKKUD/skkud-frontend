import * as React from 'react';
import { useState } from 'react';
import ApplicantCardDetail from './ApplicantCardDetail';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
            <ButtonBase
                sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                onClick={() => setIsVisible(!isVisible)}
            >
                <Card
                    key={_id}
                    sx={{ width: '100%' }}
                    style={{
                        marginTop: 13,
                        borderRadius: '15px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            lineHeight: '1'
                        }}
                    >
                        <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{name}</div>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginRight: '10px' }}>{major}</div>
                            <div>{studentId}</div>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            marginTop: '15px',
                            height: '80px',
                            justifyContent: 'space-around'
                        }}
                    >
                        <div>지원 트랙 : {track}</div>
                        <div>이메일 : {email}</div>
                        <div>전화번호 : {phoneNumber}</div>
                    </Box>
                </Card>
            </ButtonBase>
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
