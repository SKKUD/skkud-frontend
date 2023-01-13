import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import img from '../../../assets/introArt_black.jpeg';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function PostStudy() {
    // const [cookies] = useCookies(['id']);
    // // const [post] = useProjectPostApi();
    // // const [user] = useProjectUserApi();

    // console.log(location.state);
    // chip
    const attendance = ['dd', 'dd'];
    const task = ['dd', 'dd'];

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

    return (
        <>
            <Card sx={{ borderRadius: '24px', pb: '40px' }}>
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
                        title
                    </Box>
                    <div
                        style={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: '0.75rem',
                            lineHeight: '0.9rem',
                            marginBottom: '2px'
                        }}
                    >
                        studyTime.slice(0, 10)
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
                        location
                    </div>
                    <Box mb={'21px'}>
                        <Box sx={{ display: 'flex', lineHeight: '14.32px', marginBottom: '10px' }}>
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
                                총 attendance.length명
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
                            content
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
                        <img
                            src={img}
                            alt={'title'}
                            style={{ width: '160px', height: '160px', borderRadius: '5px' }}
                        />
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
                            {task &&
                                task.map((item) => (
                                    <div style={{ marginBottom: '10px' }}>
                                        <Box
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            item.task
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize: '0.75rem'
                                            }}
                                        >
                                            item.name
                                        </Box>
                                    </div>
                                ))}
                        </Stack>
                    </Box>
                </Box>
            </Card>
        </>
    );
}
