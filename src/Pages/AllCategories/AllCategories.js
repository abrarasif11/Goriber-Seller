import React, { useEffect, useState } from 'react';
import useTitle from '../../Offer/shared/useTitle';
import OrderModal from '../OrderModal/OrderModal';
import AllCategory from './AllCategory';

const AllCategories = () => {
    useTitle("All Categories")
    const [allcategories, setAllcategories] = useState([]);
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        fetch('https://server-assignment-12-omega.vercel.app/allcategories')
            .then(res => res.json())
            .then(data => setAllcategories(data))
    }, [])
    return (
        <div>
            <h3 className='text-3xl font-poppins font-semibold text-center mt-10'>Total Products : {allcategories.length}</h3>
            <div className='grid sm:grid-cols-3 gap-7 mx-10  mb-20 '>
                {
                    allcategories.map(allcategory =>
                        <AllCategory
                            key={allcategory._id}
                            allcategory={allcategory}
                            setCategories={setCategories}
                        ></AllCategory>)
                }
            </div>
            {categories &&
                <OrderModal
                    categories={categories}
                ></OrderModal>
            }
        </div>
    );
};

export default AllCategories;