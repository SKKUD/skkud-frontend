<<<<<<< HEAD
import React from 'react';

export default function () {
    return <div>skkud</div>;
=======
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import skkud_BI from '../assets/SKKUD_BI.png';

export default function () {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        setTimeout(() => {
            navigateToLogin();
        }, 2000);
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
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
}
