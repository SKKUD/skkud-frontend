import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import WebPositionSkkud from '../../../assets/web_positionSkkud.png';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from '@emotion/styled';
import backimg from '../../../assets/back_default.png';
import frontimg from '../../../assets/front_default.png';
import designimg from '../../../assets/design_default.png';

const Container = styled.div`
    @media (min-width: 1024px) {
        width: 60%;
        min-width: 1000px;
        margin: 200px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
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

const ToggleCardWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
        width: 700px;
    }
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const StyledToggleButton = styled(ToggleButton)(
    {
        border: 'none',
        borderRadius: '33px',
        padding: '3px 6%',
        margin: '0 auto',
        overflow: 'hidden',
        textTransform: 'none',
        span: {
            borderRadius: '33px',
            border: '1px solid #00FFA8'
        },
        '&.Mui-selected, &.Mui-selected:hover, &.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
            borderRadius: '33px'
        },
        p: {
            fontSize: '0.7rem',
            margin: '0px',
            fontWeight: '600'
        }
    },
    `@media (min-width: 1024px) {
        margin: 30px auto;

        p {
          font-size: 16px;
        }
        span {
            border: 2px solid #00FFA8;
        }
      }`
);

const PositionImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    width: 312px;
    margin-top: 20px;
    padding: 10px;

    @media (min-width: 1024px) {
        width: 60%;
        min-width: 800px;
        padding: 30px;

        > img {
            width: 40%;
        }
    }
`;

const PositionOfSKKUDIMG = styled.img`
    width: 600px;
`;

const Detail = styled.div`
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0 0px 15px;
    text-align: center;
    white-space: pre-wrap;

    @media (min-width: 1024px) {
        font-size: 18px;

        line-height: 200%;
    }
`;

export default function Position() {
    const match1024 = useMediaQuery('(min-width:1024px)');

    const TrackDetail = {
        front: '데이터의 입출력을 통한 기능 구현,\n사용자 인터페이스 작업을 담당합니다.',
        back: '전반적인 로직 구성,\n데이터베이스와 API 서버 개발을 담당합니다.',
        design: '서비스 UX/UI 기획,\n서비스 본질에 필요한 디자인 업무를 담당합니다.'
    };
    const [alignment, setAlignment] = useState('front');
    const [detail, setDetail] = useState(TrackDetail.front);
    const [image, setImage] = useState(frontimg);
    const handleChange = (e, newAlignment) => {
        setAlignment(newAlignment);
    };

    const changeTrack = (value) => {
        if (value === 'back') {
            setDetail(TrackDetail.back);
            setImage(backimg);
        } else if (value === 'design') {
            setDetail(TrackDetail.design);
            setImage(designimg);
        } else if (value === 'front') {
            setDetail(TrackDetail.front);
            setImage(frontimg);
        }
    };

    return (
        <Container>
            {match1024 ? (
                <PositionOfSKKUDIMG src={WebPositionSkkud} alt="Position of SKKUD" />
            ) : (
                <>
                    <Title>Position of</Title>
                    <SKKUDimg src={SKKUD} alt="SKKUD" />
                </>
            )}

            <ToggleCardWrap>
                <StyledToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <StyledToggleButton value="front" onClick={() => changeTrack('front')}>
                        <p>Frontend</p>
                    </StyledToggleButton>
                    <StyledToggleButton value="back" onClick={() => changeTrack('back')}>
                        <p>Backend</p>
                    </StyledToggleButton>
                    <StyledToggleButton value="design" onClick={() => changeTrack('design')}>
                        <p>UI/UX Designer</p>
                    </StyledToggleButton>
                </StyledToggleButtonGroup>

                <PositionImageBlock>
                    <img src={image} alt="emoji" />

                    <Detail>{detail}</Detail>
                </PositionImageBlock>
            </ToggleCardWrap>
        </Container>
    );
}
