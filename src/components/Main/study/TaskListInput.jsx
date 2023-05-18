import React from 'react';
import { Input, Box } from '@mui/material';
import TaskAddBtn from './TaskAddBtn';

export default function TaskListInput({
    HandleAddTask,
    taskContent,
    taskName,
    setTaskContent,
    setTaskName
}) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <TaskAddBtn HandleAddTask={HandleAddTask} />
            <Box sx={{ flexDirection: 'column' }}>
                <Input
                    multiline
                    fullWidth
                    placeholder="과제 내용"
                    onChange={(e) => setTaskContent(e.target.value)}
                    value={taskContent}
                />
                <Input
                    placeholder="이름"
                    onChange={(e) => setTaskName(e.target.value)}
                    value={taskName}
                />
            </Box>
        </Box>
    );
}
