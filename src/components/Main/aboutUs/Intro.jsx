import * as React from 'react';
import SKKKUDImg from '../../../assets/WeAreSKKUD.png';
import IntroDesignImg from '../../../assets/IntroDesign.png';

export default function Intro() {
    return (
        <>
            <img src={IntroDesignImg} alt="introDesign" width="100%" />
            <img src={SKKKUDImg} alt="WeAreSKKUD" width="100%" />
        </>
    );
}
