import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageList from '@mui/material/ImageList';

export default function Carousel(props) {
    const settings = { dots: true, infinite: true, speed: 500 };
    const imgList = props.images;
    return (
        <div
            className="carousel"
            style={{
                height: '125px'
            }}
        >
            <ImageList
                style={{
                    display: 'grid',
                    gridAutoFlow: 'column'
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
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </ImageList>
        </div>
    );
}
