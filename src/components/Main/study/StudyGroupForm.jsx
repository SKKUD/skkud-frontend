import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import StudyGroupEdit from './StudyGroupEdit';
import StudyGroupDelete from './StudyGroupDelete';
import StudyGroupPost from './StudyGroupPost';

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
                    setOpen(!open);
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
                    setOpen(!open);
                }}
                // onClick={() => {
                //     const deleteEvents = async () => {
                //         await axios.delete(`http://3.38.103.20:8000/posts/${state}`);
                //     };
                //     deleteEvents();
                //     navigateToProject();
                // }}
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
                    setOpen(!open);
                }}
                // onClick={() => {
                //     const deleteEvents = async () => {
                //         await axios.delete(`http://3.38.103.20:8000/posts/${state}`);
                //     };
                //     deleteEvents();
                //     navigateToProject();
                // }}
            >
                <GroupAddIcon fontSize="small" />
            </IconButton>
        );
    }

    function SGFormCard(id) {
        return (
            <Card sx={{ width: '100%', mb: '20px', pb: '15px' }}>
                {task === 'edit' ? (
                    <StudyGroupEdit id={id.id} />
                ) : task === 'delete' ? (
                    <StudyGroupDelete />
                ) : (
                    <StudyGroupPost />
                )}
            </Card>
        );
    }
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'end',
                    margin: '10px'
                }}
            >
                <SGEditBtn />
                <SGDeleteBtn />
                <SGPostBtn />
            </div>
            {open === true ? <SGFormCard id={GroupId} /> : null}
        </div>
    );
}
