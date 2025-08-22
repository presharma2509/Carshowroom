import React, { useRef, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
// import 'App.css';
import logo1 from '../assets/logo-Client-1.png';
import logo2 from '../assets/logo-Client-2.png';
import logo3 from '../assets/logo-Client-3.png';
import logo4 from '../assets/logo-Client-4.png';  
import logo5 from '../assets/logo-Client-5.png';

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
          <SwiperSlide><img src={logo1} alt="logo1" /></SwiperSlide>
          <SwiperSlide><img src={logo2} alt="logo2" /></SwiperSlide>
          <SwiperSlide><img src={logo3} alt="logo3" /></SwiperSlide>
          <SwiperSlide><img src={logo4} alt="logo4" /></SwiperSlide>
          <SwiperSlide><img src={logo5} alt="logo5" /></SwiperSlide>
          <SwiperSlide><img src={logo1} alt="logo1" /></SwiperSlide>
          <SwiperSlide><img src={logo2} alt="logo2" /></SwiperSlide>
          <SwiperSlide><img src={logo3} alt="logo3" /></SwiperSlide>
          <SwiperSlide><img src={logo4} alt="logo4" /></SwiperSlide>
          <SwiperSlide><img src={logo5} alt="logo5" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Boxslide