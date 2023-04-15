import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import { useAppliedUserEditApi } from '../../hooks/Application';

const TitleNButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const Title = styled.div`
    font-weight: 600;
`;

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
`;

const StyledIconButton = styled(IconButton)`
    display: flex;
    justify-self: end;
`;

const EditText = styled.div`
    font-weight: 500;
    font-size: 0.9rem;
    color: #00ffb0;
`;

const ResultBox = styled(Box)`
    margin-top: 15px;
    border: 1px solid #777777;
    border-radius: 5px;
    padding: 10px 20px 20px 20px;
`;

const Score = styled.div`
    font-weight: 400;
    font-size: 0.8rem;
`;

const EditScore = styled.div`
    width: 100%;
    margin: 20px auto 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function EditBtn({ setEdit, edit }) {
    return (
        <TitleNButtonWrap>
            <Title>면접 결과</Title>
            <ButtonWrap>
                <StyledIconButton
                    color="primary"
                    aria-label="edit post"
                    component="label"
                    onClick={() => {
                        setEdit(!edit);
                    }}
                >
                    <EditIcon fontSize="small" />
                </StyledIconButton>
                <EditText>Edit</EditText>
            </ButtonWrap>
        </TitleNButtonWrap>
    );
}

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

    return (
        <ResultBox>
            <EditBtn setEdit={setEdit} edit={edit} />
            {documentScores &&
                documentScores.map((score, index) => (
                    <Score key={index}>
                        {index + 1}번째 답변 : {score}점
                    </Score>
                ))}
            <Score>면접 : {interviewScores}점</Score>
            {edit === true ? (
                <EditScore>
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
                        sx={{ margin: '10px' }}
                        onChange={(e) => setIscore(e.target.value)}
                        value={Iscore || ''}
                    />

                    <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        sx={{ textTransform: 'none' }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </EditScore>
            ) : null}
        </ResultBox>
    );
}
