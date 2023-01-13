import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function MemberDeleteBtn(_id) {
    // const id = Object.values(_id)[0];
    const navigate = useNavigate();
    const navigateToMainTab = () => {
        navigate('/maintab');
    };
    const logoutBtn = async () => {
        removeCookie('id');
        await axios
            .post('http://localhost:8000/auth/logout')
            .then((userData) => console.log(userData))
            .catch((error) => console.log(error));

        navigateToMainTab();
    };
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const id = cookies.id;
    const deleteEvent = async () => {
        if (window.confirm('계정을 삭제합니다')) {
            alert('계정이 삭제되었습니다.');
            await axios
                .delete(`http://localhost:8000/users/${id}`)
                .then((response) => console.log('delete', response));
            logoutBtn();
            // window.location.reload();
        } else {
            alert('취소합니다.');
        }
    };

    return (
        <Button
            variant="contained"
            color="background"
            onClick={deleteEvent}
            style={{
                borderRadius: 17,
                border: '1px solid red',
                color: 'red',
                width: '200px',
                height: '21px',
                fontSize: '11px',
                padding: '4px 14px',
                gap: '10px',
                marginTop: '30px'
            }}
        >
            계정 삭제
        </Button>
    );
}
