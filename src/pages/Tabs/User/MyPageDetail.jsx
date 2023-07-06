import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useUserApi, useMemberDeleteApi, useEditMemberApi } from '../../../hooks/Member';
import { Box, TextField, Button, Typography, Alert, Snackbar } from '@mui/material';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
    & > :not(style) {
        margin: 1rem;
    }
    padding: 20px 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        width: 500px;
        height: 600px;
        margin: 100px auto 100px;
        padding: 60px;
        border-radius: 25px;
        background-color: #292929;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
    }
`;

const StyledTypography = styled(Typography)`
    text-align: center;
`;

const StyledButton = styled(Button)`
    border-radius: 17px;
    border: 1px solid #00ffa8;
    color: #00ffa8;
    width: 110px;
    height: 21px;
    font-size: 11px;
    padding: 4px 14px;
    gap: 10px;
`;

const StyledBigButton = styled(Button)`
    border-radius: 99px;
    width: 80%;
    height: 44px;
`;

export default function MyPageDetail() {
    const [logout] = useMemberDeleteApi();
    const [, editUserIdPw] = useEditMemberApi();
    const [cookies, , removeCookie] = useCookies(['id']);
    const id = cookies.id;
    const [editAlert, setEditAlert] = useState(false);
    const [user, setUser] = useUserApi(id);
    const navigate = useNavigate();

    const navigateToMainTab = () => {
        navigate('/maintab');
    };

    const logoutBtn = () => {
        setUser('');
        removeCookie('id');
        logout();
        navigateToMainTab();
    };

    const ID = user.userID;
    const pw = user.passwd;

    const [newID, setID] = useState(ID);
    const [newpw, setPw] = useState('');
    const [newrepw, setrePw] = useState('');

    useEffect(() => {
        setID(ID);
        setPw(pw);
    }, [ID, pw]);

    const [checker, setChecker] = useState(true);
    const checkPw = () => {
        if (newpw !== newrepw) {
            setChecker(false);
        }
    };

    const submit = useCallback(() => {
        if (checker === true) {
            editUserIdPw(id, newID, newpw);
            setEditAlert(true);
            setTimeout(() => {
                logoutBtn();
            }, 3000);
        }
    }, [checker, id, newID, newpw, logoutBtn]);

    return (
        <>
            <StyledBox component="form" noValidate autoComplete="off">
                <StyledTypography variant="h6">ID/비밀번호 수정</StyledTypography>
                <TextField
                    fullWidth
                    id="id"
                    label="ID"
                    variant="standard"
                    value={newID || ''}
                    onChange={(e) => setID(e.target.value)}
                />
                <StyledButton variant="contained" onClick={submit} color="background">
                    ID 수정
                </StyledButton>
                <TextField
                    fullWidth
                    id="newPW"
                    label="새 비밀번호 입력"
                    variant="standard"
                    onChange={(e) => setPw(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="newPW2"
                    label="새 비밀번호 확인"
                    variant="standard"
                    onChange={(e) => {
                        setrePw(e.target.value);
                        checkPw();
                    }}
                />
                <StyledBigButton variant="contained" onClick={submit}>
                    비밀번호 바꾸기
                </StyledBigButton>
            </StyledBox>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={editAlert}
                autoHideDuration={1000}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    멤버 아이디가 수정되었습니다.
                </Alert>
            </Snackbar>
        </>
    );
}
