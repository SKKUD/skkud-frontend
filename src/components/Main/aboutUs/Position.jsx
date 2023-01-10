import * as React from 'react';
import SKKUD from '../../../assets/SKKUD_green.jpeg';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from '@emotion/styled';

const Detail = styled.div`
    font-size: 12px;
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
    justify-content: center;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    width: 312px;
    height: 285px;
    margin-top: 20px;
`;

export default function Position() {
    const [alignment, setAlignment] = React.useState('front');
    const designDetail =
        '서비스의 UX/UI를 담당하고 서비스 본질에 필요한 디자인 업무를 담당하게 됩니다.';
    const frontDetail = '프론트엔드 디테일 입니다 ㅁㅁㅁㅁ';
    const backDetail = '백엔드 디테일 입니다 ㅁㅁㅁㅁ';
    const [detail, setDetail] = React.useState(frontDetail);
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const changeDetailFront = () => {
        setDetail(frontDetail);
    };
    const changeDetailBack = () => {
        setDetail(backDetail);
    };
    const changeDetailDesign = () => {
        setDetail(designDetail);
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
                    <Detail>{detail}</Detail>
                </PositionImageBlock>
            </div>
        </div>
    );
}
