import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
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
    justifyContent: 'flex-end',
    marginTop: '18px',
    paddingRight: '18px'
}));

const SidebarWrapper = styled(Box)`
    width: 169px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-end;
    padding-right: 12px;
    margin-top: 10px;

    & SidebarItem:first-of-type {
        padding-right: 0px;
    }
`;

const Divider = styled.div`
    width: 99px;
    border: none;
    height: 1px;
    background-color: #929292;
    margin-right: 12px;
    margin-top: 20px;
    margin-bottom: 22px;
`;

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
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer(false)}>
                        <MenuIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                </DrawerHeader>

                <SidebarWrapper
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <SidebarItem path="/maintab" name="About us" color="#fff" />
                        <SidebarItem path="/maintab/project" name="Project" color="#fff" />
                        <SidebarItem path="/maintab/member" name="Member" color="#fff" />
                        <SidebarItem path="/maintab/study" name="Study" color="#fff" />
                        <Divider />

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
                </SidebarWrapper>
            </Drawer>
        </>
    );
}

function SidebarItem({ path, name, color }) {
    const StyledListItem = styled(ListItem)`
        margin-bottom: 10px;
    `;

    const StyledLink = styled(Link)`
        width: 100%;
        color: ${(props) => props.linkColor};
        text-decoration: none;
    `;

    const StyledItemButton = styled(ListItemButton)`
        justify-content: end;
        > div {
            font-weight: 600;
            font-size: 0.93rem;
        }
    `;

    return (
        <StyledListItem disablePadding>
            <StyledLink linkColor={color} to={path}>
                <StyledItemButton>
                    <div>{name}</div>
                </StyledItemButton>
            </StyledLink>
        </StyledListItem>
    );
}

SidebarItem.propTypes = {
    path: PropTypes.string.isRequired
};
