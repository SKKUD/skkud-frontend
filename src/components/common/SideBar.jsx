import * as React from 'react';
import { Link } from 'react-router-dom';
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

<<<<<<< HEAD
function SidebarItem({ path }) {
=======
function SidebarItem({ path, name }) {
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
    return (
        <ListItem disablePadding>
            <Link
                style={{ color: 'white', textDecoration: 'none', width: '100%' }}
                to={`/maintab/${path}`}
            >
                <ListItemButton>
<<<<<<< HEAD
                    <ListItemText sx={{ textAlign: 'right' }} primary={path} />
=======
                    <ListItemText sx={{ textAlign: 'right' }} primary={name} />
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
                </ListItemButton>
            </Link>
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
<<<<<<< HEAD
                sx={{ ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer(false)}>
                        <MenuIcon />
=======
            >
                <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                <DrawerHeader sx={{ marginTop: '45px' }}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <MenuIcon sx={{ fontSize: 35 }} />
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
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
<<<<<<< HEAD
                        <SidebarItem path="project" sx={{ pr: '0px' }} />
                        <SidebarItem path="member" />
=======
                        <SidebarItem path="" name="about us" sx={{ pr: '0px' }} />
                        <SidebarItem path="project" name="project" />
                        <SidebarItem path="frontend" name="member" />
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
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
<<<<<<< HEAD
                        <SidebarItem path="project" />
                        <SidebarItem path="project" />
=======
                        <SidebarItem path="project" name="schedule" />
                        <SidebarItem path="project" name="study" />
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
                    </List>
                </Box>
                <Link
                    to="/application"
                    style={{
                        textDecoration: 'none',
                        display: 'contents',
                        width: '100%'
                    }}
                >
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
                </Link>
            </Drawer>
        </>
    );
}
