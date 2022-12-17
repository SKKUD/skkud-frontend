import * as React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));

function SidebarItem({ path }) {
    return (
        <ListItem disablePadding>
            <NavLink
                style={{ color: 'white', textDecoration: 'none', width: '100%' }}
                to={`/${path}`}
            >
                <ListItemButton>
                    <ListItemText sx={{ textAlign: 'right' }} primary={path} />
                </ListItemButton>
            </NavLink>
        </ListItem>
    );
}

SidebarItem.propTypes = {
    path: PropTypes.string.isRequired
};

export default function SideBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (val) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(val);
    };

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer(true)}
                sx={{ ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer(false)}>
                        <MenuIcon />
                    </IconButton>
                </DrawerHeader>

                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        alignItems: 'flex-end',
                        pr: '10px'
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <SidebarItem path="project" sx={{ pr: '0px' }} />
                        <SidebarItem path="member" />
                    </List>

                    <div
                        style={{
                            width: '80%',
                            border: 'none',
                            borderTop: '2px dashed gray',
                            alignSelf: 'center'
                        }}
                    />
                    <List>
                        <SidebarItem path="project" />
                        <SidebarItem path="project" />
                    </List>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        width: '70%',
                        alignSelf: 'center',
                        borderRadius: '20px',
                        textTransform: 'none',
                        marginTop: 'auto',
                        mb: '100%'
                    }}
                >
                    recruitment
                </Button>
            </Drawer>
        </>
    );
}
