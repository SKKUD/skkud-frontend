import * as React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

const InnerCard = styled(Card)`
    height: 295px;
    border-radius: 25px;
    border: 0;
    box-sizing: border-box;
    background-image: ${({ mainimage }) => `url(${mainimage})`};
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;

    & > div {
        width: 100%;
        height: 94px;
        align-self: flex-end;
        background-color: #3a3a3a;
        padding-top: 16px;
        padding-left: 25px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .title-wrap {
        display: flex;
        align-items: center;
        line-height: 100%;
        margin-bottom: 12px;
    }

    .project-title {
        font-size: 1.375rem;
        font-weight: 700;
        margin-right: 12px;
    }

    .project-description {
        font-size: 0.625rem;
        font-weight: 400;
        margin-right: 12px;
    }

    .project-separator {
        height: 12px;
        width: 1px;
        background-color: #fff;
        margin: 0 12px;
    }
`;

export default function ProjectCard(project) {
    const { title, body, mainimage, tags, developPeriod } = project.project;

    return (
        <InnerCard mainimage={mainimage}>
            <div>
                <div className="title-wrap">
                    <div className="project-title">{title}</div>
                    <div className="project-separator" />
                    <div className="project-description">{body}</div>
                </div>
                <div className="project-description">개발 기간: {developPeriod}</div>
                <div className="project-description">
                    사용 기술: {tags && `${tags[0]}, ${tags[1]}, ${tags[2]} ...`}
                </div>
            </div>
        </InnerCard>
    );
}
