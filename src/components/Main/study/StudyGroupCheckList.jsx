import React from 'react';
import { Checkbox, ListItem, ListItemText, ListItemButton, List } from '@mui/material';
import styled from '@emotion/styled';

const StyledList = styled(List)({
    width: '100%',
    maxWidth: 360,
    bgcolor: '#333'
});

export default function StudyGroupCheckList({ studyGroups, handleToggle, checked }) {
    return (
        <StyledList dense>
            {studyGroups.map((group) => {
                const { _id: id, groupName: name } = group;
                const labelId = `checkbox-list-secondary-label-${id}`;
                return (
                    <ListItem key={id} disablePadding>
                        <ListItemButton onClick={handleToggle(id)} aria-labelledby={labelId}>
                            <ListItemText primary={`${name}`} />
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(id)}
                                checked={checked.indexOf(id) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </StyledList>
    );
}
