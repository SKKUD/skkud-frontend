import React from 'react';
import { useState } from 'react';
import { useStudyGroupsApi } from '../../../hooks/Study';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function StudyGroupDelete() {
    const [studyGroups, , , , deleteStudyGroup] = useStudyGroupsApi();

    const [checked, setChecked] = useState('');

    const handleToggle = (id) => () => {
        const currentIndex = checked.indexOf(id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.pop();
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleSubmit = () => {
        deleteStudyGroup(checked[0]);
        window.location.reload();
    };
    return (
        <div
            style={{
                width: '90%',
                margin: '0 auto'
            }}
        >
            <div
                style={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    margin: '10px'
                }}
            >
                삭제할 스터디 그룹 선택
            </div>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: '#333' }}>
                {studyGroups.map((group) => {
                    const id = group._id;
                    const name = group.groupName;
                    const labelId = `checkbox-list-secondary-label-${id}`;
                    return (
                        <ListItem
                            key={id}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(id)}
                                    checked={checked.indexOf(id) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText id={labelId} primary={`${name}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    sx={{ mt: 1.5, textTransform: 'none' }}
                    onClick={handleSubmit}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}
