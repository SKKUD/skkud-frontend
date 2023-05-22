import React from 'react';
import { Link } from 'react-router-dom';
import EditBtn from '../../common/EditBtn';
import StudyDeleteBtn from './StudyDeleteBtn';

export default function EditNDeleteBtn({ id }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Link
                to={`/maintab/study/edit/${id}`}
                style={{
                    textDecoration: 'none',
                    display: 'contents',
                    width: '100%'
                }}
            >
                <EditBtn />
            </Link>
            <StudyDeleteBtn state={id} />
        </div>
    );
}
