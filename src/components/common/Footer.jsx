import * as React from 'react';
import Box from '@mui/material/Box';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';
import styled from '@emotion/styled';
import insta from '../../assets/insta.png';
import sender from '../../assets/send.png';

const PngBox = styled.div``;

const Typography = styled.div`
    font-size: 0.625rem;
    color: #3a3a3a;
    font-weight: 700;
    line-height: 12px;
    align-items: center;
`;

const TopDiv = styled.div`
    height: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const BottomDiv = styled.div`
    margin-top: 27.5px;
    display: flex;
    flex-direction: column;
`;

export default function Footer() {
    return (
        <Box
            style={{
                width: '100%',
                height: '125px',
                backgroundColor: '#1b1b1b',

                paddingTop: '16px',
                paddingLeft: '25px',
                paddingRight: '23px'
            }}
        >
            <TopDiv>
                <img
                    src={SKKUDLOGO}
                    alt="SKKUD"
                    style={{
                        width: '100px',
                        filter: 'opacity(0.5) drop-shadow(0 0 0 #000000)'
                    }}
                />
                <div style={{ height: '18px' }}>
                    <img src={insta} style={{ marginRight: '16px' }} />
                    <img src={sender} />
                </div>
            </TopDiv>
            <BottomDiv>
                <Typography>Sungkyunkwan University</Typography>
                <Typography>Designer & Developer Group</Typography>
                <Typography style={{ marginTop: '6px' }}>Team Leader 강동헌</Typography>
            </BottomDiv>
        </Box>
    );
}
