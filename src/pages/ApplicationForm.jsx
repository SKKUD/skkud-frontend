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
    // const [form, setForm] = useState({});

    const form = useApplicationFormDetailApi();

    const { title, introduction, questions } = form;

    // const appliers = useAppliedUserApi();
    // console.log(appliers);

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

            <form>
                <Typography variant="h4">{title}</Typography>
                <p>{introduction}</p>
                <Typography variant="h6">인적사항</Typography>
                <TextField
                    fullWidth
                    label="Name"
                    id="name"
                    sx={{ mt: '10px' }}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Student Id"
                    id="StudentId"
                    sx={{ mt: '10px' }}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Phone number"
                    id="StudentId"
                    sx={{ mt: '10px' }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Email"
                    id="Email"
                    sx={{ mt: '10px', mb: '10px' }}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Typography variant="h6">질문</Typography>
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
                    <Button variant="contained" onClick={HandlPostSubmit}>
                        submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
}