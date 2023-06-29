import React from 'react';
import { useMediaQuery } from '@mui/material';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import WebProjectSkkud from '../../../assets/web_projectSkkud.png';
import { useNavigate } from 'react-router-dom';
import { useProjectListApi } from '../../../hooks/Project';
import Carousel from './Carousel';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const Container = styled.div`
    @media (min-width: 1024px) {
        width: 80%;
        min-width: 1000px;
        margin: 300px auto;
        text-align: center;
    }
`;

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-top: 84px;
    margin-left: 11px;
    margin-bottom: 7px;
`;

const SKKUDimg = styled.img`
    margin-left: auto;
    display: block;
    margin-right: 11px;
    margin-bottom: 35px;
    width: 213px;
`;

const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 65px;

    .projectBtn {
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        width: 255px;
        height: 38px;
        border-radius: 25px;
    }
    .projectBtn:hover {
        background-color: rgba(156, 156, 156, 0.2);
        color: rgba(255, 255, 255, 0.72);
    }

    @media (min-width: 1024px) {
        margin-top: 65px;
        .projectBtn {
            width: 455px;
            height: 53px;
            font-size: 18px;
            font-weight: 500;
        }
    }
`;

const ProjectOfSKKUDIMG = styled.img`
    width: 600px;
    margin-bottom: 65px;
`;

export default function Project() {
    const match1024 = useMediaQuery('(min-width:1024px)');

    const navigate = useNavigate();
    const navigateToProject = () => {
        navigate('/maintab/project');
    };
    const imgList = [];
    const [projectList] = useProjectListApi();
    for (let i = 0; i < projectList.length; i++) {
        imgList.push(projectList[i].mainimage);
    }

    return (
        <Container>
            {match1024 ? (
                <ProjectOfSKKUDIMG src={WebProjectSkkud} alt="Position of SKKUD" />
            ) : (
                <>
                    <Title>Project of</Title>
                    <SKKUDimg src={SKKUD} alt="SKKUD" />
                </>
            )}

            <Carousel images={imgList} />

            <ButtonBlock>
                <Button className="projectBtn" onClick={navigateToProject}>
                    프로젝트 더 보기
                </Button>
            </ButtonBlock>
        </Container>
    );
}
