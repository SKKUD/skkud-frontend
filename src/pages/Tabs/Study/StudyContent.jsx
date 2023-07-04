import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useMediaQuery, Box, Chip, Stack, Card, Divider } from '@mui/material';
import ImagesView from '../../../components/Main/study/ImagesView';
import img from '../../../assets/IntroDesign.png';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import getDayOfWeek from '../../../utils/getDayOfWeek';
import EditNDeleteBtn from '../../../components/Main/study/EditNDeleteBtn';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
    border-radius: 24px;
    background-color: #191919;
    @media (min-width: 1024px) {
        width: 65%;
        min-width: 1000px;
        margin: 60px auto 150px;
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
        height: '26px',
        fontSize: '16px',

        '& span': { fontWeight: 500, padding: '15px' }
    }
}));

const StudyContentCard = styled(Card)`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    padding: 25px 25px 40px;
    @media (min-width: 1024px) {
        padding: 30px 50px 60px;
    }
`;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
`;

const Title = styled(Box)`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 21.48px;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (min-width: 1024px) {
        font-size: 30px;
        margin-left: 15px;
        line-height: 25px;
    }
`;

const DateText = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    line-height: 0.9rem;
    margin-bottom: 2px;
    @media (min-width: 1024px) {
        margin-right: 15px;
    }
`;

const WebTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;
`;

const TitleDivider = styled.div`
    width: 100%;
    height: 0.5px;
    margin: 30px 0px 20px;
    background-color: rgba(255, 255, 255, 0.3);
`;

const StyledLocationIcon = styled(FmdGoodOutlinedIcon)`
    width: 14px;
    height: 16px;
    margin: 0px 8px 3px 0px;
    @media (min-width: 1024px) {
        width: 22px;
        height: 28px;
    }
`;

const LocationText = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    line-height: 0.9rem;
    display: flex;
    align-items: center;
    margin-bottom: 21px;
    @media (min-width: 1024px) {
        font-size: 14px;
    }
`;

const AttendanceCount = styled(Box)`
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 0.75rem;
    @media (min-width: 1024px) {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        margin-left: 10px;
    }
`;

const AttendanceCountNumber = styled(Box)`
    margin-left: 12px;
    font-size: 0.563rem;
    color: rgba(255, 255, 255, 0.5);
    @media (min-width: 1024px) {
        margin-left: 20px;
        font-size: 12px;
    }
`;

const AttendanceWrapper = styled(Box)`
    display: flex;
    line-height: 14.32px;
    margin-bottom: 10px;
    @media (min-width: 1024px) {
        line-height: 26px;
    }
`;

const TaskTitle = styled(Box)`
    font-weight: 700;
    font-size: 0.875rem;
    @media (min-width: 1024px) {
        font-size: 18px;
        margin-bottom: 5px;
    }
`;

const TaskName = styled(Box)`
    font-size: 0.75rem;
    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

const StyledContentContainer = styled(Box)`
    margin-bottom: 18px;
    @media (min-width: 1024px) {
        margin: 30px 0px 20px;
    }
`;

const ContentContainer = styled(Box)`
    font-size: 0.75rem;
    margin-bottom: 11px;
    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

const StyledContentBox = styled(Box)`
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 11px;
    @media (min-width: 1024px) {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        margin-left: 10px;
        margin-bottom: 20px;
    }
`;

const StyledImg = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 5px;
    @media (min-width: 1024px) {
        width: 320px;
        height: 320px;
    }
`;

const StyledStack = styled(Stack)({ justifyContent: 'left', flexWrap: 'wrap', width: '250px' });

export default function StudyContent() {
    const match1024 = useMediaQuery('(min-width:1024px)');
    const [cookies] = useCookies(['id']);
    const Task = [];
    const loc = useLocation();
    const {
        attendance,
        content,
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
                    {match1024 ? (
                        <>
                            <WebTitleContainer>
                                <Title>{title}</Title>
                                <DateText>
                                    {date} ({day}) {startTime}-{endTime}
                                </DateText>
                            </WebTitleContainer>
                            <TitleDivider />
                            <LocationText>
                                <StyledLocationIcon />
                                {location}
                            </LocationText>
                        </>
                    ) : (
                        <>
                            <Title>{title}</Title>
                            <DateText>
                                {date} ({day}) {startTime} - {endTime}
                            </DateText>
                            <LocationText>
                                <StyledLocationIcon />
                                {location}
                            </LocationText>
                        </>
                    )}
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
                    <StyledContentContainer>
                        <StyledContentBox>스터디 내용</StyledContentBox>
                        <ContentContainer>{content}</ContentContainer>
                    </StyledContentContainer>
                    <StyledContentContainer>
                        <StyledContentBox>스터디 자료</StyledContentBox>
                        {images.length > 0 ? (
                            <ImagesView imgFiles={images} />
                        ) : (
                            <StyledImg src={img} alt="스터디자료" />
                        )}
                    </StyledContentContainer>
                    <StyledContentContainer mb={'50px'}>
                        <StyledContentBox>스터디 과제</StyledContentBox>
                        <StyledStack direction="column" spacing={0.5}>
                            {Task &&
                                Task.map((item) => (
                                    <Box sx={{ mb: '10px' }} key={item.task}>
                                        <TaskTitle>{item.task}</TaskTitle>
                                        <TaskName>{item.name}</TaskName>
                                    </Box>
                                ))}
                        </StyledStack>
                    </StyledContentContainer>
                </StyledBox>
            </StudyContentCard>
        </StyledCard>
    );
}
