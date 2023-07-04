import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import { useUserPostDetailApi } from '../../../hooks/Member';
import { useUserSkillsApi } from '../../../hooks/Member';

const StyledCard = styled(Card)`
    width: 342.5px;
    margin: 0 auto;
    margin-top: -25px;
    border-radius: 20px;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: #303030;
    z-index: -1;
    @media (min-width: 1024px) {
        margin-left: 0;
        width: 97%;
        padding: 30px;
    }
`;

const ProjectList = styled.div`
    width: 100%;
    margin-top: 10px;
    text-align: left;
`;

const ProjectTitle = styled(Typography)`
    font-weight: 700;
    font-size: 0.75rem;
    @media (min-width: 1024px) {
        font-size: 16px;
        font-weight: 600;
    }
`;

const ProjectCount = styled.span`
    font-size: 0.563rem;
    @media (min-width: 1024px) {
        font-size: 12px;
        opacity: 0.8;
    }
`;

const StyledImageList = styled(ImageList)`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill);
    justify-content: start;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const StyledImg = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 15px;
    margin: 3px;
    object-fit: cover;
`;

const SkillSet = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
`;

const SkillBtn = styled.div`
    width: auto;
    border: 1px solid #00ffa8;
    border-radius: 33px;
    background-color: transparent;
    color: white;
    gap: 10px;
    margin: 3px;
    padding: 1px 16px;

    @media (min-width: 1024px) {
        padding: 1.5px 18px;
        font-weight: 600;
    }
`;

export default function MemberCardDetail(props) {
    const proj = props.projects;
    let projectList = [];

    if (proj) {
        for (let i = 0; i < proj.length; i++) {
            const [detail] = useUserPostDetailApi(proj[i]);
            if (detail !== null) {
                projectList.push([detail.mainimage, detail._id, detail.tags, detail.title]);
            }
            projectList = [...new Set(projectList.map(JSON.stringify))].map(JSON.parse);
        }
    }

    const [userDetail] = useUserSkillsApi(props.id);

    return (
        <StyledCard>
            <ProjectList>
                <ProjectTitle variant="caption">진행한 프로젝트</ProjectTitle>
                <ProjectCount>&nbsp; 총 {projectList.length}개</ProjectCount>
                <StyledImageList>
                    {projectList.map((item) => (
                        <NavLink key={item[1]} to={`/maintab/projectdetail/${item[1]}`}>
                            <StyledImg key={item[1]} src={item[0]} alt={item[1]} />
                        </NavLink>
                    ))}
                </StyledImageList>
            </ProjectList>
            <ProjectList>
                <ProjectTitle variant="caption">Skill Set</ProjectTitle>
                <SkillSet>
                    {userDetail.map((item) => (
                        <SkillBtn key={item}>{item}</SkillBtn>
                    ))}
                </SkillSet>
            </ProjectList>
        </StyledCard>
    );
}
