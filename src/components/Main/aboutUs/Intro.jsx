import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from '@emotion/styled';

const Title = styled.div`
    font-size: 20px;
`;

const Detail = styled.div`
    font-size: 12px;
`;

export default function Intro() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Title>SKKU.D</Title>
                <Detail>The final step before becoming a developer</Detail>
            </CardContent>
        </Card>
    );
}
