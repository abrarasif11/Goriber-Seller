import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assests/240_F_204205339_vCkKDvN8YBgx0Q77bejn5xHY6q4JbSnN.jpg'
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    const { user, logOut, dark, setDark } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut(navigate);
    };
    const menuItems = (
        <React.Fragment>

            <li>
                <Link
                    to="/"
                    class={`font-semibold font-poppins tracking-wide ${dark ? 'text-black' : 'text-orange-600'} transition-colors duration-200 hover:text-teal-accent-400`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/allcategories"
                    class={`font-semibold font-poppins tracking-wide  ${dark ? 'text-black' : 'text-orange-600'} transition-colors duration-200 hover:text-teal-accent-400`}
                >
                    All Categories
                </Link>
            </li>
            <li>
                <Link
                    to="/blog"
                    class={`font-semibold font-poppins tracking-wide  ${dark ? 'text-black' : 'text-orange-600'} transition-colors duration-200 hover:text-teal-accent-400`}
                >
                    Blog
                </Link>
            </li>
            {user?.uid && (
                <li >
                    <Link
                        to="/dashboard"
                        className={`font-semibold font-poppins tracking-wide  ${dark ? 'text-black' : 'text-orange-600'} transition-colors duration-200 hover:text-teal-accent-400`}
                    >
                        Dashboard

                    </Link>
                </li>
            )}

            {user?.uid ? (
                <li
                    className={`font-semibold tracking-wide font-poppins ${dark ? 'text-black' : 'text-orange-600'} transition-colors duration-200 hover:text-teal-accent-400`}
                    onClick={handleLogOut}
                >
                    <button>Logout</button>
                </li>
            ) : (
                <li className={`font-semibold tracking-wide font-poppins  ${dark ? 'text-black' : 'text-orange-600'} transition-colors duration-200 hover:text-teal-accent-400`}>
                    <Link to="/login">Login</Link>
                </li>
            )}
            <React.Fragment>
                <button className={` ${dark ? 'text-black' : 'text-orange-600'} ml-[20px] mr-[10px]`} onClick={() => setDark(!dark)}>
                    {
                        dark ? <MdDarkMode className="text-2xl"></MdDarkMode> : <BsFillSunFill className="text-2xl"></BsFillSunFill>
                    }
                </button>
            </React.Fragment>
            {user?.uid && (
                <div
                    className="tooltip ml-4 mb-1 lg:tooltip-left md:tooltip-right mt-1 dropdown dropdown-bottom dropdown-end"
                    data-tip={user?.displayName}
                >
                    <label tabIndex={0}>
                        {
                            user?.photoURL ?
                                <img
                                    className="w-[36px] h-[36px] rounded-full mr-5"
                                    src={user?.photoURL}
                                    alt=""
                                />
                                :
                                <FaUserCircle className={`${dark ? 'text-black' : 'text-orange-600'} w-[30px] mt-1 mr-2 h-[50px]`}></FaUserCircle>
                        }
                    </label>

                </div>
            )}
        </React.Fragment>
    );

    return (
        <div className={`navbar ${dark ? 'bg-orange-600' : 'bg-black'} flex justify-between`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className={`btn btn-ghost ${dark ? 'text-black' : 'text-orange-600'} lg:hidden`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={1}
                        className={`menu menu-compact dropdown-content mt-3 p-2 shadow ${dark ? 'bg-orange-600' : 'bg-black'} rounded-box w-52`}
                    >
                        {menuItems}
                    </ul>
                </div>
                <div className="flex  items-center">

                    <Link
                        to="/"
                        className={`btn btn-ghost ${dark ? 'text-black' : 'text-orange-600'} font-poppins font-semibold normal-case text-2xl`}
                    >
                        <img className='w-[40px] rounded-xl mr-4' src={img} alt="" />
                        Goriber Seller
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
        </div>
    );
};

export default Header;