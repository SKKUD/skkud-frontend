import * as React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useUserPostDetailApi } from '../../../hooks/Member';

const SkillBtn = styled.button`
    height: 22px;
    border: 1px solid #00ffa8;
    border-radius: 33px;
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 18px;
    gap: 10px;
`;
export default function MemberCardDetail(projects) {
    const proj = projects.projects;
    const projectList = [];
    let projectCount = 0;
    if (proj) {
        console.log('proj', projects.projects);
        for (let i = 0; i < proj.length; i++) {
            if (proj[i] === null) {
                projectCount = i;
                break;
            }
            const [detail] = useUserPostDetailApi(proj[i]);
            projectList.push([detail.mainimage, detail._id, detail.tags, detail.title]);
        }
    }
    console.log('tag', projectList);
    return (
        <Card
            style={{
                width: '350px',
                marginTop: -25,
                borderRadius: 20,
                paddingTop: '40px',
                paddingBottom: '20px',
                paddingLeft: '8px',
                paddingRight: '8px',
                backgroundColor: '#303030',
                zIndex: '-1'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    marginTop: '10px',
                    textAlign: 'left'
                }}
            >
                <Typography sx={{ fontWeight: '700', fontSize: '0.75rem' }} variant="caption">
                    {' '}
                    진행한 프로젝트{' '}
                </Typography>
                <span style={{ fontSize: '0.563rem' }}> &nbsp; 총 {projectCount}개</span>
                <ImageList
                    style={{
                        display: 'grid',
                        gridAutoFlow: 'column'
                    }}
                >
                    {projectList.map((item) => (
                        <ImageListItem
                            key={item[1]}
                            style={{
                                borderRadius: '15px',
                                border: '1px solid red',
                                width: '125px',
                                height: '125px',
                                margin: '3px'
                            }}
                            // onClick={navigateToProject(item[1])}
                        >
                            <NavLink to={'/maintab/projectdetail/' + item[1]}>
                                <img
                                    src={item[0]}
                                    alt={item[3]}
                                    // onClick={console.log('click', item[1])}
                                />
                            </NavLink>
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography sx={{ fontWeight: '700', fontSize: '0.75rem' }} variant="caption">
                    {' '}
                    Skill Set
                </Typography>
                {projectList.map((item) => (
                    <SkillBtn key={item[1]}>{item[2]}</SkillBtn>
                ))}
            </Box>
        </Card>
    );
}
