import React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStudyGroupsApi } from '../../../hooks/Study';

export default function StudyGroupEdit(id) {
    const [studyGroups, setStudyGroups, createStudyGroup, updateStudyGroup, deleteStudyGroup] = // eslint-disable-line no-unused-vars
        useStudyGroupsApi();
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
                선택한 스터디 그룹 수정
            </div>
            <TextField
                fullWidth
                label="groupName"
                id="groupName"
                size="small"
                onChange={(e) => setName(e.target.value)}
                value={groupName || ''}
            />
            <TextField
                fullWidth
                label="studyDay"
                id="studyDay"
                size="small"
                sx={{ marginTop: '10px' }}
                onChange={(e) => setDay(e.target.value)}
                value={studyDay || ''}
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
                value={members || ''}
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
