import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';



//data ke disstructer kore nilam
const Reviews = ({reviewsPromise}) => {
    //use diye promise ke call korbo

    const reviews = use(reviewsPromise);
    console.log(reviews)

    return (
         <div className=''>
            <div className='text-center mb-24'>
            
                
                <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'3'}
                coverflowEffect={{
                    rotate:30,
                    stretch:'50%',
                    depth:200,
                    modifier:1,
                    scale:0.75,
                    slideShadows:true,
                }}
                autoplay={{
        delay:1000,
        disableOnInteraction: false,
       }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className='mySwiper'                
                >
       {
        reviews.map(review =><SwiperSlide key={review.id}>
                <ReviewsCard review={review}></ReviewsCard>
            </SwiperSlide>
)
       }

         </Swiper>
                
            </div>
         </div>
    );
};

export default Reviews;