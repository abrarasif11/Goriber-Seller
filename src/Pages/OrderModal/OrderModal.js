import React from 'react';

const OrderModal = (categories) => {
    const { model, location } = categories
    return (
        <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box font-poppins relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={model} className="input w-full input-bordered" />
                        <input type="text" disabled value={model} className="input w-full input-bordered" />
                        <input type="text" disabled value={model} className="input w-full input-bordered" />
                        <input type="text" disabled value={model} className="input w-full input-bordered" />
                        <input type="text" disabled value={model} className="input w-full input-bordered" />
                        <input type="text" disabled value={model} className="input w-full input-bordered" />
                        <input type="text" disabled value={model} className="input w-full input-bordered" />
                        <br />
                        <input className='bg-orange-600 px-2 py-2 rounded font-semibold text-black w-full ' type="Submit" value="Submit" />
                    </form>

                   
                </div>
            </div>
        </>
    );
};

export default OrderModal;