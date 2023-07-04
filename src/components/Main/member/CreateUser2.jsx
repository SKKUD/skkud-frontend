import * as React from 'react';
import { useState, useContext } from 'react';
import {
    TextField,
    Button,
    FormControl,
    FormLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Alert,
    Snackbar
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { PageContext } from '../../../pages/SignUp';
import styled from '@emotion/styled';

const StyledForm = styled.form`
    & > :not(style) {
        width: 30ch;
    }
    & > h6 {
        margin-bottom: 40px;
        fontweight: 700;
    }
    & > div {
        margin-bottom: 1.3rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
`;

const StyledMenuItem = styled(MenuItem)`
    && {
        margin: 5px 17px 0px;
        padding-left: 0px;
        border-bottom: 0.5px solid #757575;
        line-height: 20px;
        &:last-of-type {
            border-bottom: none;
        }
        & > div {
            font-weight: 500;
        }
    }
`;

const StyledBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledButton = styled(Button)`
    display: flex;
    border-radius: 99px;
    width: 30ch;
    height: 44px;
    margin-top: 60px;
`;

export default function CreateUser2() {
    const { page, changePage } = useContext(PageContext);
    const [alert, setAlert] = useState(false);
    const [name, setName] = useState('');
    const [engName, setEngName] = useState('');
    const [track, setTrack] = useState('');
    const [image, setImage] = useState('');
    const [major, setMajor] = useState('');

    const handleClose = (event, reason) => {
        setAlert(false);
    };
    const nextBtn = () => {
        if (name === '' || engName === '' || track === '' || image === '' || major === '') {
            setAlert(true);
        } else {
            changePage({
                p: 3,
                state: {
                    ...page.state,
                    name: name,
                    engName: engName,
                    track: track,
                    image: image,
                    major: major
                }
            });
        }
    };

    const uploadImgFile = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <>
            <StyledForm component="form" noValidate autoComplete="off">
                <Typography
                    variant="h6"
                    textAlign={'center'}
                    style={{ fontWeight: 700, fontSize: '1rem' }}
                >
                    회원가입
                </Typography>
                <TextField
                    id="name"
                    label="이름"
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="engName"
                    label="영문이름"
                    variant="standard"
                    onChange={(e) => setEngName(e.target.value)}
                />
                <TextField
                    id="major"
                    label="학과"
                    variant="standard"
                    onChange={(e) => setMajor(e.target.value)}
                />
                <FormControl variant="standard">
                    <InputLabel>지원트랙</InputLabel>
                    <Select
                        value={track}
                        onChange={(e) => {
                            setTrack(e.target.value);
                        }}
                        label="track"
                    >
                        <StyledMenuItem value="frontend">
                            <div>Frontend</div>
                        </StyledMenuItem>
                        <StyledMenuItem value="backend">
                            <div>Backend</div>
                        </StyledMenuItem>
                        <StyledMenuItem value="design">
                            <div>Design</div>
                        </StyledMenuItem>
                    </Select>
                </FormControl>

                <StyledBox>
                    {' '}
                    <FormLabel id="demo-row-radio-buttons-group-label">Image</FormLabel>
                    {image ? <p>등록완료</p> : <p></p>}
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input
                            hidden
                            name="image"
                            type="file"
                            accept="image/jpg,image/png,image/jpeg,image/gif"
                            onChange={uploadImgFile}
                        />
                        <PhotoCamera />
                    </IconButton>
                </StyledBox>

                <StyledButton variant="contained" onClick={nextBtn}>
                    다음
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
        </>
    );
}
