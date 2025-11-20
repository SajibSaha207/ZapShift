import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Components/HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner />
            <section className='py-10 '>
                <HowItWorks></HowItWorks>
            </section>
        </div>
    );
};

export default Home;