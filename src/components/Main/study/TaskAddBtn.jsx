import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';

export default function TaskAddBtn({ HandleAddTask }) {
    return (
        <IconButton color="primary" aria-label="edit" component="label" onClick={HandleAddTask}>
            <AddCircleOutlineIcon fontSize="small" />
        </IconButton>
    );
}