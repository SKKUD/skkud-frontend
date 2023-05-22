import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const ScrollableContainer = styled(Box)`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    height: 180px;
    margin-top: 12px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ImageBox = styled(Box)`
    flex: 0 0 auto;
    width: 160px;
    height: 160px;
    border-radius: 5px;
    overflow: hidden;
    margin: 0px 5px;
`;

const StyledImage = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default function StudyPreImages({ imgFiles }) {
    return (
        <ScrollableContainer>
            {imgFiles.map((url) => (
                <ImageBox key={url}>
                    <StyledImage alt={url} src={url} />
                </ImageBox>
            ))}
        </ScrollableContainer>
    );
}
