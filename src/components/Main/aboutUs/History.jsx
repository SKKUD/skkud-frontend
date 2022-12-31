import * as React from 'react';
import styled from '@emotion/styled';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import dashed from '../../../assets/dashedCard.png';

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-top: 84px;
    margin-left: 11px;
    margin-bottom: 7px;
`;
const Card1 = styled.div`
    width: 158px;
    height: 158px;
    border-radius: 25px;
    background-color: #ffffff;
    margin-bottom: 10px;
`;
const Card2 = styled.div`
    width: 158px;
    height: 164px;
    border-radius: 25px;
    box-sizing: border-box;
    background-image: url(${dashed});
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
`;
const Content = styled.div`
    width: 100%;
    margin-top: 22px;
    font-size: 0.75rem;
    font-weight: 700;
    text-align: center;
`;
const Num = styled.div`
    width: 100%;
    color: #00ffb0;
    font-size: 4rem;
    font-weight: 800;
    text-align: center;
`;

export default function History() {
    return (
<<<<<<< HEAD
        <Card sx={{ minWidth: 275, mt: 1.5 }}>
            <CardContent component="div">
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
=======
        <div>
            <Title>History of</Title>
            <img
                src={SKKUD}
                alt="SKKUD"
                style={{
                    marginLeft: 'auto',
                    display: 'block',
                    marginRight: '11px',
                    marginBottom: '35px',
                    width: '213px'
                }}
            />

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    padding: '0 7px'
                }}
            >
                <Card1>
                    <Content style={{ color: '#222222' }}>총 프로젝트 수</Content>
                    <Num>8</Num>
                </Card1>
                <Card2>
                    <Content>수상경력</Content>
                    <Num>3</Num>
                </Card2>
                <Card2>
                    <Content>역대 회원 수 </Content>
                    <Num>20</Num>
                </Card2>
                <Card1>
                    <Content style={{ color: '#222222' }}>운영 기간 </Content>
                    <Num style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>2</div>
                        <div style={{ fontSize: '2rem', alignSelf: 'center', marginTop: '20px' }}>
                            Y
                        </div>
                    </Num>
                </Card1>
            </div>
        </div>
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
    );
}
