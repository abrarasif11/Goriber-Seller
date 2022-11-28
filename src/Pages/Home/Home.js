import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Offer from '../../Offer/Offer';
import AdvertisedItem from '../../Offer/shared/AdvertiseItem/AdvertiseItem';
import CustomerReview from '../../Offer/shared/CustomerReview/CustomerReview';
import useTitle from '../../Offer/shared/useTitle';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    useTitle('Home')
    const navigate = useNavigate();
    const handleAllCategory = () => {
        navigate("/allcategories");
    };
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
            <h3 className='text-4xl font-bold text-center mt-20'>Categories to buy</h3>
            <div className='grid sm:grid-cols-3 gap-3 sm:ml-4 sm:mt-10 mt-10 mb-10'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    >
                    </Category>)
                }
                
                </div>

                <Link className='flex items-center justify-center
                       ' to='/allcategories'>
                    <button
                        className="py-4 px-6  m-8 font-poppins text-xl text-black  font-medium rounded-lg bg-gradient-to-rounded-md bg-orange-600
                       hover:bg-orange-400	 hover:text-black"
                        onClick={handleAllCategory}
                    >
                        See All Products
                    </button>
                </Link>
            
            <h3 className='text-center text-4xl mt-10 font-bold mb-10'>See Our Customer Review</h3>
           <CustomerReview></CustomerReview>
  
        </div>
    );
};

export default Home;