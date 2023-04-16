import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TrackContext } from '../../../context/TrackContext';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
});

const StyledToggleButton = styled(ToggleButton)({
    padding: '4px 18px',
    height: '22px',
    fontSize: '0.75rem',
    fontWeight: 600,
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
});

export default function MemberNav() {
    const { trackTab, setTrackTab } = useContext(TrackContext);
    const [, setAlignment] = useState('frontend');
    const location = useLocation();

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    useEffect(() => {
        if (location.pathname === '/maintab/member') {
            setTrackTab('frontend');
        }
    }, [location]);

    return (
        <StyledToggleButtonGroup
            color="mint"
            value={trackTab}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <StyledToggleButton
                value="frontend"
                component={Link}
                to="/maintab/member"
                onClick={() => {
                    setTrackTab('frontend');
                }}
            >
                Frontend
            </StyledToggleButton>
            <StyledToggleButton
                value="backend"
                component={Link}
                to="/maintab/member/backend"
                onClick={() => {
                    setTrackTab('backend');
                }}
            >
                Backend
            </StyledToggleButton>
            <StyledToggleButton
                value="design"
                component={Link}
                to="/maintab/member/design"
                onClick={() => {
                    setTrackTab('design');
                }}
            >
                UI/UX Designer
            </StyledToggleButton>
        </StyledToggleButtonGroup>
    );
}
