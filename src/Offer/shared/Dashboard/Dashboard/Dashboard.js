import React from 'react';
import Header from '../../../../Pages/Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="h-full font-poppins p-3 space-y-2 w-60  bg-white text-gray-100">
                
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="bg-gray-700 dark:text-gray-50">
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <span> My Orders</span>
                            </a>
                        </li>
                        <li className="bg-gray-700 dark:text-gray-50">
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Add A Product</span>
                            </a>
                        </li>
                        {/* <li className="bg-gray-800 dark:text-gray-50">
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Dashboard</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;