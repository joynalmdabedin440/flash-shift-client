import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;