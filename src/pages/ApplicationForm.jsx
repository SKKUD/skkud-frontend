import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useApplicationFormDetailApi } from '../hooks/Application';
import Header from '../components/common/Header';

export default function ApplicationForm() {
<<<<<<< HEAD
    // const [form, setForm] = useState({});

=======
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
    const form = useApplicationFormDetailApi();

    const { title, introduction, questions } = form;

<<<<<<< HEAD
    // const appliers = useAppliedUserApi();
    // console.log(appliers);

=======
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
    const navigate = useNavigate();
    const navigateToMainTab = () => {
        navigate('/maintab');
    };

    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [documentAnswer1, setDocumentAnswer1] = useState('');
    const [documentAnswer2, setDocumentAnswer2] = useState('');
    const documentAnswers = [];

    const HandlPostSubmit = async () => {
        if (name === '') {
            alert('이름을 입력하세요');
        } else if (phoneNumber === '') {
            alert('연락처를 입력하세요');
        } else {
            documentAnswers.push(documentAnswer1);
            documentAnswers.push(documentAnswer2);
            const application = { name, studentId, phoneNumber, email, documentAnswers };
            await axios
                .post('http://localhost:8000/applies/appliedUsers', application)
                .then((response) => {
                    console.log(response.status);
                })
                .then(() => {
                    navigateToMainTab();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <Box>
            <Header />

            <form
                style={{
                    marginTop: '70px',
                    padding: '40px 20px 0',
                    backgroundColor: '#252525',
                    borderTopLeftRadius: '100px'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Typography variant="h5" mb={'20px'}>
                        [ {title} ]
                    </Typography>
                    <Typography variant="h7">{introduction}</Typography>
                </div>
                <Typography variant="h6" ml={'5px'}>
                    인적사항
                </Typography>
                <TextField
                    fullWidth
                    label="Name"
                    id="name"
                    sx={{ mt: '10px' }}
                    onChange={(e) => setName(e.target.value)}
                    size="small"
                />
                <TextField
                    fullWidth
                    label="Student Id"
                    id="StudentId"
                    sx={{ mt: '10px' }}
                    onChange={(e) => setStudentId(e.target.value)}
                    size="small"
                />
                <TextField
                    fullWidth
                    label="Phone number"
                    id="StudentId"
                    sx={{ mt: '10px' }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    size="small"
                />
                <TextField
                    fullWidth
                    label="Email"
                    id="Email"
                    sx={{ mt: '10px', mb: '10px' }}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                />
                <Typography variant="h6" ml={'5px'} mt={'15px'}>
                    질문
                </Typography>
                <TextField
                    fullWidth
                    label={questions[0]}
                    id="ProjectDetail"
                    sx={{ mt: '10px' }}
                    multiline
                    rows={10}
                    onChange={(e) => setDocumentAnswer1(e.target.value)}
                />
                <TextField
                    fullWidth
                    label={questions[1]}
                    id="ProjectDetail"
                    sx={{ mt: '10px', mb: '10px' }}
                    multiline
                    rows={10}
                    onChange={(e) => setDocumentAnswer2(e.target.value)}
                />

                <Box
                    sx={{
                        display: 'flex',
                        mt: '5px',
                        alignContent: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button variant="contained" onClick={HandlPostSubmit} sx={{ margin: '0 auto' }}>
                        submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
