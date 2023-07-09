import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, useMediaQuery } from '@mui/material';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useStudiesApi, useStudyGroupsApi } from '../../../hooks/Study.jsx';
import StudyCard from '../../../components/Main/study/StudyCard.jsx';
import StudyGroupForm from '../../../components/Main/study/StudyGroupForm.jsx';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import styled from '@emotion/styled';

const Container = styled.div`
    @media (min-width: 1024px) {
        width: 75%;
        min-width: 1000px;
        margin: 60px auto 150px;
    }
`;

const Warn = styled.div`
    opacity: 0.6;
    margin: 5px;
    margin-left: 15px;
    word-break: keep-all;
    font-size: 0.9rem;
    @media (min-width: 1024px) {
        margin-left: 5px;
    }
`;

const Header = styled.div`
    color: #00ffa8;
    font-size: 60px;
    font-weight: 900;
    line-height: 104.836%;
`;

const StyledCard = styled(Card)`
    margin-bottom: 10px;
    border-radius: 15px;
    padding-top: 5px;
    @media (min-width: 1024px) {
        padding: 30px 30px 0px;
    }
`;
const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 21px;
    margin-top: 21px;

    @media (min-width: 1024px) {
        justify-content: flex-start;
        margin: 20px 0px 30px;
    }
`;

const StyledToggleButton = styled(ToggleButton)({
    padding: '4px 18px',
    height: '22px',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'none',
    border: 'none',
    span: {
        borderRadius: '33px',
        border: '1px solid #00FFA8'
    },
    '&.Mui-selected, &.Mui-selected:hover, &.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
        borderRadius: '33px'
    },
    p: {
        fontSize: '0.7rem',
        margin: '0px',
        fontWeight: '600'
    },
    '@media (min-width: 1024px)': {
        padding: '6px 30px',
        height: '28px',
        fontSize: '14px',
        marginRight: '15px'
    }
});

const StyledBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
    @media (min-width: 1024px) {
        justify-content: space-between;
        margin-bottom: 30px;
    }
`;

const StyledLink = styled(Link)({
    textDecoration: 'none',
    display: 'contents',
    width: '100%'
});

const PostButton = styled(Button)`
    width: 90px;
    height: 35px;
    margin-top: 10px;
    border-radius: 10px;
    @media (min-width: 1024px) {
        width: 100px;
    }
`;

export default function TabStudy() {
    const [cookies] = useCookies(['id']);
    const [studyGroups] = useStudyGroupsApi();
    const [studies, filterStudies, study] = useStudiesApi();
    const [selectedGroup, setGroup] = useState('');
    const match1024 = useMediaQuery('(min-width:1024px)');

    useEffect(() => {
        studies && filterStudies(selectedGroup);
        if (studyGroups.length > 0) {
            setGroup(studyGroups[0]._id);
        }
    }, [studies, studyGroups]);

    return (
        <Container>
            {cookies.id ? (
                match1024 ? (
                    <StyledBox>
                        <Header>Our Study Groups</Header>
                        <StyledLink to={`/maintab/study/post`} state={{ id: `${selectedGroup}` }}>
                            <PostButton variant="contained">+ Post</PostButton>
                        </StyledLink>
                    </StyledBox>
                ) : (
                    <StyledBox>
                        <StyledLink to={`/maintab/study/post`} state={{ id: `${selectedGroup}` }}>
                            <PostButton variant="contained">+ Post</PostButton>
                        </StyledLink>
                    </StyledBox>
                )
            ) : (
                match1024 && <Header>Our Study Groups</Header>
            )}

            {cookies.id ? (
                <StyledCard>
                    <Warn> 스터디 그룹을 클릭 후 해당 스터디의 게시물을 작성하세요.</Warn>
                    <StudyGroupForm id={selectedGroup} />
                    <StyledToggleButtonGroup color="mint" value={selectedGroup} exclusive>
                        {studyGroups.map((group) => (
                            <StyledToggleButton
                                variant="outlined"
                                key={group._id}
                                value={group._id}
                                onClick={() => {
                                    filterStudies(group._id);
                                    setGroup(group._id);
                                }}
                            >
                                {group.groupName}
                            </StyledToggleButton>
                        ))}
                    </StyledToggleButtonGroup>
                </StyledCard>
            ) : (
                <StyledToggleButtonGroup color="mint" value={selectedGroup} exclusive>
                    {studyGroups.map((group) => (
                        <StyledToggleButton
                            variant="outlined"
                            key={group._id}
                            value={group._id}
                            onClick={() => {
                                filterStudies(group._id);
                                setGroup(group._id);
                            }}
                        >
                            {group.groupName}
                        </StyledToggleButton>
                    ))}
                </StyledToggleButtonGroup>
            )}
            <div>
                {study &&
                    study
                        .slice(0)
                        .reverse()
                        .map((item) => (
                            <StyledLink
                                to={`/maintab/study/${item._id}`}
                                state={item}
                                key={item._id}
                            >
                                <StudyCard props={item} />
                            </StyledLink>
                        ))}
            </div>
        </Container>
    );
}
