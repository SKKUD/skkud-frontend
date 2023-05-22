import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import ImagesView from '../../../components/Main/study/ImagesView';
import img from '../../../assets/IntroDesign.png';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import getDayOfWeek from '../../../utils/getDayOfWeek';
import EditNDeleteBtn from '../../../components/Main/study/EditNDeleteBtn';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
    border-radius: 24px;
    background-color: #0c0c0c;
    margin: 0 15px 20px;
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
    }
}));

const StudyContentCard = styled(Card)`
    border-radius: 24px;
    background-color: #1c1c1c;
    padding-bottom: 40px;
    padding-top: 8px;
`;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    padding-left: 21px;
    margin-top: 20px;
`;

const Title = styled(Box)`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 21.48px;
    margin-bottom: 8px;
`;

const DateText = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    line-height: 0.9rem;
    margin-bottom: 2px;
`;

const LocationText = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    line-height: 0.9rem;
    display: flex;
    align-items: center;
    margin-bottom: 21px;
`;

const AttendanceCount = styled(Box)`
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 0.75rem;
`;

const AttendanceCountNumber = styled(Box)`
    margin-left: 12px;
    font-size: 0.563rem;
    color: rgba(255, 255, 255, 0.5);
`;

const AttendanceWrapper = styled(Box)`
    display: flex;
    line-height: 14.32px;
    margin-bottom: 10px;
`;

const TaskTitle = styled(Box)`
    font-weight: 700;
    font-size: 0.875rem;
`;

const TaskName = styled(Box)`
    font-size: 0.75rem;
`;

export default function StudyContent() {
    const [cookies] = useCookies(['id']);
    const Task = [];
    const loc = useLocation();
    const {
        attendance,
        content,
        groupId,
        location,
        studyTimeEnd,
        studyTimeStart,
        taskContents,
        taskNames,
        title,
        _id,
        images
    } = loc.state;

    for (let i = 0; i < taskContents.length; i++) {
        Task.push({ task: taskContents[i], name: taskNames[i] });
    }

    const date = studyTimeStart.substring(0, 10).replaceAll('-', '.');
    const day = getDayOfWeek(date);
    const startTime = studyTimeStart.substring(11, 16);
    const endTime = studyTimeEnd.substring(11, 16);

    return (
        <StyledCard>
            {cookies.id ? <EditNDeleteBtn id={_id} /> : ''}

            <StudyContentCard>
                <StyledBox>
                    <Title>{title}</Title>
                    <DateText>
                        {date} ({day}) {startTime} - {endTime}
                    </DateText>
                    <LocationText>
                        <FmdGoodOutlinedIcon
                            sx={{ width: '14px', height: '16px', margin: '0px 8px 3px 0px' }}
                        />
                        {location}
                    </LocationText>
                    <Box mb={'21px'}>
                        <AttendanceWrapper>
                            <AttendanceCount>참여자</AttendanceCount>
                            <AttendanceCountNumber>총 {attendance.length}명</AttendanceCountNumber>
                        </AttendanceWrapper>
                        <Stack
                            direction="row"
                            spacing={0.5}
                            sx={{ justifyContent: 'left', flexWrap: 'wrap' }}
                        >
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
                    </Box>
                    <Box mb={'18px'}>
                        <Box
                            sx={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                mb: '11px'
                            }}
                        >
                            스터디 내용
                        </Box>
                        <Box
                            sx={{
                                fontSize: '0.75rem',
                                mb: '11px'
                            }}
                        >
                            {content}
                        </Box>
                    </Box>
                    <Box mb={'18px'}>
                        <Box
                            sx={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                mb: '11px'
                            }}
                        >
                            스터디 자료
                        </Box>
                        {images.length > 0 ? (
                            <ImagesView imgFiles={images} />
                        ) : (
                            <img
                                src={img}
                                alt="스터디자료"
                                style={{ width: '160px', height: '160px', borderRadius: '5px' }}
                            />
                        )}
                    </Box>
                    <Box mb={'50px'}>
                        <Box
                            sx={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                mb: '11px'
                            }}
                        >
                            과제
                        </Box>
                        <Stack
                            direction="column"
                            spacing={0.5}
                            sx={{ justifyContent: 'left', flexWrap: 'wrap', width: '250px' }}
                        >
                            {Task &&
                                Task.map((item) => (
                                    <div style={{ marginBottom: '10px' }} key={item.task}>
                                        <TaskTitle>{item.task}</TaskTitle>
                                        <TaskName>{item.name}</TaskName>
                                    </div>
                                ))}
                        </Stack>
                    </Box>
                </StyledBox>
            </StudyContentCard>
        </StyledCard>
    );
}
