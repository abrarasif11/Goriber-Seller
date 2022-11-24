import React from 'react';

const Category = ({category}) => {
    return (
        <div>
                <div className="max-w-xs rounded-md shadow-md bg-gray-300 dark:text-gray-100">
                    <img src={category.picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl text-center font-semibold tracking-wide">{category.name}</h2>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-600 dark:text-gray-900">See All Products</button>
                    </div>
                </div>
        </div>
    );
};

export default Category;