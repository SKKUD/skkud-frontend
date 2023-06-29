import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const PostBtnWrap = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    @media (min-width: 1024px) {
        width: 300px;
        display: block;
        position: relative;
        top: 150px;
        left: 400px;
    }
`;

const Btn = styled(Button)`
    margin-bottom: 15px;
    text-transform: none;
`;

export default function PostBtn({ content }) {
    return (
        <PostBtnWrap>
            <Btn color="primary" variant="contained" size="small">
                {content}
            </Btn>
        </PostBtnWrap>
    );
}
