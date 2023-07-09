import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from './Onboarding';
import Login from './Login';
import MainTab from './Tabs/MainTab';
import ApplicationForm from './ApplicationForm';
import Appliers from './Admin/Appliers';
import SignUp from './SignUp';
import NotFound from './NotFound';

export default function MainPage() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/maintab/*" element={<MainTab />} />
                <Route path="/application" element={<ApplicationForm />} />
                <Route path="/applier/*" element={<Appliers />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
}
