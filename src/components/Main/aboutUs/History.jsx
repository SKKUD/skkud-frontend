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

export default function History() {
    return (
        <Card sx={{ minWidth: 275, mt: 1.5 }}>
            <CardContent>
                <Title>History of SKKU.D</Title>
                <Detail variant="body2" sx={{ mt: 1.5 }}>
                    총 프로젝트 수 : 8
                </Detail>
                <Detail variant="body2" sx={{ mt: 1.5 }}>
                    수상경력 : 8
                </Detail>
                <Detail variant="body2" sx={{ mt: 1.5 }}>
                    총 프로젝트 수 : 8
                </Detail>
                <Detail variant="body2" sx={{ mt: 1.5 }}>
                    수상경력 : 8
                </Detail>
            </CardContent>
        </Card>
    );
}
