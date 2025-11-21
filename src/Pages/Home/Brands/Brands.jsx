import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import star_people from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';
import livetrackingImg from '../../../assets/live-tracking.png';
import safedelivarylogo from '../../../assets/safe-delivery.png';

const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, star_people];

const Brands = () => {
    return (

         <div className='my-24'>
            <div className='text-center mb-24'>
                <h3 className='text-3xl text-center font-bold my-8'>We've helped thousands of sales teams</h3>
               
        
       <Swiper
       slidesPerView={3}
       centeredSlides={true}
       spaceBetween={30}
       loop={true}
       modules={[Autoplay]}
       grabCursor={true}
       autoplay={{
        delay:1000,
        disableOnInteraction: false,
       }

       }
       >
        {
            brandLogos.map((logo, index) =><SwiperSlide key={index}>
                <img src={logo} alt="" className='' />
            </SwiperSlide>)
        }
        
       </Swiper>

       {/* card list  */}
<div className="flex flex-col gap-10 mt-20 w-[1300px]">

  {/* card 1 */}
  <div className="card bg-base-100 shadow-sm h-[230px] flex flex-row items-center">
    <div className="w-[180px] h-[180px] ml-5">
      <img src={livetrackingImg} alt="" />
    </div>

    <div className="border-l-2 border-dotted border-gray-400 h-[180px] mx-10"></div>

    <div>
      <h2 className="text-2xl font-bold">Live Parcel Tracking</h2>
      <p className="mt-1 text-gray-600 leading-relaxed">
        Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates.
      </p>
    </div>
  </div>

  {/* card 2 */}
  <div className="card bg-base-100 shadow-sm h-[230px] flex flex-row items-center">
    <div className="w-[180px] h-[180px] ml-5">
      <img src={safedelivarylogo} alt="" />
    </div>

    <div className="border-l-2 border-dotted border-gray-400 h-[180px] mx-20 "></div>

    <div>
      <h2 className="text-2xl font-bold">100% Safe Delivery</h2>
      <p className="mt-1 text-gray-600 leading-relaxed">
        We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
      </p>
    </div>
  </div>

  {/* card 3 */}
  <div className="card bg-base-100 shadow-sm h-[230px] flex flex-row items-center">
    <div className="w-[180px] h-[180px] ml-5">
      <img src={safedelivarylogo} alt="" />
    </div>

    <div className="border-l-2 border-dotted border-gray-400 h-[180px] mx-10"></div>

    <div>
      <h2 className="text-2xl font-bold">24/7 Call Center Support</h2>
      <p className="mt-1 text-gray-600 leading-relaxed">
        Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
      </p>
    </div>
  </div>

</div>

  

</div>

</div>


    

    );
};

export default Brands;