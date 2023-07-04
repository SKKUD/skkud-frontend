import React from 'react';
import { useState } from 'react';
import { useStudyGroupsApi } from '../../../hooks/Study';
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';
import StudyGroupCheckList from './StudyGroupCheckList';

const StyledWrapper = styled(Box)({
    width: '90%',
    margin: '0 auto',
    maxWidth: '600px'
});

const StyledText = styled(Box)({
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 500,
    fontSize: '0.9rem',
    margin: '10px'
});

const StyledButton = styled(Button)({
    mt: 1.5,
    textTransform: 'none'
});

export default function StudyGroupDelete() {
    const [studyGroups, , , , deleteStudyGroup] = useStudyGroupsApi();

    const [checked, setChecked] = useState('');

    const handleToggle = (id) => () => {
        const currentIndex = checked.indexOf(id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.pop();
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleSubmit = () => {
        deleteStudyGroup(checked[0]);
        window.location.reload(true);
    };
    return (
        <StyledWrapper>
            <StyledText>삭제할 스터디 그룹 선택</StyledText>
            <StudyGroupCheckList
                studyGroups={studyGroups}
                handleToggle={handleToggle}
                checked={checked}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <StyledButton
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={handleSubmit}
                >
                    Delete
                </StyledButton>
            </Box>
        </StyledWrapper>
    );
}
