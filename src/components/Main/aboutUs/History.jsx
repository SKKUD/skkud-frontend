import * as React from 'react';
import styled from '@emotion/styled';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
// import dashed from '../../../assets/dashedCard.png';
// import Grid from '@mui/material/Unstable_Grid2';
import CardImg from '../../../assets/four_square.png';

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-top: 84px;
    margin-left: 11px;
    margin-bottom: 7px;
`;
// const Card1 = styled.div`
//     width: 100%;
//     height: 157px;
//     border-radius: 15px;
//     background-color: #00ffa8;
//     margin-bottom: 10px;
//     overflow: hidden;
// `;
// const Card2 = styled.div`
//     width: 100%;
//     height: 164px;
//     border-radius: 15px;
//     box-sizing: border-box;
//     background-image: url(${dashed});
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     overflow: hidden;
// `;
// const Content = styled.div`
//     width: 100%;
//     margin-top: 22px;
//     font-size: 0.75rem;
//     font-weight: 700;
//     text-align: center;
// `;
// const Num = styled.div`
//     width: 100%;
//     color: #00ffb0;
//     font-size: 4rem;
//     font-weight: 800;
//     text-align: center;
// `;

const Logo = styled.img`
    margin-left: auto;
    display: block;
    margin-right: 11px;
    margin-bottom: 35px;
    width: 213px;
`;

const StyledCards = styled.img`
    width: 100%;
`;

export default function History() {
    return (
        <div>
            <Title>History of</Title>
            <Logo src={SKKUD} alt="SKKUD" />

            <div>
                {/* <Grid container spacing={1}>
                    <Grid xs={5.65}>
                        <Card1>
                            <Content style={{ color: '#3E3E3E' }}>총 프로젝트 수</Content>
                            <Num style={{ color: '#3E3E3E' }}>8</Num>
                        </Card1>
                    </Grid>
                    <Grid xs={6.35}>
                        <Card2>
                            <Content>수상경력</Content>
                            <Num>3</Num>
                        </Card2>
                    </Grid>
                    <Grid xs={6.35}>
                        <Card2>
                            <Content>역대 회원 수 </Content>
                            <Num>20</Num>
                        </Card2>
                    </Grid>
                    <Grid xs={5.65}>
                        <Card1>
                            <Content style={{ color: '#3E3E3E' }}>운영 기간 </Content>
                            <Num style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ color: '#3E3E3E' }}>2</div>
                                <div
                                    style={{
                                        color: '#3E3E3E',
                                        fontSize: '2rem',
                                        alignSelf: 'center',
                                        marginTop: '20px'
                                    }}
                                >
                                    Y
                                </div>
                            </Num>
                        </Card1>
                    </Grid>
                </Grid> */}
                <StyledCards src={CardImg} alt="cards" />
            </div>
        </div>
    );
}
