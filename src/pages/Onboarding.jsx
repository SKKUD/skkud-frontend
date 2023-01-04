import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import skkud_BI from '../assets/SKKUD_BI.png';

export default function () {
    const navigate = useNavigate();
    const navigateToMaintab = () => {
        navigate('/maintab');
    };

    useEffect(() => {
        setTimeout(() => {
            navigateToMaintab();
        }, 1000);
    });
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#05E49F',
                marginTop: '-60px',
                width: '100vw',
                height: '100vh'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-80px'
                }}
            >
                <img
                    src={skkud_BI}
                    alt="SKKUD"
                    style={{ width: '74px', height: '66px', marginBottom: '29px' }}
                />
                <div style={{ color: '#292929', fontWeight: 800, fontSize: '1.5rem' }}>SKKU.D</div>
            </div>
        </div>
    );
}
