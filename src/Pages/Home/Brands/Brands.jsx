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
import locationmerchantlogo from '../../../assets/location-merchant.png';
import customertopImg from '../../../assets/customer-top.png';
import topwave from '../../../assets/be-a-merchant-bg.png';
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

       <div className="border-t-2 border-dotted border-gray-400 w-full my-5 mt-20"></div>


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

  <div className="border-t-2 border-dotted border-gray-400 w-full my-10"></div>

<div className='relative bg-secondary rounded-3xl flex pt-20 w-[1100px] h-[400px] mx-auto'
style={{
    backgroundImage: `url(${topwave})`,
    backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
    backgroundPosition: "top"
}}
>


<div>
    <h2 className='text-white font-bold text-3xl text-left ml-20'>Merchant and Customer Satisfaction <br /> is Our First Priority</h2>
    <p className='text-white text-left ml-20 mt-5  '>We offer the lowest delivery charge with the highest value along with <br/> 100% safety of your product. Pathao courier delivers your parcels in every <br/> corner of Bangladesh right on time.</p>
<div className='flex gap-5 ml-20'>
<div className='mt-10'>
    <button className='text-black bg-[#CAEB66] rounded-full w-[180px] h-[40px] font-bold '>Become a Merchant</button>
</div>

<div className='mt-10'>
    <button className='text-[#CAEB66] border rounded-full w-[225px] h-[40px] font-bold '>Earn with ZapShift Courier</button>
</div>
</div>

</div>

{/* Right div */}
<div className='w-[400px] h-[300px]'>
    <img src={locationmerchantlogo} alt="" />
</div>
</div>


</div>

  

</div>

<div>
   <div>
    <img src={customertopImg} alt="" className='mx-auto' />
   </div>
   <div className='mt-10'>
    <h2 className='font-bold text-2xl text-center'>What our customers are sayings</h2>
    <p className='text-center mt-5'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br/> pain, and strengthen your body with ease!</p>
   </div>
</div>

</div>


    

    );
};

export default Brands;