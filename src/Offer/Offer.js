import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider/Authprovider';
import Offers from './Offers';
import OfferModal from './shared/OfferModal/OfferModal';

const Offer = () => {
    const { dark } = useContext(AuthContext);
    const [offers, setOffers] = useState([]);
    const [phones, setPhones] = useState(null)

    useEffect(() => {
        fetch('https://server-assignment-12-omega.vercel.app/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    console.log(phones);
    return (
        <section>
            <div className={`p-6 py-12 mt-20 mb-5 rounded  ${dark ? 'bg-orange-600': 'bg-black'}  text-orange-600`}>
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className={`text-center ${dark ? 'text-black': 'text-orange-600'} text-6xl tracking-tighter font-bold`}>Up to
                            <br className="sm:hidden" /> 20% Off
                        </h2>
                        <div className={`space-x-2 ${dark ? 'text-black': 'text-orange-600'} text-center py-2 lg:py-0`}>
                            <span>Plus free home delivery! Use code:</span>
                            <span className="font-bold text-lg">GS 77</span>
                        </div>
                        <Link to="/allcategories" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-orange-600 text-black hover:bg-black hover:text-orange-600">Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;