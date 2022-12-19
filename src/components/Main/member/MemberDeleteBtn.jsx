import * as React from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MemberDeleteBtn(_id) {
    const id = Object.values(_id)[0];
    const deleteEvent = async () => {
        await axios
            .delete(`http://localhost:8000/users/${id}`)
            .then((response) => console.log('delete', response));
    };
    return (
        <IconButton
            color="primary"
            aria-label="delete user"
            component="label"
            onClick={deleteEvent}
        >
            <DeleteIcon fontSize="small" />
        </IconButton>
    );
}
