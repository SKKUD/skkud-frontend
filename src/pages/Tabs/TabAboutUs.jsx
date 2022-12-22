import React from 'react';
import Intro from '../../components/Main/aboutUs/Intro';
import About from '../../components/Main/aboutUs/About';
import History from '../../components/Main/aboutUs/History';
import Position from '../../components/Main/aboutUs/Position';
import Project from '../../components/Main/aboutUs/Project';
import JoinUs from '../../components/Main/aboutUs/JoinUs';

function TabAboutUs() {
    return (
        <>
            <Intro />
            <About />
            <History />
            <Position />
            <Project />
            <JoinUs />
        </>
    );
}

export default TabAboutUs;
