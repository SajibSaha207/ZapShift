import React from 'react';
import bookinglogo from '../../assets/bookingicon.png'
const HowItWorks = () => {
    return (
        <div className='max-w-6xl mx-auto max-h-3xl'>
            <h2 className='text-2xl font-bold mb-8'>How it Works</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  
  {/* card 1 */}
  
  <div className="card bg-base-100 shadow-sm p-3 rounded-xl  ">
   <img src={bookinglogo} alt="" className='w-[70px] h-[55px]'/>
   <h2 className='text-secondary font-bold'>Booking Pick and Drop</h2>
    <p className='font-semibold'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
  </div>

{/* card 2 */}
    <div className="card bg-base-100 shadow-sm p-3 rounded-xl ">
   <img src={bookinglogo} alt="" className='w-[70px] h-[55px]'/>
   <h2 className='text-secondary font-bold'>Booking Pick and Drop</h2>
    <p className='font-semibold'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
  </div>


{/* card 3 */}
    <div className="card bg-base-100 shadow-sm p-3 rounded-xl">
   <img src={bookinglogo} alt="" className='w-[70px] h-[55px]'/>
   <h2 className='text-secondary font-bold'>Booking Pick and Drop</h2>
    <p className='font-semibold'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
  </div>

{/* card 4 */}

    <div className="card bg-base-100 shadow-sm p-3 rounded-xl">
   <img src={bookinglogo} alt="" className='w-[70px] h-[55px]'/>
   <h2 className='text-secondary font-bold'>Booking Pick and Drop</h2>
    <p className='font-semibold'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
  </div>
</div>
</div>
   
    );
};

export default HowItWorks;