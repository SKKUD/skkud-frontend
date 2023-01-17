import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ImageList from '@mui/material/ImageList';

export default function Carousel(props) {
    // const settings = { dots: true, infinite: true, speed: 500 };
    const imgList = props.images;

    const settings = {
        slidesToShow: 2.7,
        slidesToScroll: 2,
        speed: 500,
        autoplaySpeed: 2000
    };
    return (
        // <div
        //     className="carousel"
        //     style={{
        //         height: '125px'
        //     }}
        // >
        <Slider {...settings}>
            {/* <ImageList
                style={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    marginLeft: '-80px'
                }}
            >
                {imgList.map((item) => (
                    <div key={item}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                marginBottom: '10px'
                            }}
                        >
                            <img
                                src={item}
                                style={{
                                    borderRadius: '15px',
                                    width: '125px',
                                    height: '125px',
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    margin: '5px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </ImageList> */}
            {imgList.map((item) => (
                <div style={{ marginRight: '40px' }}>
                    <img
                        src={item}
                        style={{
                            borderRadius: '15px',
                            width: '125px',
                            height: '125px',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            margin: '5px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            ))}
        </Slider>
        // </div>
    );
}
