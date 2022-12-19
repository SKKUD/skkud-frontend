import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { TrackContext } from '../../../context/TrackContext';

const ButtonBlock = styled.div`
    * {
        border-radius: 10px;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
    }
    .design {
        color: black;
        background-color: #00ffb0;
        border: 1px solid;
    }
    button {
        color: white;
        background: transparent;
        border: 1px solid #00ffb0;
    }
`;

export default function MemberNav() {
    const { trackTab, setTrackTab } = useContext(TrackContext);
    const handleChange = (idx) => {
        console.log('idxasaaaaaaaaaaaaa', idx);
    };
    console.log('nav track', trackTab);
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
        };
    }

    return (
        <ButtonBlock value={trackTab} onChange={handleChange} aria-label="mainTabs" centered>
            <Button
                className="design"
                type="button"
                {...a11yProps(0)}
                component={Link}
                to="/member"
                onClick={() => {
                    setTrackTab('design');
                }}
            >
                UI/UX Designer
            </Button>
            <Button
                type="button"
                {...a11yProps(1)}
                component={Link}
                to="/member/frontend"
                onClick={() => {
                    setTrackTab('frontend');
                }}
            >
                Frontend
            </Button>
            <Button
                type="button"
                {...a11yProps(1)}
                component={Link}
                to="/member/backend"
                onClick={() => {
                    setTrackTab('backend');
                }}
            >
                Backend
            </Button>
        </ButtonBlock>
    );
}
