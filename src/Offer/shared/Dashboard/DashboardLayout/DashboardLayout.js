import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../../Pages/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">See Dashboard</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>My Orders</a></li>
                        <li><a>Add A Products</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;