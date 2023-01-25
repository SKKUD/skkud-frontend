import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Carousel(props) {
    const imgList = props.images;

    const settings = {
        slidesToShow: 2.7,
        slidesToScroll: 2,
        speed: 500,
        autoplaySpeed: 2000
    };
    return (
        <Slider {...settings}>
            {imgList.map((item) => (
                <div key={item} style={{ marginRight: '40px' }}>
                    <img
                        src={item}
                        alt="projects"
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
    );
}
