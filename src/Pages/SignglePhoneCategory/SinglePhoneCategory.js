import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryModal from '../../Offer/shared/CategoryModal/CategoryModal';
import SinglePhoneInfo from './SinglePhoneInfo';

const SinglePhoneCategory = () => {
    const categories = useLoaderData();
    const [singleCategories, setSingleCategories] = useState(null)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center my-20 mx-10">
                {
                    categories.map(singlePhone => <SinglePhoneInfo
                        key={singlePhone._id}
                        singlePhone={singlePhone}
                        setSingleCategories={setSingleCategories}
                    ></SinglePhoneInfo>)
                }
            </div>
            {
                singleCategories &&
                <CategoryModal
                    singleCategories={singleCategories}
                    setSingleCategories={setSingleCategories}
                >
                </CategoryModal>
            }
        </div>
    );
};

export default SinglePhoneCategory;