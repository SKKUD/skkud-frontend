import * as React from 'react';
import { useContext, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MemberDeleteBtn from './MemberDeleteBtn';
import { MemberEditBtn } from './MemberEditBtn';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../../context/UserContext';
import { useUserPostDetailApi } from '../../../hooks/Member';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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

export default function MemberCard({
    id,
    name,
    bio,
    img,
    email,
    insta,
    engname,
    otherLinks,
    major,
    projects
}) {
    const { user } = useContext(UserContext);
    const [cookies] = useCookies(['id']);
    const [isVisible, setIsVisible] = useState(false);
    const projectList = [];
    let projectCount = 0;
    const navigate = useNavigate();
    const navigateToProject = (index) => {
        console.log('index', index);
        // navigate(`/maintab/projectdetail/{index}`);
    };
    if (projects) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i] === null) {
                projectCount = i;
                break;
            }
            const [detail] = useUserPostDetailApi(projects[i]);
            projectList.push([detail.mainimage, detail._id, detail.tags, detail.title]);
        }
    }
    console.log('tag', projectList);
    return (
        <>
            <ButtonBase
                sx={{ width: 350, display: 'flex', flexDirection: 'column' }}
                onClick={() => setIsVisible(!isVisible)}
            >
                <Card
                    key={id}
                    sx={{ maxWidth: 350 }}
                    style={{
                        marginTop: 13,
                        borderRadius: 20,
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        backgroundColor: '#3A3A3A'
                    }}
                >
                    {cookies.id ? (
                        <div style={{ textAlign: 'right' }}>
                            <MemberDeleteBtn _id={id} />
                            <MemberEditBtn _id={id} />
                        </div>
                    ) : null}
                    <Grid container spacing={1}>
                        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                            <CardMedia
                                sx={{ flexDirection: 'row' }}
                                component="img"
                                image={img}
                                alt={name}
                                style={{
                                    borderRadius: '150px',
                                    width: '120px',
                                    height: '120px',
                                    marginRight: '10px'
                                }}
                            />
                        </Grid>
                        <Grid item xs={1} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs sx={{ textAlign: 'left' }}>
                                    <Grid container spacing={1} columns={1} width={200}>
                                        <Grid item xs={12}>
                                            <Typography
                                                gutterBottom
                                                variant="button"
                                                align="center"
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                {name}&nbsp;&nbsp;| &nbsp;
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="caption"
                                                align="left"
                                                flex-wrap
                                            >
                                                {engname}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography gutterBottom variant="body2">
                                                "{bio}"
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography
                                                    sx={{ fontWeight: 'bold' }}
                                                    variant="caption"
                                                >
                                                    MAIL
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="caption">{email}</Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography
                                                    sx={{ fontWeight: 'bold' }}
                                                    variant="caption"
                                                >
                                                    WEB
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="caption">
                                                    {otherLinks}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography
                                                    sx={{ fontWeight: 'bold' }}
                                                    variant="caption"
                                                >
                                                    MAJOR
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="caption">{major}</Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography
                                                    sx={{ fontWeight: 'bold' }}
                                                    variant="caption"
                                                >
                                                    INSTA
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="caption"> {insta}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </ButtonBase>
            {isVisible ? (
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
                        <Typography
                            sx={{ fontWeight: '700', fontSize: '0.75rem' }}
                            variant="caption"
                        >
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
                        <Typography
                            sx={{ fontWeight: '700', fontSize: '0.75rem' }}
                            variant="caption"
                        >
                            {' '}
                            Skill Set
                        </Typography>
                        {projectList.map((item) => (
                            <SkillBtn key={item[1]}>{item[2]}</SkillBtn>
                        ))}
                    </Box>
                </Card>
            ) : null}
        </>
    );
}

MemberCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    engname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    otherLinks: PropTypes.array.isRequired,
    insta: PropTypes.string.isRequired
};
