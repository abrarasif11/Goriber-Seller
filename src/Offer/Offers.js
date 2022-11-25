import React from 'react';

const Offers = ({ offer , setPhones }) => {
  const {picture, brand, model, posted_time, location,resale_price, offer_price } = offer;
    return (
        <div className="max-w-md ml-3 mr-3 rounded-xl p-4 sm:flex sm:space-x-6 bg-stone-300 dark:text-gray-100">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img src={picture} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
        </div>
        <div className="flex flex-col ">
            <div>
                <h2 className="text-2xl font-semibold">{brand}</h2>
                <h2 className="text-xl font-semibold">{model}</h2>
                <span className="text-sm text-black">Location - {location}</span>
            </div>
            <div className="">
                <span className="flex items-center">
                   
                    <span className="text-gray-500">Resale Price -  {resale_price}TK</span>
                </span>
                <span className="flex items-center space-x-2">
                    <span className="text-sky-900">Offer Price - {offer_price}TK</span>
                </span>
                <span className="flex items-center space-x-2">
                    <span className="text-black">Posted Time - {posted_time}</span>
                </span>
                
                <label
                htmlFor="offer-modal" type="button" 
                className="flex mt-4 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-600 text-black"
                onClick={() => setPhones( offer )}
                >Order Now</label>

            </div>
        </div>
    </div>
    );
};

export default Offers;