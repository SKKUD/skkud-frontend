import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function EditBtn(_id) {
    const { state } = _id;
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate(`/editproject/${state}`);
    };

    return (
        <IconButton
            color="primary"
            aria-label="edit post"
            component="label"
            onClick={() => {
                navigateToProject();
            }}
        >
            <EditIcon fontSize="small" />
        </IconButton>
    );
}
