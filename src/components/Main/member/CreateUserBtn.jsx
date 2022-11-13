import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function CreateUserBtn() {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
            <Button color="primary" variant="outlined" size="small" sx={{ mb: 1.5 }}>
                Create User
            </Button>
        </Box>
    );
}
