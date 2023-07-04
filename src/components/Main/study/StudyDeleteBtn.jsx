import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStudiesApi } from '../../../hooks/Study';

export default function StudyDeleteBtn({ id }) {
    const [, , , , , deleteStudy] = useStudiesApi();
    const navigate = useNavigate();
    const navigateToStudy = () => {
        navigate('/maintab/study');
        window.location.reload(true);
    };

    return (
        <IconButton
            color="primary"
            aria-label="delete post"
            component="label"
            onClick={() => {
                deleteStudy(id);
                navigateToStudy();
            }}
        >
            <DeleteIcon fontSize="small" />
        </IconButton>
    );
}
