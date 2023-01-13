import * as React from 'react';
import Box from '@mui/material/Box';
import SKKUDLOGO from '../../assets/SKKUD_LOGO.png';
import styled from '@emotion/styled';
import insta from '../../assets/insta.png';
import sender from '../../assets/send.png';

const PngBox = styled.div`
    position: absolute;
    width: 16.5px;
    height: 16.5px;
    margin: 7px;
`;

const Typography = styled.div`
    font-size: 0.625rem;
    color: #3a3a3a;
    font-weight: 700;
    line-height: 12px;
    align-items: center;
`;

const BottomDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const TopDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default function Footer() {
    return (
        <Box
            style={{
                width: '100%',
                height: '125px',
                backgroundColor: '#1b1b1b',

                paddingTop: '10px'
            }}
        >
            <TopDiv>
                <img
                    src={SKKUDLOGO}
                    alt="SKKUD"
                    style={{
                        width: '100px',
                        filter: 'opacity(0.5) drop-shadow(0 0 0 #000000)',
                        position: 'relative',
                        left: '6.69%',

                        top: '14.4%'
                    }}
                />
                <PngBox style={{ left: '290px' }}>
                    <img src={insta} />
                </PngBox>
                <PngBox style={{ left: '320px' }}>
                    <img src={sender} />
                </PngBox>
            </TopDiv>
            <BottomDiv style={{ left: '24px', top: '30px' }}>
                <Typography>Sungkyunkwan University</Typography>
                <Typography>Designer & Developer Group</Typography>
                <Typography>Team Leader 강동헌</Typography>
            </BottomDiv>
        </Box>
    );
}
