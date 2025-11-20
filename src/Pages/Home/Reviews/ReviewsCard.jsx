import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewsCard = ({review}) => {
    const {userName, review: testimonial, user_photoURL} = review
   
   
    return (
       <div className="max-w-sm p-6 bg-white rounded-lg shadow-md relative">
      <FaQuoteLeft className="text-4xl text-gray-300 absolute top-4 left-4" />
      <p className="mt-8 mb-6 text-gray-700">
       {testimonial}
      </p>
      <hr className="border-dashed border-gray-300 mb-4" />
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-teal-900 flex items-center justify-center text-white font-bold text-lg">
         <img src= {user_photoURL} alt="" />
        </div>
        <div>
          <p className="font-semibold text-teal-900">{userName}</p>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewsCard;