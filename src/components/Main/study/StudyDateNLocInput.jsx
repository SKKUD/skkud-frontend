import React from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Stack, Box } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled(Box)`
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    line-height: 0.9rem;
    margin: 20px 0;
    width: 280px;
`;

const StyledTextField = styled(TextField)`
    && {
        width: 100%;
    }
`;

const StyledDateTimePicker = styled(DateTimePicker)`
    && {
        width: 100%;
    }
`;

const StyledInputAdornment = styled(InputAdornment)`
    && {
        margin: 0px 8px 3px 0px;
    }
`;

const StyledIcon = styled(FmdGoodOutlinedIcon)`
    && {
        width: 14px;
        height: 16px;
    }
`;

export default function StudyDateNLocInput({
    studyTimeStart,
    handleChangeStart,
    studyTimeEnd,
    handleChangeEnd,
    location,
    setLocation
}) {
    return (
        <Container>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={2}>
                    <StyledDateTimePicker
                        label="스터디 시작 시간"
                        value={studyTimeStart}
                        onChange={handleChangeStart}
                        renderInput={(params) => (
                            <StyledTextField {...params} size="small" variant="standard" />
                        )}
                    />
                    <StyledDateTimePicker
                        label="스터디 종료 시간"
                        value={studyTimeEnd}
                        onChange={handleChangeEnd}
                        renderInput={(params) => (
                            <StyledTextField {...params} size="small" variant="standard" />
                        )}
                    />
                    <StyledTextField
                        label="location"
                        size="small"
                        fullWidth
                        variant="standard"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <StyledInputAdornment position="start">
                                    <StyledIcon />
                                </StyledInputAdornment>
                            )
                        }}
                    />
                </Stack>
            </LocalizationProvider>
        </Container>
    );
}
