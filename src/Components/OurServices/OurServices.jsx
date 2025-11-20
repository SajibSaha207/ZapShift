import React from 'react';
import servicelogo from '../../assets/service.png'

const OurServices = () => {
    return (
        <div className='max-w-[1500px] min-h-[800px] bg-secondary rounded-3xl pt-1'>
            <div>
                <h2 className='text-white items-center text-center mt-10 mb-3 font-bold text-2xl'>Our Services</h2>
            <p className='text-white text-center'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to  <br /> business shipments — we deliver on time, every time.</p>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-20 justify-items-center' >
                 <div className="card bg-base-100 shadow-sm p-5 m rounded-xl max-w-[370px]   ">
                    <div className='w-[60px] h-[60px] rounded-full bg-base-300 mx-auto flex items-center justify-center'>
                   <img src={servicelogo} alt="" className='w-[40px] h-[35px] object-contain   '/>
                   </div>
                   <h2 className='text-secondary font-bold text-center mt-2'>Express  & Standard <br /> Delivery</h2>
                    <p className='text-center '>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.<br /> Express delivery available in Dhaka within 4-6 <br /> hours from pick-up to drop-off..</p>
                  </div>

                   {/* card 2 */}

                    <div className="card bg-[#CAEB66] shadow-sm p-4 m rounded-xl max-w-[370px]   ">
                    <div className='w-[60px] h-[60px] rounded-full bg-base-300 mx-auto flex items-center justify-center'>
                   <img src={servicelogo} alt="" className='w-[40px] h-[35px] object-contain   '/>
                   </div>
                   <h2 className='text-secondary font-bold text-center mt-2'>Nationwide Delivery</h2>
                    <p className='text-center '>We deliver parcels nationwide with home delivery  in every district, ensuring your products reach customers within 48-72 hours.</p>
                  </div>

                    {/* card 3 */}

                    <div className="card bg-base-100 shadow-sm p-5 m rounded-xl max-w-[370px]   ">
                    <div className='w-[60px] h-[60px] rounded-full bg-base-300 mx-auto flex items-center justify-center'>
                   <img src={servicelogo} alt="" className='w-[40px] h-[35px] object-contain   '/>
                   </div>
                   <h2 className='text-secondary font-bold text-center mt-2'>Fulfillment Solution</h2>
                    <p className='text-center'>We also offer customized service with inventory management support, online order processing,  packaging, and after sales support.</p>
                  </div>

                    {/* card 4 */}

                    <div className="card bg-base-100 shadow-sm p-5  rounded-xl max-w-[370px]   ">
                    <div className='w-[60px] h-[60px] rounded-full bg-base-300 mx-auto flex items-center justify-center'>
                   <img src={servicelogo} alt="" className='w-[40px] h-[35px] object-contain   '/>
                   </div>
                   <h2 className='text-secondary font-bold text-center mt-2'>Cash on Home Delivery</h2>
                    <p className='text-center'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                  </div>

                    {/* card 5 */}

                    <div className="card bg-base-100 shadow-sm p-5  rounded-xl max-w-[370px]   ">
                    <div className='w-[60px] h-[60px] rounded-full bg-base-300 mx-auto flex items-center justify-center'>
                   <img src={servicelogo} alt="" className='w-[40px] h-[35px] object-contain   '/>
                   </div>
                   <h2 className='text-secondary font-bold text-center mt-2'>Corporate Service / Contract<br/> In Logistics</h2>
                    <p className='text-center'>Customized corporate services which includes warehouse and inventory management support.</p>
                  </div>

                    {/* card 6 */}

                    <div className="card bg-base-100 shadow-sm p-5  rounded-xl max-w-[370px]   ">
                    <div className='w-[60px] h-[60px] rounded-full bg-base-300 mx-auto flex items-center justify-center'>
                   <img src={servicelogo} alt="" className='w-[40px] h-[35px] object-contain   '/>
                   </div>
                   <h2 className='text-secondary font-bold text-center mt-2'>Parcel Return</h2>
                    <p className='text-center'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                  </div>
            </div>

           
            
        </div>
    );
};

export default OurServices;