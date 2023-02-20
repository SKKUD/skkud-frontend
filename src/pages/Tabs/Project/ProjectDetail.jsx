import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { useProjectPostApi, useProjectUserApi } from '../../../hooks/Project';
import ProjectCard from '../../../components/Main/project/ProjectCard';
import DeleteBtn from '../../../components/Main/project/DeleteBtn';
import EditBtn from '../../../components/common/EditBtn';

export default function ProjectDetail() {
    const [cookies] = useCookies(['id']);
    const [post] = useProjectPostApi();
    const [user] = useProjectUserApi();
    const { _id, title, body, images, mainimage, tags, developPeriod, link } = post;

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
            {cookies.id ? (
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Link
                        to={`/maintab/editproject/${_id}`}
                        style={{
                            textDecoration: 'none',
                            display: 'contents',
                            width: '100%'
                        }}
                        state={{
                            _id,
                            body,
                            title,
                            images,
                            mainimage,
                            tags,
                            developPeriod,
                            link
                        }}
                    >
                        <EditBtn />
                    </Link>
                    <DeleteBtn state={_id} />
                </Box>
            ) : (
                ''
            )}
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
                        fontSize: '0.75rem'
                    }}
                >
                    <a href={link} style={{ color: '#fff' }}>
                        {link}
                    </a>
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
                        mb: '10px',
                        pb: '5px',
                        '&::-webkit-scrollbar': { display: 'none' }
                    }}
                >
                    {user.map((member) => {
                        const name = member.username;
                        const img = member.image;
                        const track = member.track;
                        return (
                            <div
                                style={{ textAlign: 'center', margin: '12px 10px 0px 0px' }}
                                key={name}
                            >
                                <div
                                    style={{
                                        width: '125px',
                                        height: '125px',
                                        borderRadius: '100%',
                                        backgroundColor: '#fff',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={name}
                                        style={{
                                            width: '132px',
                                            height: '132px',
                                            objectFit: 'cover'
                                        }}
                                    />
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
                <Box>
                    <Box sx={{ padding: '0', fontWeight: 600, fontSize: '0.75rem', mb: '5px' }}>
                        {' '}
                        Skill Set
                    </Box>

                    <Stack
                        direction="row"
                        spacing={1.2}
                        sx={{ justifyContent: 'left', flexWrap: 'wrap', width: '270px' }}
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
