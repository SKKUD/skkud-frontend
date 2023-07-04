import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 1024px) {
        width: 440px;
        justify-content: space-between;
        margin: 15px 0px;
    }
`;

const StyledToggleButton = styled(ToggleButton)({
    padding: '4px 18px',
    height: '22px',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'none',
    border: 'none',
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
    },
    '@media (min-width: 1024px)': {
        padding: '6px 30px',
        height: '28px',
        fontSize: '14px'
    }
});

export default function MemberNav({ trackTab, setTrackTab }) {
    const [, setAlignment] = useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

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
                onClick={() => {
                    setTrackTab('frontend');
                }}
            >
                Frontend
            </StyledToggleButton>
            <StyledToggleButton
                value="backend"
                onClick={() => {
                    setTrackTab('backend');
                }}
            >
                Backend
            </StyledToggleButton>
            <StyledToggleButton
                value="design"
                onClick={() => {
                    setTrackTab('design');
                }}
            >
                UI/UX Designer
            </StyledToggleButton>
        </StyledToggleButtonGroup>
    );
}
