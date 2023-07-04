import React from 'react';
import { useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Carousel(props) {
    const match1024 = useMediaQuery('(min-width:1024px)');
    const imgList = props.images;
    const slidesToShowN = match1024 ? 4 : 2.7;

    const settings = {
        slidesToShow: slidesToShowN,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        swipeToSlide: true
    };

    const ImgWrap = styled.div`
        margin-right: 40px;
        @media (min-width: 1024px) {
            margin-right: 20px;
            margin-left: 20px;
        }
    `;

    const SliderImg = styled.img`
        border-radius: 15px;
        width: 125px;
        height: 125px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 5px;
        object-fit: cover;
        @media (min-width: 1024px) {
            min-width: 250px;
            min-height: 250px;
            width: 18vw;
            height: 18vw;
        }
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
