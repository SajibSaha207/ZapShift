import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Components/HowItWorks/HowItWorks';
import OurServices from '../../../Components/OurServices/OurServices';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';



//promise use kore reviews er jonno data anbo

const reviewsPromise = fetch('/Data/reviews.json').then(res => res.json());


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
            <section className='py-10'>
                <Brands></Brands>
            </section>
            <section className=''>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
            </section>
            <section>
                <FAQ></FAQ>
            </section>
        </div>
    );
};

export default Home;