import * as React from 'react';
import { useState, useCallback, useContext } from 'react';
import { Box, TextField, Typography, Button, Alert, Snackbar } from '@mui/material';
import { PageContext } from '../../../pages/SignUp';
import { useMemberCreateApi } from '../../../hooks/Member';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledForm = styled(Box)`
    & > :not(style) {
        width: 300px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledTitle = styled(Typography)`
    font-weight: 700;
    font-size: 1rem;
    margin: 30px;
`;

const StyledSubtitle = styled(Typography)`
    font-weight: 700;
    font-size: 0.75rem;
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    display: flex;
    border-radius: 99px;
    width: 30ch;
    height: 44px;
    margin-top: 58px;
`;

export default function CreateUser3() {
    const { page, changePage } = useContext(PageContext);
    const [postMemberdata] = useMemberCreateApi();
    const [alert, setAlert] = useState(false);
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [otherLinks, setOtherLinks] = useState([]);

    const handleClose = () => {
        setAlert(false);
    };

    const { id, pw, name, engName, email, track, image, major } = page.state;

    const submit = useCallback(async () => {
        if (bio === '' || insta === '') {
            setAlert(true);
        } else {
            const formData = new FormData();
            formData.append('userID', id);
            formData.append('username', name);
            formData.append('usernameEng', engName);
            formData.append('email', email);
            formData.append('passwd', pw);
            formData.append('bio', bio);
            formData.append('track', track);
            formData.append('insta', insta);
            formData.append('otherLinks', otherLinks);
            formData.append('image', image);
            formData.append('major', major);

            postMemberdata(formData);
            changePage({
                p: 4,
                state: { name: name }
            });
        }
    }, [insta, bio, otherLinks]);

    return (
        <StyledContainer>
            <StyledForm component="form" noValidate autoComplete="off">
                <StyledTitle variant="h6" textAlign={'center'}>
                    회원가입
                </StyledTitle>

                <StyledSubtitle>
                    1. 본인을 소개할 수 있는 sns 링크를 첨부해주세요. <br /> (인스타그램, 페이스북
                    등)
                </StyledSubtitle>
                <TextField
                    id="insta"
                    label="인스타"
                    variant="standard"
                    onChange={(e) => setInsta(e.target.value)}
                />

                <StyledSubtitle>
                    2.본인을 소개할 수 있는 기타 링크를 첨부해주세요. <br /> (Figma, Github, GitLab,
                    Behance 등)
                </StyledSubtitle>

                <TextField
                    id="link1"
                    label="기타 링크"
                    variant="standard"
                    onChange={(e) => setOtherLinks([e.target.value])}
                />
                <StyledSubtitle>
                    3. 20자 내로 본인을 소개해주세요. <br /> (예시:스꾸디 신입 김OO)
                </StyledSubtitle>
                <TextField
                    id="bio"
                    label="한줄 소개"
                    variant="standard"
                    onChange={(e) => setBio(e.target.value)}
                />

                <StyledButton variant="contained" onClick={submit}>
                    가입 완료
                </StyledButton>
            </StyledForm>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={alert}
                autoHideDuration={700}
                onClose={handleClose}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    입력을 완료하세요.
                </Alert>
            </Snackbar>
        </StyledContainer>
    );
}
