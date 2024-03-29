import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';
const Category = ({ category }) => {
    const { dark } = useContext(AuthContext);
    console.log(category);
    const navigate = useNavigate()
    const handleOneCategory = (id) => {
        navigate(`/categories/${id}`);
    };
    return (
        <div>
            <div className="max-w-xs rounded-md ml-8 mt-10 shadow-md hover:scale-105 transition-all bg-stone-300 text-black">
                <img src={category.picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-center font-semibold tracking-wide">{category.name}</h2>
                    </div>
                    <button onClick={() => handleOneCategory(`${category.category_id}`)} type="button" className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-600 ${dark ? 'text-black': 'text-black'}`}>See All Products</button>
                </div>
            </div>
        </div>
    );
};

export default Category;