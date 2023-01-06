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
        fontSize: '0.6rem',
        boxSizing: 'border-box',
        '& span': {
            fontWeight: 700,
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
                <Box
                    sx={{ lineHeight: '14.32px', ml: '5px', fontWeight: 600, fontSize: '0.75rem' }}
                >
                    연결 링크
                </Box>
                <Box
                    sx={{
                        lineHeight: '14.32pxpx',
                        ml: '5px',
                        mt: '9px',
                        mb: '27px',
                        fontSize: '0.75rem',
                        textDecoration: 'underline'
                    }}
                >
                    {link}
                </Box>
                <Box
                    sx={{
                        lineHeight: '14.32px',
                        ml: '5px',
                        fontWeight: 600,
                        fontSize: '0.75rem'
                    }}
                >
                    참여한 사람들
                </Box>
                <Box
                    sx={{
                        lineHeight: '36.5px',
                        ml: '5px',
                        fontWeight: 900,
                        fontSize: '1.9rem',
                        overflow: 'scroll'
                    }}
                >
                    {link}
                </Box>
                <Box mt="3px">
                    <Box sx={{ padding: '0', ml: '5px', fontWeight: 600, fontSize: '0.75rem' }}>
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
