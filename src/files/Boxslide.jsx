import React, { useRef, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
// import 'App.css';

const Boxslide = () => {
  return (
      
    <>
      <div className='  items-center justify-center bg-zinc-950 py-20 pl-48 border-y-[1px] border-zinc-600 '>
       <h1 className='text-white text-[28px] font-sans  pb-10 text-bold'>Trusted by Industry Leaders</h1>
        <Swiper 
         slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          modules={[Autoplay]}
          className="mySwiper p-10 pl-10"
        >
          <SwiperSlide><img src="src/assets/Logo-Client-1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-5.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="src/assets/Logo-Client-5.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Boxslide