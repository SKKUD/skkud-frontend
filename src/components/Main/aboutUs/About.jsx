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

export default function About() {
    return (
        <Card sx={{ minWidth: 275, mt: 1.5 }}>
            <CardContent>
                <Title>About SKKU.D</Title>
                <Detail sx={{ mb: 1.5 }}>
                    우리는 웹 개발자가 되기 위한 학생들을 위해 실전 같은 경험을 제공합니다.
                </Detail>
                <Detail color="text.secondary">
                    스꾸디는 성균관대학교 학생 개발자들이 모여 성균관대학교 학생들을 위한 서비스를
                    만드는 단체 입니다. 다양한 학교 부처와 단체들과 함께 다양한 서비스를 구축하고
                    유지보수하고 있습니다.
                </Detail>
            </CardContent>
        </Card>
    );
}
