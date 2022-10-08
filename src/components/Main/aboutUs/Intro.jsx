import * as React from 'react';
import SKKKUDImg from '../../../assets/WeAreSKKUD.png';
import IntroDesignImg from '../../../assets/IntroDesign.png';

export default function Intro() {
    return (
<<<<<<< HEAD
        <>
            <img src={IntroDesignImg} alt="introDesign" width="100%" />
            <img src={SKKKUDImg} alt="WeAreSKKUD" width="100%" />
        </>
=======
        <Card sx={{ minWidth: 275 }}>
            <CardContent component="div">
                <Title>SKKU.D</Title>
                <Detail>The final step before becoming a developer</Detail>
            </CardContent>
        </Card>
>>>>>>> cf06860 (add ProjectList)
    );
}
