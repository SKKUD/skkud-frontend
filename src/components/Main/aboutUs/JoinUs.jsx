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
    .joinusBtn {
        width: 255px;
        height: 38px;
        left: 57px;
        top: 2400px;

        background: #00ffa8;
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
        border-radius: 25px;
    }
`;

export default function JoinUs() {
    return (
        <Card sx={{ minWidth: 275, mt: 1.5 }}>
            <CardContent>
                <Title>Join us</Title>
                <Detail variant="body2" sx={{ mt: 1.5 }}>
                    여러분들의 개발자로의 여정, 저희 스꾸디가 도와드리겠습니다!
                </Detail>
                <ButtonBlock>
                    <Button class="joinusBtn">지금 지원하기</Button>
                </ButtonBlock>
            </CardContent>
        </Card>
    );
}
