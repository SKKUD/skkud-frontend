import React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStudyGroupsApi } from '../../../hooks/Study';
import styled from '@emotion/styled';

const StyledForm = styled('form')({
    width: '90%',
    margin: '0 auto',
    maxWidth: '600px'
});

const StyledTitle = styled('div')({
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 500,
    fontSize: '0.9rem',
    margin: '10px'
});

const StyledTextField = styled(TextField)({
    marginTop: '10px'
});

const StyledButton = styled(Button)({
    marginTop: '15px',
    textTransform: 'none'
});

export default function StudyGroupEdit(id) {
    const [studyGroups, , , updateStudyGroup] = useStudyGroupsApi();
    const [groupName, setName] = useState('');
    const [studyDay, setDay] = useState('');
    const [members, setMembers] = useState([]);
    const GroupId = id.id;

    useEffect(() => {
        for (let i in studyGroups) {
            if (GroupId === studyGroups[i]._id) {
                setName(studyGroups[i].groupName);
                setDay(studyGroups[i].studyDay);
                setMembers(studyGroups[i].members);
                break;
            }
        }
    }, [studyGroups]);

    const handleSubmit = () => {
        updateStudyGroup(
            {
                groupName: groupName,
                studyDay: studyDay,
                members: members
            },
            GroupId
        );
        window.location.reload();
    };

    return (
        <StyledForm encType="multipart/form-data">
            <StyledTitle>선택한 스터디 그룹 수정</StyledTitle>
            <StyledTextField
                fullWidth
                label="groupName"
                id="groupName"
                size="small"
                onChange={(e) => setName(e.target.value)}
                value={groupName || ''}
            />
            <StyledTextField
                fullWidth
                label="studyDay"
                id="studyDay"
                size="small"
                onChange={(e) => setDay(e.target.value)}
                value={studyDay || ''}
            />
            <StyledTextField
                fullWidth
                label="members"
                id="members"
                size="small"
                onChange={(e) => {
                    const tagsArray = e.target.value.split(',');
                    setMembers(tagsArray);
                }}
                value={members || ''}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <StyledButton
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={handleSubmit}
                >
                    Edit
                </StyledButton>
            </div>
        </StyledForm>
    );
}
