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
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button
                onClick={navigateToCreateUser}
                variant="contained"
                style={{
                    borderRadius: '24px',
                    border: '0.5px solid #727272',
                    backgroundColor: '#2c2c2e',
                    color: 'white',
                    marginTop: '150px',
                    height: '48px',
                    width: '312px'
                }}
            >
                회원가입하기
            </Button>
        </Box>
    );
}
