import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Applier from './Applier';

function Admin() {
    return (
        <>
            <Routes>
                <Route path="applier" element={<Applier />} />
            </Routes>
        </>
    );
}

export default Admin;
