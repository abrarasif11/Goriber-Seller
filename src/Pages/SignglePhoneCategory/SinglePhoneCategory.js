import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePhoneInfo from './SinglePhoneInfo';

const SinglePhoneCategory = () => {
    const singlePhones = useLoaderData();
    console.log(singlePhones);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center my-20 mx-10">
                {
                    singlePhones.map(singlePhone => <SinglePhoneInfo
                        key={singlePhone._id}
                        singlePhone={singlePhone}
                    ></SinglePhoneInfo>)
                }
            </div>
        </div>
    );
};

export default SinglePhoneCategory;