import React from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const Container = styled(Box)`
    margin: 10px 0;
`;

const TaskContainer = styled(Box)`
    font-weight: 700;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
`;

const TaskName = styled(Box)`
    font-size: 0.75rem;
`;

const BackspaceIcon = styled(BackspaceOutlinedIcon)`
    font-size: 0.6rem;
    margin-left: 10px;
    cursor: pointer;
`;

export default function TaskListItem({
    item,
    setTask,
    setTaskNames,
    setTaskContents,
    Task,
    taskNames,
    taskContents
}) {
    const handleDelete = () => {
        setTask(Task.filter((i) => i.task !== item.task));
        setTaskNames(taskNames.filter((i) => i !== item.name));
        setTaskContents(taskContents.filter((i) => i !== item.task));
    };

    return (
        <Container key={item.task}>
            <TaskContainer>
                {item.task}
                <BackspaceIcon onClick={handleDelete} />
            </TaskContainer>
            <TaskName>{item.name}</TaskName>
        </Container>
    );
}
