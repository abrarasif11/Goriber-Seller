import React from 'react';

const OrderModal = (categories) => {
    const {model,location} = categories
    return (
        <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{model}</h3>
                    <p className="py-4">{location}</p>
                </div>
            </div>
        </>
    );
};

export default OrderModal;