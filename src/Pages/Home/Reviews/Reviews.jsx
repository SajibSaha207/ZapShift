import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';



//data ke disstructer kore nilam
const Reviews = ({reviewsPromise}) => {
    //use diye promise ke call korbo

    const reviews = use(reviewsPromise);
    console.log(reviews)

    return (
         <div>
            <div className='text-center'>
                <h3 className='text-3xl text-center'>Review</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium maiores labore ad perferendis sequi repellendus repudiandae illum harum ipsam cum.
                </p>
                <>
                <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'3'}
                coverflowEffect={{
                    rotate:50,
                    stretch:0,
                    depth:100,
                    modifier:1,
                    slideShadows:true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className='mySwiper'                
                >
       {
        reviews.map(review =><SwiperSlide key={review.id}>
                <ReviewsCard review={review}></ReviewsCard>
            </SwiperSlide>
)
       }

         </Swiper>
                </>
            </div>
         </div>
    );
};

export default Reviews;