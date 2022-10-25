import * as React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const ButtonBlock = styled.div`
    * {
        border-radius: 10px;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
    }
    .design {
        color: black;
        background-color: #00ffb0;
        border: 1px solid;
    }
    button {
        color: white;
        background: transparent;
        border: 1px solid #00ffb0;
    }
`;

export default function MemberNav() {
    return (
        <ButtonBlock>
            <Button className="design" type="button">
                UI/UX Designer
            </Button>
            <Button type="button">Frontend</Button>
            <Button type="button">Backend</Button>
        </ButtonBlock>
    );
}
