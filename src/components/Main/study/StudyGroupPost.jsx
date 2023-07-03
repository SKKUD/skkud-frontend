import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStudyGroupsApi } from '../../../hooks/Study';
import styled from '@emotion/styled';

const StyledForm = styled('form')({
    width: '90%',
    margin: '0 auto',
    maxWidth: '600px'
});

const Title = styled('div')({
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 500,
    fontSize: '0.9rem',
    margin: '10px'
});

const BtnWrap = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px'
});

const StyledBtn = styled(Button)({ textTransform: 'none' });

export default function StudyGroupPost() {
    const [, , createStudyGroup, ,] = useStudyGroupsApi();
    const [groupName, setName] = useState('');
    const [studyDay, setDay] = useState('');
    const [members, setMembers] = useState([]);

    const handleSubmit = () => {
        createStudyGroup({
            groupName: groupName,
            studyDay: studyDay,
            members: members
        });
        window.location.reload();
    };

    return (
        <StyledForm encType="multipart/form-data">
            <Title>새로운 스터디 그룹 생성</Title>
            <TextField
                fullWidth
                label="groupName"
                id="groupName"
                size="small"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                fullWidth
                label="studyDay"
                id="studyDay"
                size="small"
                sx={{ marginTop: '10px' }}
                onChange={(e) => setDay(e.target.value)}
            />
            <TextField
                fullWidth
                label="members"
                id="members"
                size="small"
                sx={{ marginTop: '10px' }}
                onChange={(e) => {
                    const tagsArray = e.target.value.split(',');
                    setMembers(tagsArray);
                }}
            />
            <BtnWrap>
                <StyledBtn color="primary" variant="contained" size="small" onClick={handleSubmit}>
                    Create
                </StyledBtn>
            </BtnWrap>
        </StyledForm>
    );
}
