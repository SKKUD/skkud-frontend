import * as React from 'react';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import member from '../../../assets/memberImg.png';
import styled from '@emotion/styled';

const Detail = styled.div`
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0 30px 30px;
    text-align: center;
    white-space: pre-wrap;
`;
const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-top: 84px;
    margin-left: 11px;
    margin-bottom: 7px;
`;

const PositionImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    width: 312px;
    height: 285px;
    margin-top: 20px;
    padding: 10px;
`;

export default function Position() {
    const [alignment, setAlignment] = React.useState('front');
    const designDetail = '서비스 UX/UI 기획,\n서비스 본질에 필요한 디자인 업무를 담당합니다.';
    const frontDetail = '데이터의 입출력을 통한 기능 구현,\n사용자 인터페이스 작업을 담당합니다.';
    const backDetail = '전반적인 로직 구성,\n데이터베이스와 API 서버 개발을 담당합니다.';
    const [detail, setDetail] = React.useState(frontDetail);
    const [image, setImage] = React.useState(member);
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const changeDetailFront = () => {
        setDetail(frontDetail);
        setImage(member);
    };
    const changeDetailBack = () => {
        setDetail(backDetail);
        setImage(member);
    };
    const changeDetailDesign = () => {
        setDetail(designDetail);
        setImage(member);
    };
    return (
        <div>
            <Title>Position of</Title>
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
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ToggleButton
                        value="front"
                        onClick={changeDetailFront}
                        style={{
                            borderRadius: '33px',
                            border: '1px solid #00FFA8',
                            padding: '4px 18px',
                            width: '87px',
                            height: '22px',
                            marginRight: '5px'
                        }}
                    >
                        <p style={{ fontSize: '0.7rem' }}>frontend</p>
                    </ToggleButton>
                    <ToggleButton
                        value="back"
                        onClick={changeDetailBack}
                        style={{
                            borderRadius: '33px',
                            border: '1px solid #00FFA8',
                            padding: '4px 18px',
                            width: '85px',
                            height: '22px',
                            marginRight: '5px'
                        }}
                    >
                        <p style={{ fontSize: '0.7rem' }}>backend</p>
                    </ToggleButton>
                    <ToggleButton
                        value="design"
                        onClick={changeDetailDesign}
                        style={{
                            borderRadius: '33px',
                            border: '1px solid #00FFA8',
                            padding: '4px 18px',
                            width: '122px',
                            height: '22px',
                            marginRight: '5px'
                        }}
                    >
                        <p style={{ fontSize: '0.6rem' }}>ui/ux designer</p>
                    </ToggleButton>
                </ToggleButtonGroup>

                <PositionImageBlock>
                    <img
                        src={image}
                        alt="emoji"
                        style={{ width: '200px', height: '200px', marginTop: '5px' }}
                    />
                    <Detail>{detail}</Detail>
                </PositionImageBlock>
            </div>
        </div>
    );
}
