import * as React from 'react';
import styled from '@emotion/styled';
import { Waypoint } from 'react-waypoint';
import Typed from 'typed.js';
import { useMediaQuery } from '@mui/material';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import WebAboutSKKUD from '../../../assets/web_about.png';

const StyledCard = styled.div`
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 13px;

    @media (min-width: 1024px) {
        width: 60%;
        min-width: 1000px;
        margin: 200px auto;
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
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

    @media (min-width: 1024px) {
        width: 70%;
        min-width: 850px;
        height: 80px;
        line-height: 80px;
        font-size: 20px;
        letter-spacing: 2.5px;
        flex-shrink: 0;
        border-radius: 10px;
        background-color: #141414;
    }
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

    @media (min-width: 1024px) {
        width: 70%;
        min-width: 900px;
        margin-top: 45px;
        font-size: 20px;
        line-height: 40px;
        letter-spacing: 1px;
    }
`;

const SKKUDimg = styled.img`
    display: block;
    margin-right: 21px;
    margin-left: auto;
    width: 213px;
`;

const WebSKKUDimg = styled.img`
    width: 500px;
    margin: 0 auto 50px;
`;

export default function About() {
    const match1024 = useMediaQuery('(min-width:1024px)');
    const el = React.useRef(null);
    let TypedInstance;

    React.useEffect(() => {
        if (match1024) {
            TypedInstance = new Typed(el.current, {
                strings: [
                    '우리는 웹 개발자가 되고 싶은 학생들을 위해 실전 같은 경험을 제공합니다.'
                ],
                typeSpeed: 50
            });

            TypedInstance.stop();

            return () => {
                // Destroy Typed instance during cleanup to stop animation
                TypedInstance.destroy();
            };
        }
    }, [match1024]);

    return (
        <StyledCard>
            {match1024 ? (
                <>
                    <WebSKKUDimg src={WebAboutSKKUD} alt="About SKKUD" />
                    <Detail1>
                        <Waypoint
                            onEnter={() => {
                                TypedInstance.start();
                            }}
                        >
                            <span ref={el} />
                        </Waypoint>
                    </Detail1>
                    <Detail2>
                        스꾸디는 성균관대학교 학생 개발자들이 모여 성균관대학교 학생들을 위한
                        서비스를 만드는 단체입니다.
                        <br /> 다양한 학교 부처와 단체들과 함께 서비스를 구축하고 유지보수하고
                        있습니다.
                    </Detail2>
                </>
            ) : (
                <>
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
                </>
            )}
        </StyledCard>
    );
}
