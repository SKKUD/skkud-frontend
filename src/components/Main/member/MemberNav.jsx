import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import styled from '@emotion/styled';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TrackContext } from '../../../context/TrackContext';

// const ButtonBlock = styled.div`
//     * {
//         border-radius: 20px;
//         font-family: 'Pretendard';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 14px;
//         line-height: 14px;
//     }
// `;

export default function MemberNav() {
    const { trackTab, setTrackTab } = useContext(TrackContext);
    const [alignment, setAlignment] = useState('frontend');
    const location = useLocation();
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        console.log(alignment);
    };
    console.log('nav track', trackTab);
    useEffect(() => {
        if (location.pathname === '/maintab/frontend') {
            setTrackTab('frontend');
        }
    }, [location]);

    return (
        <ToggleButtonGroup
            color="mint"
            value={trackTab}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton
                value="frontend"
                component={Link}
                to="/maintab/frontend"
                onClick={() => {
                    setTrackTab('frontend');
                }}
                style={{ borderRadius: '20px', border: '1px solid #00ffb0' }}
            >
                frontend
            </ToggleButton>
            <ToggleButton
                value="backend"
                component={Link}
                to="/maintab/backend"
                onClick={() => {
                    setTrackTab('backend');
                }}
                style={{ borderRadius: '20px', border: '1px solid #00ffb0' }}
            >
                backend
            </ToggleButton>
            <ToggleButton
                value="design"
                component={Link}
                to="/maintab/design"
                onClick={() => {
                    setTrackTab('design');
                }}
                style={{ borderRadius: '20px', border: '1px solid #00ffb0' }}
            >
                UI/UX Designer
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
