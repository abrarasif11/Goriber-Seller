import React from 'react';
import Banner1 from '../../../assests/photo-1556656793-08538906a9f8 (1).avif'
import Banner2 from '../../../assests/photo-1621330396173-e41b1cafd17f.avif'
import Banner3 from '../../../assests/photo-1600721502738-84bd123c8a99.avif'


const Banner = () => {
    return (
        <div className="carousel mx-auto rounded-xl mt-10 mb-10 w-3/4">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Banner1} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Banner2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Banner3} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;