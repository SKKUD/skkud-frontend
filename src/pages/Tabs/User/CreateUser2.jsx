import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function CreateUser2() {
    const [alert, setAlert] = useState(false);
    const [name, setName] = useState('');
    const [engName, setEngName] = useState('');
    const [track, setTrack] = useState('');
    const [image, setImage] = useState('');
    const [major, setMajor] = useState('');
    const location = useLocation();
    const ID = location.state.id;
    const pw = location.state.pw;
    const email = location.state.email;
    const navigate = useNavigate();

    const nextBtn = () => {
        if (name === '' || engName === '' || track === '' || image === '' || major === '') {
            // alert('입력을 완료하세요');
            setAlert(true);
        } else {
            navigate('/maintab/member/createuser3', {
                state: {
                    id: ID,
                    pw: pw,
                    email: email,
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
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
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
                        <MenuItem
                            value={'frontend'}
                            sx={{
                                margin: '5px 17px 0px',
                                borderBottom: '0.5px solid #757575',
                                pl: '0px'
                            }}
                        >
                            <div style={{ fontWeight: 500 }}>Frontend</div>
                        </MenuItem>{' '}
                        <MenuItem
                            value={'backend'}
                            sx={{
                                lineHeight: '20px',
                                margin: '5px 17px 0px',
                                borderBottom: '0.5px solid #757575',
                                pl: '0px'
                            }}
                        >
                            <div style={{ fontWeight: 500 }}>Backend</div>
                        </MenuItem>
                        <MenuItem
                            value={'design'}
                            sx={{
                                margin: '5px 17px 0px',
                                pl: '0px'
                            }}
                        >
                            <div style={{ fontWeight: 500 }}>Design</div>
                        </MenuItem>
                    </Select>
                </FormControl>

                <Box
                    sx={{
                        display: 'flex',
                        mt: '5px',
                        alignContent: 'center',
                        justifyContent: 'space-between'
                    }}
                >
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
                </Box>

                <Button
                    variant="contained"
                    onClick={nextBtn}
                    style={{
                        display: 'flex',
                        borderRadius: '99px',
                        width: '312px',
                        height: '44px',
                        marginTop: '94px'
                    }}
                >
                    다음
                </Button>
            </Box>
            <Snackbar open={alert} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    입력을 완료하세요.
                </Alert>
            </Snackbar>
        </>
    );
}
