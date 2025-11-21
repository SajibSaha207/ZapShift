import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const FAQ = () => {
    return (
        <div>
            <div>
                <h2 className='font-bold text-3xl text-center'>Frequently Asked Question (FAQ)</h2>
                <p className='text-[#606060] text-center mt-5'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br/> pain, and strengthen your body with ease!</p>
            </div>

            {/* card 1 */}

            <div className=' w-[1100px] h-[400px] mx-auto'>
              <div className="">
  <div className="bg-[#E6F2F3] rounded-box h-[200px] px-5 py-5">
    
    <div className="flex justify-between items-center">
      <h4 className="text-left">How does this posture corrector work?</h4>
      <p><IoIosArrowUp /></p>
    </div>

    {/* Divider inside the card */}
    <div className="border-t-2 border-dotted border-gray-400 w-full my-6"></div>
    <p>A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain <br/> proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle <br/> alignment to your shoulders.</p>

  </div>
</div>

<div>
    <div className="bg-[#E6F2F3] rounded-box h-[20px] px-5 py-5 mt-5 flex justify-between">
         <h4 className=' -mt-2'>Is it suitable for all ages and body types?</h4>
         <p><MdOutlineKeyboardArrowDown /></p>
    </div>
   
</div>
<div>
    <div className="bg-[#E6F2F3] rounded-box h-[20px] px-5 py-5 mt-5 flex justify-between">
         <h4 className=' -mt-2'>Does it really help with back pain and posture improvement?</h4>
         <p><MdOutlineKeyboardArrowDown /></p>
    </div>
   
</div>
<div>
    <div className="bg-[#E6F2F3] rounded-box h-[20px] px-5 py-5 mt-5 flex justify-between">
         <h4 className=' -mt-2'>Does it have smart features like vibration alerts?</h4>
         <p><MdOutlineKeyboardArrowDown /></p>
    </div>
   
</div>
<div>
    <div className="bg-[#E6F2F3] rounded-box h-[20px] px-5 py-5 mt-5 flex justify-between">
         <h4 className=' -mt-2'>How will I be notified when the product is back in stock?</h4>
         <p><MdOutlineKeyboardArrowDown /></p>
    </div>
   
</div>

<div className='flex items-center justify-center gap- pt-5 '>
    <button className=' bg-primary rounded-xl w-[150px] h-[40px] font-bold text-black'>See More FAQ's
                     </button>
                      <BsArrowUpRightCircleFill className='text-4xl' /> 
</div>
             
            </div>
           
        </div>
    );
};

export default FAQ;