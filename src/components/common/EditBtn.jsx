import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function EditBtn() {
    return (
        <IconButton color="primary" aria-label="edit post" component="label">
            <EditIcon fontSize="small" />
        </IconButton>
    );
}
