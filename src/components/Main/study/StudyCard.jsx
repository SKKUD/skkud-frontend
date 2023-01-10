import * as React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
// import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import IntroDesign from '../../../assets/IntroDesign.png';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function StudyCard(props) {
    console.log(props);
    const { attendance, content, groupId, location, studyTime, task, title, _id } = props.props;
    const StyledStudyCard = styled(Card)`
        display: flex;
        align-items: center;
        padding: 18px;
        margin-top: 10px;
        border-radius: 15px;
    `;

    return (
        <StyledStudyCard>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <div
                        style={{
                            fontSize: '0.89rem',
                            fontWeight: 600,
                            lineHeight: '0.9rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {title}
                    </div>
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div
                        style={{
                            width: '1px',
                            height: '12px',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)'
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <div
                        style={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: '0.75rem',
                            lineHeight: '0.9rem'
                        }}
                    >
                        {studyTime.slice(0, 10)}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        image={IntroDesign}
                        alt={title}
                        style={{
                            borderRadius: '5px',
                            width: '107px',
                            height: '107px',
                            margin: '10px'
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <div
                        style={{
                            fontSize: '0.625rem',
                            lineHeight: '1rem',
                            height: '80px',
                            marginBottom: '10px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        {content}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            height: '24px',
                            backgroundColor: '#4d4d4d',
                            borderRadius: '10px',
                            paddingLeft: '10px',
                            overflow: 'scroll'
                        }}
                    >
                        {attendance.map((mem) => (
                            <div
                                style={{
                                    width: '30px',
                                    height: '24px',
                                    lineHeight: '24px',
                                    fontSize: '0.6rem',
                                    textAlign: 'center',
                                    marginRight: '5px'
                                }}
                            >
                                {mem}
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>
            {/* <div>
                <div>{title}</div>
                <div>{studyTime.slice(0, 10)}</div>
            </div>
            <div style={{ flexDirection: 'row' }}>
                <img src={skkudBI} alt={title} style={{ width: '107px' }} />
                <div style={{ flexDirection: 'column' }}>
                    <div>{content}</div>
                    <div>
                        {attendance.map((mem) => (
                            <div>{mem}</div>
                        ))}
                    </div>
                </div>
            </div> */}
        </StyledStudyCard>
    );
}

// MemberCard.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     engname: PropTypes.string.isRequired,
//     bio: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     otherLinks: PropTypes.array.isRequired,
//     insta: PropTypes.string.isRequired
// };
