import * as React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import DeleteBtn from '../../../components/Main/project/DeleteBtn';
import EditBtn from '../../../components/Main/project/EditBtn';

export default function ProjectCard(project) {
    const [cookies] = useCookies(['id']);
    const projectPosts = { ...project };
    const { _id, title, body, images, mainimage, tags, developPeriod, link } = projectPosts.project;
    const Card2 = styled.div`
        height: 295px;
        border-radius: 25px;

        box-sizing: border-box;
        background-image: url(${mainimage});
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
    `;

    return (
        <Card sx={{ borderRadius: '5%', mb: 2 }}>
            {cookies.id ? (
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Link
                        to={`/maintab/editproject/${_id}`}
                        style={{
                            textDecoration: 'none',
                            display: 'contents',
                            width: '100%'
                        }}
                        state={{ _id, title, body, images, mainimage, tags, developPeriod, link }}
                    >
                        <EditBtn />
                    </Link>
                    <DeleteBtn state={_id} />
                </Box>
            ) : (
                ''
            )}
            <Card2>
                <div
                    style={{
                        width: '100%',
                        height: '94px',
                        alignSelf: 'end',
                        backgroundColor: '#3A3A3A',
                        paddingTop: '16px',
                        paddingLeft: '25px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: '100%',
                            marginBottom: '12px'
                        }}
                    >
                        <div style={{ fontSize: '1.375rem', fontWeight: 700 }}>{title}</div>
                        <div
                            style={{
                                height: '12px',
                                width: '1px',
                                backgroundColor: '#fff',
                                margin: '0 12px'
                            }}
                        />
                        <div style={{ fontSize: '0.625rem', fontWeight: 400 }}>{body}</div>
                    </div>
                    <div style={{ fontSize: '0.625rem', fontWeight: 400 }}>
                        개발 기간 : {developPeriod}
                    </div>
                    <div style={{ fontSize: '0.625rem', fontWeight: 400 }}>
                        사용 기술 : {tags && `${tags[0]}, ${tags[1]}, ${tags[2]} ...`}
                    </div>
                </div>
            </Card2>
        </Card>
    );
}
