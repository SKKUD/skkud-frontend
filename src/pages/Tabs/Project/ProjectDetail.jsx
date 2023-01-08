import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { useProjectPostApi, useProjectUserApi } from '../../../hooks/Project';
import ProjectCard from '../../../components/Main/project/ProjectCard';

export default function ProjectDetail() {
    const [post] = useProjectPostApi();
    const [user] = useProjectUserApi();
    const { tags, link } = post;

    console.log('참여한 유저 목록 : ');
    console.log(user);
    // chip

    const StyledChip = styled((props) => <Chip {...props} />)(() => ({
        border: '1.5px solid #00FFB0',
        height: '22px',
        fontSize: '0.75rem',
        boxSizing: 'border-box',
        padding: '5px',
        '& span': {
            fontWeight: 600,
            color: '#FFF'
        }
    }));

    return (
        <Card sx={{ borderRadius: '24px', pb: '40px' }}>
            <ProjectCard project={post} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    pl: '21px',
                    mt: '20px'
                }}
            >
                <Box sx={{ lineHeight: '14.32px', fontWeight: 600, fontSize: '0.75rem' }}>
                    연결 링크
                </Box>
                <Box
                    sx={{
                        lineHeight: '14.32pxpx',
                        mt: '9px',
                        mb: '27px',
                        fontSize: '0.75rem',
                        textDecoration: 'underline'
                    }}
                >
                    {link}
                </Box>
                <Box sx={{ display: 'flex', lineHeight: '14.32px' }}>
                    <Box
                        sx={{
                            fontWeight: 600,
                            fontSize: '0.75rem'
                        }}
                    >
                        참여한 사람들
                    </Box>
                    <Box sx={{ ml: '12px', fontSize: '0.563rem' }}>총 {user.length}명</Box>
                </Box>
                <Box
                    sx={{
                        overflow: 'scroll',
                        display: 'flex',
                        mb: '10px'
                    }}
                >
                    {user.map((member) => {
                        const name = member.username;
                        const img = member.image;
                        const track = member.track;
                        return (
                            <div style={{ textAlign: 'center', margin: '12px 10px 0px 0px' }}>
                                <div
                                    style={{
                                        width: '125px',
                                        height: '125px',
                                        borderRadius: '100%',
                                        backgroundColor: '#fff',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <img src={img} alt={name} />
                                </div>
                                <div
                                    style={{
                                        fontSize: '0.6rem',
                                        fontWeight: 500,
                                        marginTop: '8px'
                                    }}
                                >
                                    {name}
                                </div>
                                <div style={{ fontSize: '0.563rem' }}>{track}</div>
                            </div>
                        );
                    })}
                </Box>
                <Box mt="3px">
                    <Box sx={{ padding: '0', fontWeight: 600, fontSize: '0.75rem', mb: '5px' }}>
                        {' '}
                        Skill Set
                    </Box>

                    <Stack
                        direction="row"
                        spacing={1.2}
                        sx={{ justifyContent: 'left', flexWrap: 'wrap', width: '250px' }}
                    >
                        {tags &&
                            tags.map((tag) => (
                                <StyledChip
                                    key={tag}
                                    label={tag}
                                    variant="outlined"
                                    color="primary"
                                    style={{ margin: '7px 8px 0px 0px' }}
                                />
                            ))}
                    </Stack>
                </Box>
            </Box>
        </Card>
    );
}
