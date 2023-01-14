import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStudyGroupsApi } from '../../../hooks/Study';

export default function StudyGroupPost() {
    const [studyGroups, setStudyGroups, createStudyGroup, updateStudyGroup, deleteStudyGroup] =
        useStudyGroupsApi();
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
        <form
            encType="multipart/form-data"
            style={{
                width: '90%',
                margin: '0 auto'
            }}
        >
            <div
                style={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    margin: '10px'
                }}
            >
                새로운 스터디 그룹 생성
            </div>
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    sx={{ mt: 1.5, textTransform: 'none' }}
                    onClick={handleSubmit}
                >
                    Create
                </Button>
            </div>
        </form>
    );
}
