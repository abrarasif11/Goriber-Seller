import React from 'react';

const AllCategory = ({allcategory}) => {
    const {picture,brand,model,location,original_price,resale_price,years_of_use,posted_time,sellers_name} = allcategory
    return (
        <div className="max-w-xs font-poppins rounded-md shadow-md dark:bg-gray-900 dark:font-semibold">
	<img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl font-semibold tracking-wide">Brand : {brand}</h2>
			<h2 className="text-xl font-semibold tracking-wide">Model : {model}</h2>
			<h2 className="text-xs font-semibold tracking-wide">Location : {location}</h2>
			<p className=" text-xs font-semibold">Original Price : {original_price}Tk</p>
			<p className=" text-xs font-semibold">Resale Price : {resale_price}Tk</p>
			<p className=" text-xs font-semibold">Years of used : {years_of_use}</p>
			<p className=" text-xs font-semibold">Posted Time : {posted_time}</p>
			<p className=" text-xs font-semibold">Seller Name : {sellers_name}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-600 dark:text-gray-900">Order Now</button>
	</div>
</div>
    );
};

export default AllCategory;