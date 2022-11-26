import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const OrderModal = ({ categories }) => {
    const { model, location, brand, resale_price, sellers_name } = categories;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const model = form.model.value;
        const price = form.price.value;
        const meeting = form.meeting.value;
        const formValue = { name, email, meeting, phone, price, model };
        console.log(formValue);

        if (user?.uid) {
            fetch("http://localhost:5000/items", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formValue),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Order Confirm Successfully");

                    }
                })
                .catch((err) => console.log(err));
        } else {
            toast.error("Please login first to confirm order");
        }
    }
    return (
        <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box font-poppins relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg ml-2 font-bold">Brand - {brand}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1  gap-3 mt-10'>
                        <input name='model' type="model" disabled value={model} className="input w-full input-bordered" />
                        <input name='price' type="price" disabled value={resale_price} className="input w-full input-bordered" />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />
                        <input name='meeting' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='bg-orange-600 px-2 py-2 rounded font-semibold text-black w-full ' type="Submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default OrderModal;