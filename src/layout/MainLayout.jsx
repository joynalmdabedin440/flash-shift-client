import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div>
                <Navbar />
            </div>
            <div className="my-9">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
