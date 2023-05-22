import * as React from 'react';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useStudiesApi, useStudyGroupsApi } from '../../../hooks/Study.jsx';
import StudyCard from '../../../components/Main/study/StudyCard.jsx';
import PostBtn from '../../../components/Main/project/PostBtn';
import StudyGroupForm from '../../../components/Main/study/StudyGroupForm.jsx';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
    margin-bottom: 10px;
    border-radius: 15px;
`;
const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '21px',
    marginTop: '21px'
});

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
    }
});

const StyledBox = styled(Box)`
    display: flex;
    justify-content: end;
`;

const StyledLink = styled(Link)({
    textDecoration: 'none',
    display: 'contents',
    width: '100%'
});

export default function TabStudy() {
    const [cookies] = useCookies(['id']);
    const [studyGroups] = useStudyGroupsApi();
    const [studies, filterStudies, study] = useStudiesApi();
    const [selectedGroup, setGroup] = useState('');

    useEffect(() => {
        studies && filterStudies(selectedGroup);
        if (studyGroups.length > 0) {
            setGroup(studyGroups[0]._id);
        }
    }, [studyGroups]);

    return (
        <>
            {cookies.id ? (
                <StyledCard>
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

            {cookies.id ? (
                <StyledBox>
                    <StyledLink to={`/maintab/study/post`} state={{ id: `${selectedGroup}` }}>
                        <PostBtn content="+ Post" />
                    </StyledLink>
                </StyledBox>
            ) : null}

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
        </>
    );
}
