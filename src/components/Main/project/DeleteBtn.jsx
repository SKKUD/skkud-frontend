import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useProjectDeleteApi } from '../../../hooks/Project';

export default function DeleteBtn(_id) {
    const [deleteProjectPost] = useProjectDeleteApi();
    const { state } = _id;
    const location = useLocation();
    const navigate = useNavigate();
    const navigateToProject = () => {
        if (location.pathname === '/maintab/project') {
            window.location.reload(true);
        } else {
            navigate('/maintab/project');
            window.location.reload(true);
        }
    };

    return (
        <IconButton
            color="primary"
            aria-label="delete post"
            component="label"
            onClick={() => {
                deleteProjectPost(state);
                navigateToProject();
            }}
        >
            <DeleteIcon fontSize="small" />
        </IconButton>
    );
}
