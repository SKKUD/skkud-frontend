import * as React from 'react';
import styled from '@emotion/styled';

import SKKUD from '../../../assets/SKKUD_green.jpeg';

const StyledCard = styled.div`
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 13px;
`;

const TitleAbout = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    justify-content: 'end';
    margin-top: 31px;
    margin-left: 19px;
`;

const Detail1 = styled.div`
    display: 'block';
    width: 100%;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.438rem;
    margin-top: 27px;
    margin-left: 24px;
`;

const Detail2 = styled.div`
    display: 'block';
    width: 100%;
    font-size: 0.813rem;
    line-height: 1.438rem;
    font-weight: 400;
    margin-top: 13px;
    margin-left: 24px;
    margin-bottom: 30px;
`;

const SKKUDimg = styled.img`
    display: block;
    margin-right: 21px;
    margin-left: auto;
    width: 213px;
`;

export default function About() {
    return (
        <StyledCard>
            <TitleAbout>About</TitleAbout>
            <SKKUDimg src={SKKUD} alt="SKKUD" />
            <Detail1>
                우리는 웹 개발자가 되고 싶은 학생들을 위해
                <br /> 실전 같은 경험을 제공합니다.
            </Detail1>
            <Detail2>
                스꾸디는 성균관대학교 학생 개발자들이 모여
                <br /> 성균관대학교 학생들을 위한 서비스를 만드는 단체 입니다.
                <br /> 다양한 학교 부처와 단체들과 함께 서비스를 구축하고
                <br />
                유지보수하고 있습니다.
            </Detail2>
        </StyledCard>
    );
}
