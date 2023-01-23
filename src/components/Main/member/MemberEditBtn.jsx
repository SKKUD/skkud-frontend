import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

export function MemberEditBtn(_id) {
    const id = Object.values(_id)[0];
    const navigate = useNavigate();
    const navigateToMemberEdit = () => {
        navigate('/maintab/mypage', { state: { id: id } });
    };

    return (
        <IconButton
            color="primary"
            aria-label="edit post"
            component="label"
            onClick={() => {
                navigateToMemberEdit();
            }}
        >
            <EditIcon fontSize="small" />
        </IconButton>
    );
}

export function MemberEditDetailBtn(_id) {
    const id = Object.values(_id)[0];
    const navigate = useNavigate();
    const navigateToUserDetail = () => {
        navigate('/maintab/member/mypagedetail');
    };

    return (
        <Button
            variant="contained"
            onClick={navigateToUserDetail}
            color="background"
            style={{
                borderRadius: 17,
                border: '1px solid #00ffa8',
                color: '#00ffa8',
                width: '110px',
                height: '21px',
                fontSize: '11px',
                padding: '4px 14px',
                gap: '10px'
            }}
        >
            ID/비밀번호 수정
        </Button>
    );
}
