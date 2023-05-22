import React from 'react';
import { Box, Input } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled(Box)`
    margin-bottom: 18px;
`;

const Label = styled(Box)`
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 0.75rem;
`;

const StyledInput = styled(Input)`
    margin-bottom: 11px;
`;

export default function StudyContentInput({ setContent, content }) {
    return (
        <Container>
            <Label>스터디 내용</Label>
            <StyledInput
                multiline
                fullWidth
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
        </Container>
    );
}
