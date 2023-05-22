import React from 'react';
import { Box, Input } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled(Box)`
    margin-bottom: 21px;
`;

const Label = styled(Box)`
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 0.75rem;
`;

const Description = styled(Box)`
    margin-left: 12px;
    font-size: 0.563rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 18px;
`;

const StyledInput = styled(Input)`
    & .MuiInputBase-inputMultiline {
        line-height: 14.32px;
    }
`;

export default function AttendantInput({ setAtd, attendance }) {
    const handleInputChange = (e) => {
        const tagsArray = e.target.value.split(',');
        setAtd(tagsArray);
    };

    return (
        <Container mb="21px">
            <Box sx={{ display: 'flex' }}>
                <Label>참여자</Label>
                <Description>띄어쓰기 없이 ,로 구분하여 입력해주세요.</Description>
            </Box>
            <StyledInput multiline fullWidth onChange={handleInputChange} value={attendance} />
        </Container>
    );
}
