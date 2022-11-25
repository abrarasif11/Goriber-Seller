import React from 'react';

const OfferModal = ({phones}) => {
    console.log(phones);
    const {model} = phones;
    return (
        <div>
            <input type="checkbox" id="offer-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="offer-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{model}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default OfferModal;