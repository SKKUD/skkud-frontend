import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function PostBtn(props) {
    const { content } = props;

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
            <Button
                color="primary"
                variant="contained"
                size="small"
                sx={{ mb: 1.5, textTransform: 'none' }}
            >
                {content}
            </Button>
        </Box>
    );
}
