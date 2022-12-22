import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const Title = styled.div`
    font-size: 20px;
`;

const Detail = styled.div`
    font-size: 12px;
`;

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
const PositionImageBlock = styled.div`
    justify-content: center;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    width: 328px;
    height: 285px;
    left: 15px;
    top: 1589px;
`;

export default function Position() {
    return (
        <Card sx={{ minWidth: 275, mt: 1.5 }}>
            <CardContent>
                <Title>Position of SKKU.D</Title>
                <ButtonBlock>
                    <Button className="design" type="button">
                        UI/UX Designer
                    </Button>
                    <Button type="button">Frontend</Button>
                    <Button type="button">Backend</Button>
                </ButtonBlock>
                <PositionImageBlock>
                    <Detail>
                        서비스의 UX/UI를 담당하고 서비스 본질에 필요한 디자인 업무를 담당하게
                        됩니다.
                    </Detail>
                </PositionImageBlock>
            </CardContent>
        </Card>
    );
}
