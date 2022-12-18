import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Onboarding from './Onboarding';
import Login from '../components/common/Login';
import MainTab from './Tabs/MainTab';

export default function MainPage() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/login">login</Link>
            <Link to="/maintab">maintab</Link>

            <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/maintab/*" element={<MainTab />} />
            </Routes>
        </>
    );
}
