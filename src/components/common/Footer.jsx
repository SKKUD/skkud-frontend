import * as React from 'react';
import Box from '@mui/material/Box';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';
import styled from '@emotion/styled';
import insta from '../../assets/insta.png';
import sender from '../../assets/send.png';

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
        <div
            style={{
                width: '100%',
                backgroundColor: '#1b1b1b',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    width: '390px',
                    height: '125px',
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
                        <img src={insta} style={{ marginRight: '16px' }} alt="instagram" />
                        <img src={sender} alt="send" />
                    </div>
                </TopDiv>
                <BottomDiv>
                    <Typography>Sungkyunkwan University</Typography>
                    <Typography>Designer & Developer Group</Typography>
                    <Typography style={{ marginTop: '6px' }}>Team Leader 강동헌</Typography>
                </BottomDiv>
            </Box>
        </div>
    );
}
