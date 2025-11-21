import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        interval={1000}
        >
        <div className='relative  '>
            <img src={bannerImg1} alt="" />
        <div className='absolute bottom-10 left-10 flex items-center gap-2 '>
            <button className=' bg-primary rounded-full w-[150px] h-[40px] font-bold text-black   ' >Track Your Parcel
                 </button>
                  <BsArrowUpRightCircleFill className='text-3xl' /> 
            <button className='border rounded w-[120px] h-[30px] bg-white font-bold  '>Be A Rider</button>

        </div>
        </div>
        <div>
            <img src={bannerImg2} alt="" />
           
        </div>
        <div>
            <img src={bannerImg3} alt="" />
             
        </div>
        </Carousel>
    );
};

export default Banner;