import React from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function CreateUserBtn() {
    const navigate = useNavigate();
    const navigateToCreateUser = () => {
        navigate('/maintab/member/createuser');
    };
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    marginTop: '150px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '6px'
                }}
            >
                회원가입하고 스꾸디와 함께해요!
            </div>
            <Button
                onClick={navigateToCreateUser}
                variant="contained"
                style={{
                    borderRadius: '24px',
                    border: '0.5px solid #727272',
                    backgroundColor: '#2c2c2e',
                    color: 'white',
                    height: '48px',
                    width: '312px',
                    fontSize: '0.875rem'
                }}
            >
                회원가입하기
            </Button>
        </Box>
    );
}
