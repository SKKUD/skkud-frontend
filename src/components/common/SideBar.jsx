import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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

export default function SideBar() {
    // const drawerWidth = 200;
    // const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

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
            {/* <Drawer
                sx={{
                    width: drawerWidth,
                    // flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth
                    }
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    
                </List>
            </Drawer> */}
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
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ textAlign: 'right' }} primary="project" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ textAlign: 'right' }} primary="member" />
                            </ListItemButton>
                        </ListItem>
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
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ textAlign: 'right' }} primary="schedule" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ textAlign: 'right' }} primary="study" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Button
                    variant="contained"
                    sx={{
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
