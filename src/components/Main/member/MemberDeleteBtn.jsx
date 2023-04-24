import * as React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useMemberDeleteApi } from '../../../hooks/Member';

const StyledButton = styled(Button)`
    border-radius: 17px;
    border: 1px solid red;
    color: red;
    width: 200px;
    height: 21px;
    font-size: 11px;
    padding: 4px 14px;
    gap: 10px;
    margin-top: 30px;
`;

export default function MemberDeleteBtn(_id) {
    const navigate = useNavigate();
    const navigateToMainTab = () => {
        navigate('/maintab');
    };
    const [alert, setAlert] = useState(false);
    const [error, setError] = useState(false);
    const [logout, deleteUser] = useMemberDeleteApi();

    const logoutBtn = async () => {
        removeCookie('id');
        logout();
        navigateToMainTab();
    };
    const [cookies, , removeCookie] = useCookies([]);
    const id = cookies.id;
    const deleteEvent = async () => {
        if (window.confirm('계정을 삭제합니다')) {
            setAlert(true);
            deleteUser(id);
            logoutBtn();
        } else {
            setError(true);
        }
    };

    return (
        <>
            <StyledButton variant="contained" color="background" onClick={deleteEvent}>
                계정 삭제
            </StyledButton>
            <Snackbar open={alert} autoHideDuration={1500} onClose={() => setError(false)}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    계정이 삭제되었습니다.
                </Alert>
            </Snackbar>
            <Snackbar open={error} autoHideDuration={1500} onClose={() => setError(false)}>
                <Alert severity="warning" sx={{ width: '100%' }}>
                    계정 삭제를 취소합니다.
                </Alert>
            </Snackbar>
        </>
    );
}
