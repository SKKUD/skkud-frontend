import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Carousel from 'react-material-ui-carousel';


const Title = styled.div`
    font-size: 20px;
`;

const ButtonBlock = styled.div`
    .projectBtn {
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        width: 255px;
        height: 38px;
        border-radius: 25px;
    }
`;

export default function Project() {
    return (
        <Card sx={{ minWidth: 275, mt: 1.5 }}>
            <CardContent>
                <Title>Project of SKKU.D</Title>
                <Carousel>
                    <h1>carousel image1</h1>
                    <h1>carousel2</h1>
                    <h1>carousel3</h1>
                </Carousel>
                <ButtonBlock>
                    <Button className="projectBtn">프로젝트 더 보기</Button>
                </ButtonBlock>
            </CardContent>
        </Card>
    );
}
