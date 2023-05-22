import React from 'react';
import { Box, Input } from '@mui/material';

export default function StudyTitleInput({ setTitle, title }) {
    return (
        <Box
            style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                lineHeight: '21.48px',
                marginBottom: '8px',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 600,
                    fontSize: '0.75rem'
                }}
            >
                스터디 제목
            </Box>
            <Input fullWidth onChange={(e) => setTitle(e.target.value)} value={title} />
        </Box>
    );
}
