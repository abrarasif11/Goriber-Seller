import React from 'react';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div >
            <h1 className='text-center font-poppins text-3xl mt-10 font-bold'>Welcome To ,
                <br />
                <span className='text-5xl text-orange-600'>Goriber Seller</span></h1>
            <Banner></Banner>
        </div>
    );
};

export default Home;