import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteBtn(_id) {
    const { state } = _id;
    const navigate = useNavigate();
    const navigateToProject = () => {
<<<<<<< HEAD
        navigate('/project');
=======
        navigate('/maintab/project');
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
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
