import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItem from './AdvertiseItem';

const AdvertiseItems = () => {
    const url = `https://server-assignment-12-omega.vercel.app/advertise`;

    const { data: advertises = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            {
                advertises.map(advertise => <AdvertisedItem
                key={advertise._id}
                advertise={advertise}
                ></AdvertisedItem>)
            }
        </div>
    );
};

export default AdvertiseItems;