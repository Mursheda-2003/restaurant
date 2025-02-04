

import { useEffect, useState, } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";


const Reviews = () => {
const [reviews, setReviews] = useState([])
useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    .then(data=> {
        setReviews(data)
        console.log(data)
    })
},[]);
  return (
     <div className="max-w-7xl mx-auto">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {
        reviews.map(review=>
          <SwiperSlide key={review._id}>Slide 1
          <div className="text-center px-24 my-10">
          <div className="flex justify-center">
          <RiDoubleQuotesL />

          </div>
            <p className="text-center px-24 my-10">{review.details}</p>
            <h1 className="text-xl">{review.name}</h1>
            </div>
          </SwiperSlide>
        ) 
  }
  </Swiper>
  </div>
  );
};

export default Reviews;