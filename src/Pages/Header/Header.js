import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assests/240_F_204205339_vCkKDvN8YBgx0Q77bejn5xHY6q4JbSnN.jpg'
import { AuthContext } from "../../Context/Authprovider/Authprovider";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(err => console.log(err));
    }
    return (
        <div class="bg-black font-poppins">
            <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/"
                                class="font-medium tracking-wide text-orange-600 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/allcategories"
                                class="font-medium tracking-wide text-orange-600 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                All Categories
                            </Link>
                        </li>
                    </ul>
                    <Link
                        to="/"
                    >
                        <div className='flex items-center'>
                            <img className='w-[50px] ' src={img} alt="" />
                            <span class="ml-2 text-xl font-bold tracking-wide text-orange-600 uppercase">
                                Goriber Seller
                            </span>
                        </div>

                    </Link>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/blog"
                                class="font-medium tracking-wide text-orange-600 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            {
                                user?.uid ?

                                    <button
                                        onClick={handleLogout}
                                        className="font-medium tracking-wide bg-orange-600 px-2  rounded py-2  text-black transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Log Out
                                    </button>
                                    :
                                    <Link
                                        to="/login"

                                        className="font-medium tracking-wide text-orange-600 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Log in
                                    </Link>
                            }
                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-orange-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-black border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <img className='w-[50px]' src={img} alt="" />
                                                <span class="ml-2 text-xl font-bold tracking-wide text-orange-600 uppercase">
                                                    Goriber Seller
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-orange-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <Link
                                                    to="/"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-orange-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/allcategories"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-orange-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    All Categories
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blog"
                                                    class="font-medium tracking-wide text-orange-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                            {
                                user?.uid ?

                                    <button
                                        onClick={handleLogout}
                                        className="font-medium tracking-wide bg-orange-600 px-2  rounded py-2  text-black transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Log Out
                                    </button>
                                    :
                                    <Link
                                        to="/login"

                                        className="font-medium tracking-wide text-orange-600 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Log in
                                    </Link>
                            }
                                            </li>
                                           
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;