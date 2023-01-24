import * as React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';

import { useUserPostDetailApi } from '../../../hooks/Member';
import { useUserSkillsApi } from '../../../hooks/Member';

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
    margin: 3px;
`;
export default function MemberCardDetail(props) {
    const proj = props.projects;
    let projectList = [];

    if (proj) {
        for (let i = 0; i < proj.length; i++) {
            const [detail] = useUserPostDetailApi(proj[i]);
            if (detail !== null) {
                projectList.push([detail.mainimage, detail._id, detail.tags, detail.title]);
                // projectCount += 1;
            }
            projectList = [...new Set(projectList.map(JSON.stringify))].map(JSON.parse);
        }
    }

    const [userDetail] = useUserSkillsApi(props.id);

    return (
        <Card
            style={{
                width: '342.5px',
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
                <span style={{ fontSize: '0.563rem' }}> &nbsp; 총 {projectList.length}개</span>
                <ImageList
                    style={{
                        display: 'grid',
                        gridAutoFlow: 'column',
                        gridTemplateColumns: 'repeat(auto-fill)',
                        justifyContent: 'start'
                    }}
                >
                    {projectList.map((item) => (
                        <NavLink key={item[1]} to={'/maintab/projectdetail/' + item[1]}>
                            <img
                                key={item[1]}
                                src={item[0]}
                                alt={item[1]}
                                style={{
                                    width: '125px',
                                    height: '125px',
                                    borderRadius: '15px',
                                    margin: '3px',
                                    objectFit: 'cover'
                                }}
                            />
                        </NavLink>
                    ))}
                </ImageList>
                <Typography sx={{ fontWeight: '700', fontSize: '0.75rem' }} variant="caption">
                    {' '}
                    Skill Set
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {userDetail.map((item) => (
                        <SkillBtn key={item}>{item}</SkillBtn>
                    ))}
                </div>
            </Box>
        </Card>
    );
}
