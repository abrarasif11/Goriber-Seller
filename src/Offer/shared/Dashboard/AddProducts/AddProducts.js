import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/Authprovider/Authprovider";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const handleAddProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const model = form.model.value;
    const original_price = form.originalPrice.value;
    const resale_price = form.resalePrice.value;
    const condition = form.condition.value;
    const phone_number = form.phoneNumber.value;
    const imageURL = form.imageURL.value;
    const location = form.location.value;
    const description = form.description.value;
    const year_of_purchase = form.yearOfPurchase.value;

    const product = {
      email,
      model,
      original_price,
      resale_price,
      condition,
      phone_number,
      imageURL,
      location,
      description,
      year_of_purchase,
    };

    console.log(product);
    fetch(`https://server-assignment-12-abrarasif11.vercel.app/myproducts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Confirmed")
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-3xl mt-10 ml-4 font-semibold bg-black text-orange-600 w-fit px-2 py-2">Add a Products</h1>
      <form onSubmit={handleAddProducts} action="" className="mt-5 ">
        <div className="my-3">
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Seller's email here"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="model"
            placeholder="Model Name "
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="originalPrice"
            placeholder="Original Price"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="resalePrice"
            placeholder="Resale Price"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div>
          <select name="condition" className="select select-bordered w-4/5 ml-4">
            <option disabled selected>
              Conditon
            </option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>
        <div className="my-3">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="imageURL"
            placeholder="Put product image url here"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <textarea
            className="textarea textarea-bordered w-4/5 ml-4"
            name="description"
            placeholder="Product Description"
          ></textarea>
        </div>
        <div className="my-3 ml-5">
          <label htmlFor="">Year Of Purchase</label>
          <input
            type="date"
            name="yearOfPurchase"
            placeholder="Year Of Purchase"
            className="input input-bordered w-2/4 ml-4"
          />
        </div>
        <button type="submit" className="bg-orange-600 px-3 font-semibold py-3 rounded ml-4 mb-10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProducts;