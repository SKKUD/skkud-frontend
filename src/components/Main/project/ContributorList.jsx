import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function ContributorList({ users, handleToggle, checked }) {
    return (
        <div style={{ backgroundColor: '#333', borderBottom: '1px solid #ffffff99' }}>
            <div
                style={{
                    fontSize: '0.75rem',
                    color: '#ffffff99',
                    padding: '12px 0px 0px 12px'
                }}
            >
                참여 멤버
            </div>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: '#333' }}>
                {users.map((member) => {
                    const id = member._id;
                    const name = member.username;
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
        </div>
    );
}
