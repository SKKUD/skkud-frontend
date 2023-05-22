import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
const ImageContainer = styled(Box)`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    align-items: center;
    box-sizing: border-box;
    height: 180px;
    scrollbar-width: none;

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
    margin-right: 10px;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default function ImagesView({ imgFiles }) {
    return (
        <ImageContainer>
            {imgFiles.map((url) => (
                <ImageBox key={url}>
                    <StyledImg alt={url} src={url} />
                </ImageBox>
            ))}
        </ImageContainer>
    );
}
