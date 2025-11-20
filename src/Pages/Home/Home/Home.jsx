import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Components/HowItWorks/HowItWorks';
import OurServices from '../../../Components/OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <section className='py-10 '>
                <HowItWorks></HowItWorks>
            </section>
            <section className='py-10'>
                <OurServices></OurServices>
            </section>
        </div>
    );
};

export default Home;