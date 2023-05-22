import React from 'react';
import { Box, IconButton } from '@mui/material';
import StudyPreImages from './StudyPreImages';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import styled from '@emotion/styled';

const Container = styled(Box)`
    margin-bottom: 18px;
`;

const Label = styled(Box)`
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 11px;
`;

const StyledIconButton = styled(IconButton)`
    color: primary;
`;

export default function StudyImageInput({ PreviewImg, images, uploadImgFile }) {
    return (
        <Container>
            <Label>스터디 자료</Label>
            {PreviewImg.length !== 0 ? (
                <StudyPreImages imgFiles={PreviewImg} />
            ) : (
                <StudyPreImages imgFiles={images} />
            )}
            <StyledIconButton color="primary" aria-label="upload picture" component="label">
                <input
                    hidden
                    name="images"
                    multiple
                    type="file"
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    onChange={uploadImgFile}
                />
                <PhotoCamera />
            </StyledIconButton>
        </Container>
    );
}
