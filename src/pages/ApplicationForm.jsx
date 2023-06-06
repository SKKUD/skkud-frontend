import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useApplicationFormDetailApi } from '../hooks/Application';
import Header from '../components/common/Header';
import img from '../assets/login_default.png';
import Footer from '../components/common/Footer';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const BASE_URI = () => {
    if (process.env.REACT_APP_ENV === 'production') return process.env.REACT_APP_DEV_URI;
    else return process.env.REACT_APP_PROD_URI;
};

export default function ApplicationForm() {
    const form = useApplicationFormDetailApi();

    const { title, questions } = form;

    const navigate = useNavigate();
    const navigateToMainTab = () => {
        navigate('/maintab');
    };
    const [answerAlert, setAnswerAlert] = useState(false);
    const [nameAlert, setNameAlert] = useState(false);
    const [majorAlert, setMajorAlert] = useState(false);
    const [studentIdAlert, setStudentIdAlert] = useState(false);
    const [trackAlert, setTrackAlert] = useState(false);
    const [numAlert, setNumAlert] = useState(false);
    const [emailAlert, setEmailAlert] = useState(false);
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = React.useState('');
    const [track, setTrack] = React.useState('');
    const [documentAnswer1, setDocumentAnswer1] = useState('');
    const [documentAnswer2, setDocumentAnswer2] = useState('');
    const documentAnswers = [];
    const [next, setNext] = useState('');
    const [submit, setSubmit] = useState('');
    const handleClose = (event, reason) => {
        setAnswerAlert(false);
        setNameAlert(false);
        setMajorAlert(false);
        setStudentIdAlert(false);
        setTrackAlert(false);
        setNumAlert(false);
        setEmailAlert(false);
    };

    const HandlPostSubmit = async () => {
        if (documentAnswer1 === '' || documentAnswer2 === '') {
            // alert('답변을 입력하세요.');
            setAnswerAlert(true);
        } else {
            documentAnswers.push(documentAnswer1);
            documentAnswers.push(documentAnswer2);
            const application = {
                name,
                studentId,
                phoneNumber,
                email,
                major,
                track,
                documentAnswers
            };
            await axios
                .post(BASE_URI() + '/applies/appliedUsers', application)
                .then(() => {
                    setSubmit('submit');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const HandleNext = () => {
        if (name === '') {
            // alert('이름을 입력하세요');
            setNameAlert(true);
        } else if (major === '') {
            // alert('학과를 입력하세요');
            setMajorAlert(true);
        } else if (studentId === '') {
            // alert('학번을 입력하세요');
            setStudentIdAlert(true);
        } else if (phoneNumber === '') {
            // alert('연락처를 입력하세요');
            setNumAlert(true);
        } else if (email === '') {
            // alert('이메일을 입력하세요');
            setEmailAlert(true);
        } else if (track === '') {
            // alert('지원트랙을 입력하세요');
            setTrackAlert(true);
        } else {
            setNext('next');
        }
    };

    return (
        <>
            <Box>
                <Header />
                {submit === '' ? (
                    <form
                        style={{
                            width: '100%',
                            marginTop: '60px',
                            padding: '40px 20px 0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <div style={{ fontSize: '1.35rem', fontWeight: 700 }}>{title}</div>
                        </div>
                        {next === '' ? (
                            <>
                                <div
                                    id="firstForm"
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        minHeight: `calc(100vh - 200px)`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                >
                                    <TextField
                                        label="이름"
                                        id="name"
                                        onChange={(e) => setName(e.target.value)}
                                        variant="standard"
                                        sx={{ mt: '10px', width: '95%' }}
                                        InputLabelProps={{
                                            style: {
                                                marginLeft: '10px'
                                            }
                                        }}
                                        inputProps={{
                                            style: {
                                                height: '35px',
                                                paddingLeft: '10px'
                                            }
                                        }}
                                    />
                                    <TextField
                                        label="학과"
                                        id="major"
                                        onChange={(e) => setMajor(e.target.value)}
                                        variant="standard"
                                        sx={{ mt: '10px', width: '95%' }}
                                        InputLabelProps={{
                                            style: {
                                                marginLeft: '10px'
                                            }
                                        }}
                                        inputProps={{
                                            style: {
                                                height: '35px',
                                                paddingLeft: '10px'
                                            }
                                        }}
                                    />
                                    <TextField
                                        label="학번"
                                        id="StudentId"
                                        onChange={(e) => setStudentId(e.target.value)}
                                        variant="standard"
                                        sx={{ mt: '10px', width: '95%' }}
                                        InputLabelProps={{
                                            style: {
                                                marginLeft: '10px'
                                            }
                                        }}
                                        inputProps={{
                                            style: {
                                                height: '35px',
                                                paddingLeft: '10px'
                                            }
                                        }}
                                    />
                                    <TextField
                                        label="전화번호"
                                        id="StudentId"
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        variant="standard"
                                        sx={{ mt: '10px', width: '95%' }}
                                        InputLabelProps={{
                                            style: {
                                                marginLeft: '10px'
                                            }
                                        }}
                                        inputProps={{
                                            style: {
                                                height: '35px',
                                                paddingLeft: '10px'
                                            }
                                        }}
                                    />
                                    <TextField
                                        label="Email"
                                        id="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        variant="standard"
                                        sx={{ mt: '10px', width: '95%' }}
                                        InputLabelProps={{
                                            style: {
                                                marginLeft: '10px'
                                            }
                                        }}
                                        inputProps={{
                                            style: {
                                                height: '35px',
                                                paddingLeft: '10px'
                                            }
                                        }}
                                    />
                                    <FormControl
                                        variant="standard"
                                        sx={{ mt: '10px', width: '95%' }}
                                    >
                                        <InputLabel sx={{ marginLeft: '10px' }}>
                                            지원트랙
                                        </InputLabel>
                                        <Select
                                            value={track}
                                            onChange={(e) => {
                                                setTrack(e.target.value);
                                            }}
                                            label="track"
                                            sx={{ height: '45px' }}
                                        >
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
                                                {/* <div style={{ marginLeft: '20px', fontWeight: 300 }}>백엔드</div> */}
                                            </MenuItem>
                                            <MenuItem
                                                value={'frontend'}
                                                sx={{
                                                    margin: '5px 17px 0px',
                                                    borderBottom: '0.5px solid #757575',
                                                    pl: '0px'
                                                }}
                                            >
                                                <div style={{ fontWeight: 500 }}>Frontend</div>
                                                {/* <div style={{ marginLeft: '18px', fontWeight: 300 }}>프론트엔드</div> */}
                                            </MenuItem>
                                            <MenuItem
                                                value={'design'}
                                                sx={{
                                                    margin: '5px 17px 0px',
                                                    pl: '0px'
                                                }}
                                            >
                                                <div style={{ fontWeight: 500 }}>Design</div>
                                                {/* <div style={{ marginLeft: '30px', fontWeight: 300 }}>디자인</div> */}
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button
                                        variant="contained"
                                        onClick={HandleNext}
                                        sx={{
                                            margin: '100px 0px 59px',
                                            padding: '12px 45%',
                                            borderRadius: '99px',
                                            fontWeight: 600,
                                            maxWidth: '500px'
                                        }}
                                    >
                                        다음
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div
                                id="secondForm"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    marginTop: '30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>
                                    Q1. {questions[0]}
                                </div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    label="답변을 입력하세요."
                                    id="ProjectDetail"
                                    sx={{ mt: '10px' }}
                                    multiline
                                    rows={10}
                                    onChange={(e) => setDocumentAnswer1(e.target.value)}
                                />
                                <div
                                    style={{
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        marginTop: '40px'
                                    }}
                                >
                                    Q2. {questions[1]}
                                </div>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    label="답변을 입력하세요."
                                    id="ProjectDetail"
                                    sx={{ mt: '10px', mb: '10px' }}
                                    multiline
                                    rows={10}
                                    onChange={(e) => setDocumentAnswer2(e.target.value)}
                                />

                                <Button
                                    variant="contained"
                                    onClick={HandlPostSubmit}
                                    sx={{
                                        margin: '40px 0px 59px',
                                        padding: '12px 40%',
                                        borderRadius: '99px',
                                        fontWeight: 600,
                                        maxWidth: '500px'
                                    }}
                                >
                                    지원 완료
                                </Button>
                            </div>
                        )}
                    </form>
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginTop: '120px'
                        }}
                    >
                        <div style={{ fontSize: '1.8rem' }}>지원이 접수되었습니다!</div>
                        <div style={{ fontSize: '1.2rem', marginTop: '5px', color: '#00FFA8' }}>
                            지원 완료!
                        </div>
                        <div
                            style={{
                                width: '160px',
                                height: '160px',
                                borderRadius: '100%',
                                backgroundColor: '#844AFF',
                                marginTop: '41px'
                            }}
                        >
                            <img
                                src={img}
                                alt="emoji"
                                style={{ width: '100%', marginLeft: '-10px' }}
                            />
                        </div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '31px' }}>
                            확인 후 입력하신 이메일로
                            <br />
                            안내 드리겠습니다!
                        </div>
                        <Button
                            variant="contained"
                            onClick={navigateToMainTab}
                            sx={{
                                margin: '170px 0px 59px',
                                padding: '12px 30%',
                                borderRadius: '99px',
                                fontWeight: 700,
                                color: '#fff',
                                border: '1px solid #727272',
                                backgroundColor: '#2C2C2E',
                                maxWidth: '500px'
                            }}
                        >
                            스꾸디 둘러보기
                        </Button>
                    </div>
                )}
                <Footer />
            </Box>
            <Snackbar open={answerAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    답변을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={nameAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    이름을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={majorAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    학과를 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={numAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    연락처를 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={studentIdAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    학번을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={trackAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    지원트랙을 입력하세요.
                </Alert>
            </Snackbar>
            <Snackbar open={emailAlert} autoHideDuration={700} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    이메일을 입력하세요.
                </Alert>
            </Snackbar>
        </>
    );
}
