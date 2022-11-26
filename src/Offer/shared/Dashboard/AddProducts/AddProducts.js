import React from 'react';

const AddProducts = () => {
    return (
        <section className='mt-10 mx-auto'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your Email?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your Product Model</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                </label>
            </div>
            <div>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>
            <input className='bg-orange-600 mt-5 px-2 py-2 rounded font-semibold text-black' type="Submit" value="Submit" />
             
        </section>
    );
};

export default AddProducts;