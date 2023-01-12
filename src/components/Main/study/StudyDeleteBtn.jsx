import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function StudyDeleteBtn(_id) {
    const { state } = _id;

    const navigate = useNavigate();
    const navigateToStudy = () => {
        navigate('/maintab/study');
    };

    return (
        <IconButton
            color="primary"
            aria-label="delete post"
            component="label"
            onClick={() => {
                const deleteEvents = async () => {
                    await axios.delete(`http://localhost:8000/study/studies/${state}`);
                };
                deleteEvents();
                navigateToStudy();
            }}
        >
            <DeleteIcon fontSize="small" />
        </IconButton>
    );
}