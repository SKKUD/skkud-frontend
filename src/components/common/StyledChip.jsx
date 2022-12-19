import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';

// const StyledTabs = styled((props) => (
//     <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
// ))({
//     '& .MuiTabs-indicator': {
//         display: 'flex',
//         justifyContent: 'center',
//         backgroundColor: 'transparent'
//     },
//     '& .MuiTabs-indicatorSpan': {
//         maxWidth: 80,
//         width: '100%',
//         backgroundColor: '#00FFB0'
//     }
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
//     textTransform: 'none',
//     fontWeight: 500,
//     fontSize: theme.typography.pxToRem(15),
//     color: 'rgba(255, 255, 255, 0.7)',
//     '&.Mui-selected': {
//         color: '#fff'
//     },
//     '&.Mui-focusVisible': {
//         backgroundColor: 'rgba(100, 95, 228, 0.32)'
//     }
// }));

// const useStyles = makeStyles(() => ({
//     chipCustom: {
//         border: '2px', // some style
//         '& .MuiChip-label': { fontWeight: 300 } // sub-selector
//     }
// }));

// const customChipClass = useStyles();

export default function StyledChip(label) {
    return <Chip label={label} />;
}

StyledChip.propsTypes = {
    value: PropTypes.string.isRequired
};
