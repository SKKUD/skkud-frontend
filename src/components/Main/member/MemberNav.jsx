import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TrackContext } from '../../../context/TrackContext';

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
        if (location.pathname === '/maintab/member') {
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
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <ToggleButton
                value="frontend"
                component={Link}
                to="/maintab/member"
                onClick={() => {
                    setTrackTab('frontend');
                }}
                style={{
                    borderRadius: '33px',
                    border: '1px solid #00FFA8',
                    padding: '4px 18px',
                    width: '122px',
                    height: '22px'
                }}
            >
                <p style={{ fontSize: '0.7rem' }}>frontend</p>
            </ToggleButton>
            <ToggleButton
                value="backend"
                component={Link}
                to="/maintab/member/backend"
                onClick={() => {
                    setTrackTab('backend');
                }}
                style={{
                    borderRadius: '33px',
                    border: '1px solid #00FFA8',
                    padding: '4px 18px',
                    width: '122px',
                    height: '22px'
                }}
            >
                <p style={{ fontSize: '0.7rem' }}>backend</p>
            </ToggleButton>
            <ToggleButton
                value="design"
                component={Link}
                to="/maintab/member/design"
                onClick={() => {
                    setTrackTab('design');
                }}
                style={{
                    borderRadius: '33px',
                    border: '1px solid #00FFA8',
                    padding: '4px 18px',
                    width: '122px',
                    height: '22px'
                }}
            >
                <p style={{ fontSize: '0.6rem' }}>UI/UX Designer</p>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
