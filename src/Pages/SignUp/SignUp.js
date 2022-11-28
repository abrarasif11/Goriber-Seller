import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import useTitle from '../../Offer/shared/useTitle';

const SignUp = () => {
    useTitle('Sign Up')
    const { user, createUser } = useContext(AuthContext);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const dropdown = form.dropdown.value;
        const file = form.file.value;
        const username = form.username.value;
        const password = form.password.value;

        console.log({ email, password, username, file, dropdown });

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success("User Created Successfully")
                saveUser( username, email);
                form.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const saveUser = (name, email, dropdown) => {
        const usersSaved = { name, email, dropdown };
        console.log(usersSaved);
        fetch("https://server-assignment-12-omega.vercel.app/usersList", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(usersSaved),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            })
            .catch((err) => console.log(err));

    }
    return (
        <div className="w-full font-poppins mx-auto mt-20 mb-20 max-w-md p-8 space-y-3 rounded-xl bg-gray-600 text-gray-100">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-400">Username</label>
                    <input type="username" name="username" id="username" placeholder="username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
                </div>
                {/* select */}
                <select type="dropdown" name="dropdown" id="dropdown"
                    className="select text-black select-bordered w-full">
                    <option disabled selected>Select User</option>
                    <option>Buyer</option>
                    <option>Seller</option>
                </select>
                {/* photo input */}
                <input name='file' type="file" className="file-input w-full text-black" />
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
                </div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-orange-600">Sign Up</button>
            </form>
            <div className="flex justify-center space-x-4">

            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                <Link to="/login" className="underline text-xs dark:text-gray-100"> Log in</Link>
            </p>
        </div>
    );
};

export default SignUp;