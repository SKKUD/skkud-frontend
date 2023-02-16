import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useAppliedUserEditApi } from '../../hooks/Application';

export default function EditApplicantScore({ documentScores, interviewScores, id }) {
    const [edit, setEdit] = useState(false);
    const [Dscore, setDscore] = useState(documentScores);
    const [Iscore, setIscore] = useState(interviewScores);

    const handleSubmit = () => {
        useAppliedUserEditApi(id, {
            documentScores: Dscore,
            interviewScores: Iscore
        });
        window.location.reload();
    };

    function EditBtn() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                }}
            >
                <div style={{ fontWeight: '600' }}>면접 결과</div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontWeight: '400', fontSize: '0.8rem', color: '#00FFB0' }}>
                        Edit
                    </div>
                    <IconButton
                        color="primary"
                        aria-label="edit post"
                        component="label"
                        onClick={() => {
                            setEdit(!edit);
                        }}
                        sx={{ display: 'flex', justifySelf: 'end', margin: '0' }}
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
        );
    }

    return (
        <Box
            mt="15px"
            sx={{
                border: '1px solid #777777',
                borderRadius: '5px',
                padding: '10px 20px 20px 20px'
            }}
        >
            <EditBtn />
            {documentScores &&
                documentScores.map((score, index) => (
                    <div
                        style={{
                            fontWeight: '400',
                            fontSize: '0.8rem'
                        }}
                        key={index}
                    >
                        {index + 1}번째 답변 : {score}점
                    </div>
                ))}
            <div
                style={{
                    fontWeight: '400',
                    fontSize: '0.8rem'
                }}
            >
                면접 : {interviewScores}점
            </div>
            {edit === true ? (
                <div
                    style={{
                        width: '100%',
                        margin: '20px auto 0px'
                    }}
                >
                    <TextField
                        fullWidth
                        label="서류 점수"
                        placeholder=",로 구분하여 차례대로 입력하세요."
                        id="groupName"
                        size="small"
                        onChange={(e) => {
                            const tagsArray = e.target.value.split(',');
                            setDscore(tagsArray);
                        }}
                        value={Dscore || ''}
                    />
                    <TextField
                        fullWidth
                        label="면접 점수"
                        placeholder="면접 점수를 입력하세요."
                        id="studyDay"
                        size="small"
                        sx={{ marginTop: '10px' }}
                        onChange={(e) => setIscore(e.target.value)}
                        value={Iscore || ''}
                    />

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            sx={{ mt: 1.5, textTransform: 'none' }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            ) : null}
        </Box>
    );
}
