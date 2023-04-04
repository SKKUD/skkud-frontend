import React from 'react';
import styled from '@emotion/styled';
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

    const ImgWrap = styled.div`
        margin-right: 40px;
    `;

    const SliderImg = styled.img`
        border-radius: 15px;
        width: 125px;
        height: 125px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 5px;
        object-fit: cover;
    `;

    return (
        <Slider {...settings}>
            {imgList.map((item) => (
                <ImgWrap key={item}>
                    <SliderImg src={item} alt="projects" />
                </ImgWrap>
            ))}
        </Slider>
    );
}
