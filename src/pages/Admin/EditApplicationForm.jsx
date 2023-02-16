import React from 'react';
import { useApplierApi } from '../../hooks/Applier';
import { TextField, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';

export default function EditApplicationForm() {
    const [appliers, setAppliers, updateApplier] = useApplierApi();
    return (
        <Box>
            <Typography variant="h6">모집공고 제목</Typography>
            <TextField
                fullWidth
                id="title"
                margin="normal"
                value={appliers.title ? appliers.title : ''}
                sx={{ mt: '10px' }}
                onChange={(e) => setAppliers({ ...appliers, title: e.target.value })}
            />
            <Typography variant="h6">스꾸디 소개</Typography>
            <TextField
                fullWidth
                id="introduction"
                margin="normal"
                value={appliers.introduction ? appliers.introduction : ''}
                sx={{ mt: '10px' }}
                onChange={(e) => setAppliers({ ...appliers, introduction: e.target.value })}
            />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography variant="h6">질문</Typography>
                <Button
                    onClick={() =>
                        setAppliers({ ...appliers, questions: [...appliers.questions, ''] })
                    }
                >
                    질문추가
                </Button>
            </div>

            {appliers.questions
                ? appliers.questions.map((item, index) => {
                      return (
                          <div style={{ display: 'flex', flexDirection: 'row' }} key={index}>
                              <TextField
                                  fullWidth
                                  id="question"
                                  margin="normal"
                                  value={item}
                                  sx={{ mt: '10px' }}
                                  onChange={(e) => {
                                      const newQuestions = appliers.questions;
                                      newQuestions[index] = e.target.value;
                                      setAppliers({ ...appliers, questions: newQuestions });
                                  }}
                              />
                              <Button
                                  onClick={() => {
                                      const newQuestions = appliers.questions.filter(
                                          (qitem, qindex) => index !== qindex
                                      );
                                      setAppliers({ ...appliers, questions: newQuestions });
                                  }}
                              >
                                  Delete
                              </Button>
                          </div>
                      );
                  })
                : ''}

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button type="button" onClick={() => updateApplier()}>
                    Submit
                </Button>
            </div>
        </Box>
    );
}
