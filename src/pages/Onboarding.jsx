import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import skkud from '../assets/SKKUD_green.jpeg';

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
                justifyContent: 'center'
            }}
        >
            <img src={skkud} alt="SKKUD" />
        </div>
    );
}
