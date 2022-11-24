import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategory from './AllCategory';

const AllCategories = () => {
    const allcategories = useLoaderData();
    return (
        <div>
            <h3 className='text-3xl font-poppins font-semibold text-center mt-10'>Total Products : {allcategories.length}</h3>
            <div className='grid sm:grid-cols-3 gap-3 ml-10 sm:mt-10 lg:mt-10 mb-20 '>
                {
                    allcategories.map(allcategory =>
                    <AllCategory
                    key={allcategory._id}
                    allcategory={allcategory}
                    ></AllCategory>)
                }
            </div>
        </div>
    );
};

export default AllCategories;