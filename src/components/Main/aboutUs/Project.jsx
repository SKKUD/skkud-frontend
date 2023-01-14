import * as React from 'react';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import projectImg from '../../../assets/project-img1.png';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
// import Carousel from 'react-material-ui-carousel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useProjectListApi } from '../../../hooks/Project';
import Carousel from './Carousel';

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
    const imgList = [];
    const [projectList] = useProjectListApi();
    console.log('proj img', projectList);
    for (let i = 0; i < projectList.length; i++) {
        // if (projectList[i].mainimage === undefined)
        console.log('img', projectList[i].mainimage);
        imgList.push(projectList[i].mainimage);
    }
    console.log('img list', imgList);

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

            <Carousel images={imgList} />

            <ButtonBlock
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px',
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
