import * as React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

export default function ProjectCard(project) {
    const projectPosts = { ...project };
    const { title, body, mainimage, tags, developPeriod } = projectPosts.project;
    const InnerCard = styled(Card)`
        height: 295px;
        border-radius: 25px;
        border: 0;
        box-sizing: border-box;
        background-image: url(${mainimage});
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
    `;

    return (
        <InnerCard>
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
        </InnerCard>
    );
}
