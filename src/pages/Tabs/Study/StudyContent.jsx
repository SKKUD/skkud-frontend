import React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import StudyDeleteBtn from '../../../components/Main/study/StudyDeleteBtn';
import EditBtn from '../../../components/common/EditBtn';
import img from '../../../assets/introArt_black.jpeg';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function StudyContent() {
    const [cookies] = useCookies(['id']);
    // const [Task, setTask] = useState([]);
    const Task = [];
    // const [post] = useProjectPostApi();
    // const [user] = useProjectUserApi();

    const loc = useLocation();
    const {
        attendance,
        content,
        groupId,
        location,
        studyTime,
        taskContents,
        taskNames,
        title,
        _id,
        images
    } = loc.state;

    for (let i = 0; i < taskContents.length; i++) {
        Task.push({ task: taskContents[i], name: taskNames[i] });
    }

    // chip

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

    function ViewImages({ imgFiles }) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    overflowX: 'scroll',
                    alignItems: 'center',

                    boxSizing: 'border-box',
                    height: '180px'
                }}
            >
                {imgFiles.map((url) => {
                    return (
                        <Box
                            sx={{
                                flex: '0 0 auto',
                                width: '160px',
                                height: '160px',
                                borderRadius: '5px',
                                overflow: 'hidden',
                                mr: '10px'
                            }}
                            key={url}
                        >
                            <img
                                alt={url}
                                src={url}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    );
                })}
            </Box>
        );
    }

    return (
        <Card sx={{ borderRadius: '24px', backgroundColor: '#1c1c1c' }}>
            {cookies.id ? (
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <Link
                        to={`/maintab/study/edit/${_id}`}
                        style={{
                            textDecoration: 'none',
                            display: 'contents',
                            width: '100%'
                        }}
                        state={{
                            attendance,
                            content,
                            groupId,
                            location,
                            studyTime,
                            taskContents,
                            taskNames,
                            title,
                            _id,
                            images
                        }}
                    >
                        <EditBtn />
                    </Link>
                    <StudyDeleteBtn state={_id} />
                </div>
            ) : (
                ''
            )}

            <Card sx={{ borderRadius: '24px', pb: '40px', pt: '8px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pl: '21px',
                        mt: '20px'
                    }}
                >
                    <Box
                        style={{
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            lineHeight: '21.48px',
                            marginBottom: '8px'
                        }}
                    >
                        {title}
                    </Box>
                    <div
                        style={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: '0.75rem',
                            lineHeight: '0.9rem',
                            marginBottom: '2px'
                        }}
                    >
                        studytime
                    </div>
                    <div
                        style={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: '0.75rem',
                            lineHeight: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '21px'
                        }}
                    >
                        <FmdGoodOutlinedIcon
                            sx={{ width: '14px', height: '16px', margin: '0px 8px 3px 0px' }}
                        />
                        {location}
                    </div>
                    <Box mb={'21px'}>
                        <Box
                            sx={{
                                display: 'flex',
                                lineHeight: '14.32px',
                                marginBottom: '10px'
                            }}
                        >
                            <Box
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem'
                                }}
                            >
                                참여자
                            </Box>
                            <Box
                                sx={{
                                    ml: '12px',
                                    fontSize: '0.563rem',
                                    color: 'rgba(255, 255, 255, 0.5)'
                                }}
                            >
                                총 {attendance.length}명
                            </Box>
                        </Box>
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
                        <ViewImages imgFiles={images} />
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
                                        <Box
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            {item.task}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize: '0.75rem'
                                            }}
                                        >
                                            {item.name}
                                        </Box>
                                    </div>
                                ))}
                        </Stack>
                    </Box>
                </Box>
            </Card>
        </Card>
    );
}
