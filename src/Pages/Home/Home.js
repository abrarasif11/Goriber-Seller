import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Offer from '../../Offer/Offer';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div className='font-poppins'>
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
            <h3 className='text-3xl font-bold text-center'>Categories to buy</h3>
            <div className='grid sm:grid-cols-3 gap-3 ml-10 sm:mt-10 mt-10 mb-20'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    >
                    </Category>)
                }
            </div>


        </div>
    );
};

export default Home;