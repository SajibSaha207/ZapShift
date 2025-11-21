import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/NavBar/Navbar';
import HowItWorks from '../Components/HowItWorks/HowItWorks';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>

            <Outlet></Outlet>
            <section className='py-40'>
                <Footer></Footer>
            </section>
            
    
        </div>
    );
};

export default RootLayout;