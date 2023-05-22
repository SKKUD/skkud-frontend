import React from 'react';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import { useNavigate } from 'react-router-dom';
import { useProjectListApi } from '../../../hooks/Project';
import Carousel from './Carousel';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

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
`;

export default function Project() {
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
        <div>
            <Title>Project of</Title>
            <SKKUDimg src={SKKUD} alt="SKKUD" />

            <Carousel images={imgList} />

            <ButtonBlock style={{}}>
                <Button className="projectBtn" onClick={navigateToProject}>
                    프로젝트 더 보기
                </Button>
            </ButtonBlock>
        </div>
    );
}
