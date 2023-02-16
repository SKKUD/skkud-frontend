import * as React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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

function SidebarItem({ path, name, color }) {
    return (
        <ListItem disablePadding sx={{ marginBottom: '10px' }}>
            <Link style={{ color: `${color}`, textDecoration: 'none', width: '100%' }} to={path}>
                <ListItemButton sx={{ justifyContent: 'end' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.93rem' }}>{name}</div>
                </ListItemButton>
            </Link>
        </ListItem>
    );
}

SidebarItem.propTypes = {
    path: PropTypes.string.isRequired
};

export default function SideBar() {
    const [cookies] = useCookies(['id']);

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
                <DrawerHeader sx={{ marginTop: '18px', pr: '18px' }}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <MenuIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                </DrawerHeader>

                <Box
                    sx={{
                        width: '169px',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        alignItems: 'flex-end',
                        pr: '12px',
                        mt: '10px'
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <SidebarItem
                            path="/maintab"
                            name="About us"
                            sx={{ pr: '0px' }}
                            color="#fff"
                        />
                        <SidebarItem path="/maintab/project" name="Project" color="#fff" />
                        <SidebarItem path="/maintab/member" name="Member" color="#fff" />
                        <SidebarItem path="/maintab/study" name="Study" color="#fff" />
                        <div
                            style={{
                                width: '99px',
                                border: 'none',
                                height: '1px',
                                backgroundColor: '#929292',
                                marginRight: '12px',
                                marginTop: '20px',
                                marginBottom: '22px'
                            }}
                        />

                        {cookies.id ? (
                            <>
                                <SidebarItem
                                    path="/maintab/member/mypage"
                                    name="My Page"
                                    color="#00FFA8"
                                />
                                <SidebarItem path="/applier" name="Recruitment" color="#00FFA8" />
                                <SidebarItem path="/login" name="Log Out" color="#00FFA8" />
                            </>
                        ) : (
                            <>
                                <SidebarItem
                                    path="/application"
                                    name="Recruitment"
                                    color="#00FFA8"
                                />
                                <SidebarItem path="/login" name="Log In" color="#00FFA8" />
                            </>
                        )}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
