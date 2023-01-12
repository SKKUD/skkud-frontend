import * as React from 'react';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import projectImg from '../../../assets/project-img1.png';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Carousel from 'react-material-ui-carousel';
import { useProjectListApi } from '../../../hooks/Project';

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-top: 84px;
    margin-left: 11px;
    margin-bottom: 7px;
`;

const Imgbox = styled.div`
    border: 1px solid transparent;
    background-image: url(${projectImg});
    background-size: 125px 125px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    width: 125px;
    height: 125px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 20px;
`;

const ImgboxBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    align-items: center;
    justify-content: center;
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
    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/maintab/project');
    };
    // const projectImg = [];
    // useProjectListApi;
    return (
        <div>
            <Title>Project of</Title>
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

            <Carousel autoPlay swipe animation="slide" duration={1600}>
                <ImgboxBlock>
                    <Imgbox />
                    <Imgbox />
                </ImgboxBlock>
                <ImgboxBlock>
                    <Imgbox />
                    <Imgbox />
                </ImgboxBlock>
                <ImgboxBlock>
                    <Imgbox />
                    <Imgbox />
                </ImgboxBlock>
            </Carousel>
            <ButtonBlock
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '65px'
                }}
            >
                <Button className="projectBtn" onClick={navigateToProject}>
                    프로젝트 더 보기
                </Button>
            </ButtonBlock>
        </div>
    );
}
