import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledBtn = styled(Button)`
    color: #fff;
    font-weight: 500;
    line-height: 20px;
    height: 35px;
    margin-right: 15px;
    > p {
        text-decoration: underline;
        margin-right: 2px;
    }

    :hover {
        background-color: transparent;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;
export default function UserToggle({ username, logout }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <StyledBtn
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <p>{username}</p>님 <ArrowDropDownIcon />
            </StyledBtn>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem>
                    <StyledLink to="/maintab/member/mypage" onClick={handleClose}>
                        My Page
                    </StyledLink>
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
