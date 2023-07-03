import * as React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import IntroDesign from '../../../assets/IntroDesign.png';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function StudyCard(props) {
    const { attendance, content, studyTimeStart, title, images } = props.props;

    const date = studyTimeStart.substring(0, 10).replaceAll('-', '.');
    const day = getDayOfWeek(date);

    const StyledStudyCard = styled(Card)`
        display: flex;
        align-items: center;
        padding: 18px;
        margin-top: 10px;
        border-radius: 15px;
        @media (min-width: 1024px) {
            padding: 40px;
        }
    `;

    const StyledChip = styled((props) => <Chip {...props} />)(() => ({
        border: '1.5px solid #444',
        height: '18px',
        fontSize: '0.5rem',
        boxSizing: 'border-box',

        '& span': {
            fontWeight: 600,
            color: '#ffffff8b',
            padding: '5px'
        },
        '@media (min-width: 1024px)': {
            height: '28px',
            fontSize: '14px',
            marginRight: '7px',
            '& span': {
                fontWeight: 400,
                padding: '6px'
            }
        }
    }));

    const Title = styled.div({
        fontSize: '0.89rem',
        fontWeight: 600,
        lineHeight: '0.9rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '@media (min-width: 1024px)': {
            fontSize: '18px',
            lineHeight: '18px',
            fontWeight: 500
        }
    });

    const Divider = styled.div({
        width: '1px',
        height: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        '@media (min-width: 1024px)': { height: '18px' }
    });

    const Date = styled.div({
        fontSize: '0.75rem',
        lineHeight: '0.9rem',
        color: 'rgba(255, 255, 255, 0.5)',
        '@media (min-width: 1024px)': { lineHeight: '18px', fontSize: '14px' }
    });

    const StyledImage = styled(CardMedia)({
        borderRadius: '5px',
        width: '107px',
        height: '107px',
        margin: '10px',
        '@media (min-width: 1024px)': { width: '157px', height: '157px' }
    });

    const Content = styled.div({
        fontSize: '0.625rem',
        lineHeight: '1rem',
        height: '80px',
        margin: '10px 0px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordBreak: 'keep-all',
        '@media (min-width: 1024px)': { fontSize: '16px', lineHeight: '20px', height: '120px' }
    });

    const Attendance = styled.div({
        width: '100%',
        height: '24px',
        overflow: 'scroll',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
        '@media (min-width: 1024px)': {
            height: '28px'
        }
    });

    return (
        <StyledStudyCard>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <Title>{title}</Title>
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Divider />
                </Grid>
                <Grid item xs={4}>
                    <Date>
                        {date} ({day})
                    </Date>
                </Grid>
                <Grid item xs={6}>
                    {images.length !== 0 ? (
                        <StyledImage component="img" image={images[0]} alt={title} />
                    ) : (
                        <StyledImage component="img" image={IntroDesign} alt={title} />
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Content>{content}</Content>
                    <Attendance>
                        <Stack direction="row" spacing={0.5} justifyContent="left" flexWrap="wrap">
                            {attendance &&
                                attendance.map((mem) => (
                                    <StyledChip
                                        key={mem}
                                        label={mem}
                                        variant="outlined"
                                        color="primary"
                                    />
                                ))}
                        </Stack>
                    </Attendance>
                </Grid>
            </Grid>
        </StyledStudyCard>
    );
}

function getDayOfWeek(date) {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(date).getDay()];

    return dayOfWeek;
}
