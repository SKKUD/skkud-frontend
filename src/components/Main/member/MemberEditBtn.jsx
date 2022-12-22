import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function MemberEditBtn(_id) {
    const id = Object.values(_id)[0];
    const navigate = useNavigate();
    const navigateToMemberEdit = () => {
        navigate(`/edituser/${id}`);
    };

    return (
        <IconButton
            color="primary"
            aria-label="edit post"
            component="label"
            onClick={() => {
                navigateToMemberEdit();
            }}
        >
            <EditIcon fontSize="small" />
        </IconButton>
    );
}
