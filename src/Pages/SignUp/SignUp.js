import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="w-full font-poppins mx-auto mt-20 mb-20 max-w-md p-8 space-y-3 rounded-xl bg-gray-600 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form  action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1 text-sm">
                <label for="username" className="block dark:text-gray-400">Username</label>
                <input type="text" name="username" id="username" placeholder="username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
            </div>
            <div className="space-y-1 text-sm">
                <label for="username" className="block dark:text-gray-400">Email</label>
                <input type="email" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
            </div>
            <div className="space-y-1 text-sm">
                <label for="password" className="block dark:text-gray-400">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
            </div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-orange-600">Sign Up</button>
        </form>
        <div className="flex justify-center space-x-4">
              
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
            <Link  to="/login" className="underline text-xs dark:text-gray-100"> Log in</Link>
        </p>
    </div>
    );
};

export default SignUp;