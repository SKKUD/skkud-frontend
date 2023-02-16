import React from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteBtn(_id) {
    const { state } = _id;
    const location = useLocation();
    const navigate = useNavigate();
    const navigateToProject = () => {
        if (location.pathname === '/maintab/project') {
            window.location.reload();
        } else {
            navigate('/maintab/project');
            window.location.reload();
        }
    };

    return (
        <IconButton
            color="primary"
            aria-label="delete post"
            component="label"
            onClick={() => {
                const deleteEvents = async () => {
                    await axios.delete(`http://localhost:8000/posts/${state}`);
                };
                deleteEvents();
                navigateToProject();
            }}
        >
            <DeleteIcon fontSize="small" />
        </IconButton>
    );
}
