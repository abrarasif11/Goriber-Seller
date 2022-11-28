import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import useTitle from '../../Offer/shared/useTitle';


const MyOrders = () => {
    useTitle('Dashboard')
    const { user } = useContext(AuthContext);
    const url = `https://server-assignment-12-omega.vercel.app/items?email=${user?.email}`;

    const { data: items = [] } = useQuery({
        queryKey: ['items', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='font-poppins'>
            <h1 className='text-3xl font-bold mt-10 mb-5 bg-black text-orange-600 w-fit px-2 py-2 ml-4 '>Selected Items</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map((item, i) =>
                                <tr key={item._id}>
                                    <th>{i+1}</th>
                                    <th className='text-sky-700'>{item.email}</th>
                                    <td className='text-sky-700'>{item.model}</td>
                                    <td className='text-sky-700'>{item.price}</td>
                                    <td className='text-sky-700'>{item.phone}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;