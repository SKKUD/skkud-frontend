import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EditIcon from '@mui/icons-material/Edit';
import StudyGroupEdit from './StudyGroupEdit';
import StudyGroupDelete from './StudyGroupDelete';
import StudyGroupPost from './StudyGroupPost';
import styled from '@emotion/styled';

const FormCard = styled('div')({
    width: '100%',
    marginBottom: '20px',
    paddingBottom: '15px'
});

const BtnWrap = styled('div')({
    display: 'flex',
    justifyContent: 'end',
    margin: '10px'
});

export default function StudyGroupForm(id) {
    const [task, setTask] = useState('');
    const [open, setOpen] = useState(false);
    const GroupId = id.id;

    function SGEditBtn() {
        return (
            <IconButton
                color="primary"
                aria-label="edit"
                component="label"
                onClick={() => {
                    setTask('edit');
                    setOpen(true);
                }}
            >
                <EditIcon fontSize="small" />
            </IconButton>
        );
    }

    function SGDeleteBtn() {
        return (
            <IconButton
                color="primary"
                aria-label="delete"
                component="label"
                onClick={() => {
                    setTask('delete');
                    setOpen(true);
                }}
            >
                <DeleteIcon fontSize="small" />
            </IconButton>
        );
    }

    function SGPostBtn() {
        return (
            <IconButton
                color="primary"
                aria-label="delete"
                component="label"
                onClick={() => {
                    setTask('post');
                    setOpen(true);
                }}
            >
                <GroupAddIcon fontSize="small" />
            </IconButton>
        );
    }

    function SGFormCard(id) {
        return (
            <FormCard>
                {task === 'edit' ? (
                    <StudyGroupEdit id={id.id} />
                ) : task === 'delete' ? (
                    <StudyGroupDelete />
                ) : (
                    <StudyGroupPost />
                )}
            </FormCard>
        );
    }

    return (
        <div>
            <BtnWrap>
                <SGEditBtn />
                <SGDeleteBtn />
                <SGPostBtn />
            </BtnWrap>
            {open === true ? <SGFormCard id={GroupId} /> : null}
        </div>
    );
}
