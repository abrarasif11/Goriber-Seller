import React from 'react';
import Offer from '../../Offer/Offer';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    return (
        <div >
            <h1 className='text-center font-poppins text-3xl mt-10 font-bold'>Welcome To ,
                <br />
                <span className='text-5xl text-orange-600'>Goriber Seller</span></h1>
            <Banner></Banner>
            <h1 className='text-center font-poppins text-5xl text-orange-600 mt-20 font-bold'>One of the biggest ,
                <span className='text-2xl text-black'>
                    <span >
                        <p className='mt-4'>
                            Second hand phone's <span className='text-orange-600'>online</span> market.
                        </p>
                    </span>
                    <span>
                        <p>
                            Here you can buy or sell your desired<span className='text-orange-600'> models phone</span>.
                        </p>
                    </span>
                    <span>
                        <p>
                            We provide most of the brands of phone here. <span className='text-orange-600'>Have fun</span>.
                        </p>
                    </span>
                </span></h1>
                <Offer></Offer>
                <Category></Category>
        </div>
    );
};

export default Home;