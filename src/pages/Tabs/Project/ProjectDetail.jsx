import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { useProjectGetApi, useProjectUserApi } from '../../../hooks/Project';
import ProjectCard from '../../../components/Main/project/ProjectCard';
import DeleteBtn from '../../../components/Main/project/DeleteBtn';
import EditBtn from '../../../components/common/EditBtn';

const CardWrap = styled(Card)`
    border-radius: 24px;
    padding-bottom: 40px;

    @media (min-width: 1024px) {
        width: 60%;
        min-width: 900px;
        margin: 50px auto 100px;
    }
`;

const StyledEditButton = styled(Link)`
    text-decoration: none;
    display: contents;
    width: 100%;
`;

const DetailBox = styled(Box)`
    display: flex;
    flex-direction: column;
    padding-left: 21px;
    margin-top: 20px;
    @media (min-width: 1024px) {
        padding-left: 45px;
        margin-top: 40px;
    }
`;

const LinkLabel = styled(Box)`
    line-height: 14.32px;
    font-weight: 600;
    font-size: 0.75rem;

    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 24px;
    }
`;

const LinkWrap = styled(Box)`
    line-height: 14.32px;
    margin-top: 9px;
    margin-bottom: 27px;
    font-size: 0.75rem;
    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 20px;
    }
`;

const MemberListWrapper = styled.div`
    display: flex;
    line-height: 14.32px;
    flex-direction: column;
    @media (min-width: 1024px) {
        margin: 20px 0px;
    }
`;

const MemberListLabel = styled.div`
    display: flex;
`;

const MemberListTitle = styled.div`
    font-weight: 600;
    font-size: 0.75rem;
    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 24px;
    }
`;

const MemberListCount = styled.div`
    margin-left: 12px;
    font-size: 0.563rem;
    @media (min-width: 1024px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

const MemberListItem = styled.div`
    text-align: center;
    margin: 15px 10px 0px 0px;
`;

const MemberImageWrapper = styled.div`
    width: 125px;
    height: 125px;
    border-radius: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const MemberImage = styled.img`
    width: 132px;
    height: 132px;
    object-fit: cover;
`;

const MemberName = styled.div`
    font-size: 0.6rem;
    font-weight: 500;
    margin-top: 8px;
    @media (min-width: 1024px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

const MemberTrack = styled.div`
    font-size: 0.563rem;
    @media (min-width: 1024px) {
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
    }
`;

const MemberListContainer = styled.div`
    overflow: scroll;
    display: flex;
    margin-bottom: 10px;
    padding-bottom: 5px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const SkillChipLabel = styled(Box)`
    padding: 0;
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 5px;
    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 15px;
    }
`;

const ChipStack = styled(Stack)`
    justify-content: left;
    flex-wrap: wrap;
    width: 270px;
    margin-top: 12px;
    @media (min-width: 1024px) {
        width: 100%;
        margin-bottom: 30px;
    }
`;

const StyledChip = styled((props) => <Chip {...props} />)(() => ({
    border: '1.5px solid #00FFB0',
    height: '22px',
    fontSize: '0.75rem',
    boxSizing: 'border-box',
    padding: '5px',

    '& span': {
        fontWeight: 600,
        color: '#FFF'
    },

    '@media (min-width: 1024px)': {
        height: '26px',
        fontSize: '14px'
    }
}));

export default function ProjectDetail() {
    const [cookies] = useCookies(['id']);
    const [post] = useProjectGetApi();
    const [user] = useProjectUserApi();
    const { _id, title, body, images, mainimage, tags, developPeriod, link } = post;

    return (
        <CardWrap>
            {cookies.id ? (
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <StyledEditButton
                        to={`/maintab/project/edit/${_id}`}
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
                    </StyledEditButton>
                    <DeleteBtn state={_id} />
                </Box>
            ) : (
                ''
            )}
            <ProjectCard project={post} />
            <DetailBox>
                <LinkLabel>연결 링크</LinkLabel>
                <LinkWrap>
                    <a href={link} style={{ color: '#fff' }}>
                        {link}
                    </a>
                </LinkWrap>
                <MemberListWrapper>
                    <MemberListLabel>
                        <MemberListTitle>참여한 사람들</MemberListTitle>
                        <MemberListCount>총 {user.length}명</MemberListCount>
                    </MemberListLabel>
                    <MemberListContainer>
                        {user.map((member) => {
                            const name = member.username;
                            const img = member.image;
                            const track = member.track;
                            return (
                                <MemberListItem key={name}>
                                    <MemberImageWrapper>
                                        <MemberImage src={img} alt={name} />
                                    </MemberImageWrapper>
                                    <MemberName>{name}</MemberName>
                                    <MemberTrack>{track}</MemberTrack>
                                </MemberListItem>
                            );
                        })}
                    </MemberListContainer>
                </MemberListWrapper>
                <Box>
                    <SkillChipLabel> Skill Set</SkillChipLabel>
                    <ChipStack direction="row" spacing={1.2}>
                        {tags &&
                            tags.map((tag) => (
                                <StyledChip
                                    key={tag}
                                    label={tag}
                                    variant="outlined"
                                    color="primary"
                                />
                            ))}
                    </ChipStack>
                </Box>
            </DetailBox>
        </CardWrap>
    );
}
