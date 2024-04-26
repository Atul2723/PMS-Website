import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PmsHome from './PmsHome';


const PmsHomeSlider = () => {
  return (
    <div className='pms-home'>
    <Swiper
        breakpoints={{
            1400: {
               
                slidesPerView: 1,
            },
            768: {
    
                slidesPerView: 1,
            },
        }}
        style={{
            paddingBottom: "80px", "--swiper-pagination-color": "var(--text-color)",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "15px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={40}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >


            <SwiperSlide className='swiper-slides '>
                <PmsHome heading='Introducing NNM Amritkaal Emerging Fund' subHeading="Empowering Investors with a Comprehensive Portfolio of Financial Services" img='/homeslide2.svg' buttonText='Explore More'/>


            </SwiperSlide>
            <SwiperSlide className='swiper-slides '>
                <PmsHome heading='Make your Next Move The Best Move' subHeading='NNM Amritkaal Emerging Fund By NNM Securities Private Limited' img='/homesvg.svg' buttonText='Explore More'/>


            </SwiperSlide>
            


    </Swiper>
    
    </div>
  )
}

export default PmsHomeSlider