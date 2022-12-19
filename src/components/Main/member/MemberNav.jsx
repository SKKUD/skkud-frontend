// import * as React from 'react';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import styled from '@emotion/styled';
// import { TrackContext } from '../../../context/TrackContext';

// const ButtonBlock = styled.div`
//     * {
//         border-radius: 10px;
//         font-family: 'Pretendard';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 12px;
//         line-height: 14px;
//     }
//     .design {
//         color: black;
//         background-color: #00ffb0;
//         border: 1px solid;
//     }
//     button {
//         color: white;
//         background: transparent;
//         border: 1px solid #00ffb0;
//     }
// `;

// export default function MemberNav() {
//     const { trackTab, setTrackTab } = useContext(TrackContext);
//     console.log('nav track', trackTab);
//     function a11yProps(index) {
//         return {
//             id: `simple-tab-${index}`,
//             'aria-controls': `simple-tabpanel-${index}`
//         };
//     }

//     return (
//         <ButtonBlock value={trackTab} aria-label="mainTabs" centered>
//             <Button
//                 className="design"
//                 type="button"
//                 {...a11yProps(0)}
//                 component={Link}
//                 to="/member"
//                 onClick={() => {
//                     setTrackTab('design');
//                 }}
//             >
//                 UI/UX Designer
//             </Button>
//             <Button
//                 type="button"
//                 {...a11yProps(1)}
//                 component={Link}
//                 to="/member/frontend"
//                 onClick={() => {
//                     setTrackTab('frontend');
//                 }}
//             >
//                 Frontend
//             </Button>
//             <Button
//                 type="button"
//                 {...a11yProps(1)}
//                 component={Link}
//                 to="/member/backend"
//                 onClick={() => {
//                     setTrackTab('backend');
//                 }}
//             >
//                 Backend
//             </Button>
//         </ButtonBlock>
//     );
// }

import * as React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        console.log(alignment);
    };
    console.log('nav track', trackTab);

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
                to="/member/frontend"
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
                to="/member/backend"
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
                to="/member"
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
