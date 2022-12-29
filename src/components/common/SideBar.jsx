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

function SidebarItem({ path, name }) {
    return (
        <ListItem disablePadding>
            <Link
                style={{ color: 'white', textDecoration: 'none', width: '100%' }}
                to={`/maintab/${path}`}
            >
                <ListItemButton>
                    <ListItemText sx={{ textAlign: 'right' }} primary={name} />
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
            >
                <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                <DrawerHeader sx={{ marginTop: '45px' }}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <MenuIcon sx={{ fontSize: 35 }} />
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
                        <SidebarItem path="" name="about us" sx={{ pr: '0px' }} />
                        <SidebarItem path="project" name="project" />
                        <SidebarItem path="frontend" name="member" />
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
                        <SidebarItem path="project" name="schedule" />
                        <SidebarItem path="project" name="study" />
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
