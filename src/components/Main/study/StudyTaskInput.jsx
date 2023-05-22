import React from 'react';
import { Box, Stack } from '@mui/material';
import TaskListInput from './TaskListInput';
import TaskListItem from './TaskListItem';
import styled from '@emotion/styled';

const Container = styled(Box)`
    margin-bottom: 50px;
`;

const Label = styled(Box)`
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 0.75rem;
`;

const StyledStack = styled(Stack)`
    justify-content: left;
    flex-wrap: wrap;
`;

export default function StudyTaskInput({
    setTask,
    setTaskNames,
    setTaskContents,
    Task,
    taskNames,
    taskContents,
    HandleAddTask,
    taskContent,
    taskName,
    setTaskContent,
    setTaskName
}) {
    return (
        <Container>
            <Label>과제</Label>
            <StyledStack direction="column" spacing={0.5}>
                {Task &&
                    Task.map((item) => (
                        <TaskListItem
                            key={item.task}
                            item={item}
                            setTask={setTask}
                            setTaskNames={setTaskNames}
                            setTaskContents={setTaskContents}
                            Task={Task}
                            taskNames={taskNames}
                            taskContents={taskContents}
                        />
                    ))}
                <TaskListInput
                    HandleAddTask={HandleAddTask}
                    taskContent={taskContent}
                    taskName={taskName}
                    setTaskContent={setTaskContent}
                    setTaskName={setTaskName}
                />
            </StyledStack>
        </Container>
    );
}
