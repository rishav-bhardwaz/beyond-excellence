import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css';
import image from "../../public/images/abhi.png"
// import required modules
import { Pagination , Autoplay } from 'swiper/modules';

const Testimonial = () => {
     const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    1080: {
      slidesPerView: 2,
    },
  };
  return (
  <>
  <div id='testimonial' className=" md:h-[60vh] xl:h-[100vh] h-auto w-[100%] px-[100px]  mb-0">
    <div className='text-center md:mb-4 md:mt-4 mb-6 text-[40px] xl:text-[64px] font-semibold'>Testimonials</div>
      <Swiper
      breakpoints={breakpoints}
        slidesPerView={2}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex flex-col items-center ">
            <img src={image}  alt='/'/>
            <div className="xl:text-[40px] md:text-[40px] text-[30px]">Elizabeth Thomas</div>
            <p className="text-[15px] text-[#1E1E1E] xl:w-[50%] md:w-[50%] w-[100%]">Improve your grammar, vocabulary, and communication skills for professional success and academic pursuits..</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center">
            <img src={image} alt='/'/>
            <div className="xl:text-[40px] md:text-[40px] text-[30px]">Elizabeth Thomas</div>
            <div className="text-[15px] text-[#1E1E1E] xl:w-[50%] md:w-[50%] w10[90%]">Improve your grammar, vocabulary, and communication skills for professional success and academic pursuits..</div>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="flex flex-col items-center">
            <img src={image} alt='/'/>
            <div className="xl:text-[40px] md:text-[40px] text-[30px]">Elizabeth Thomas</div>
            <p className="text-[15px] text-[#1E1E1E] xl:w-[50%] md:w-[50%] w-[100%]">Improve your grammar, vocabulary, and communication skills for professional success and academic pursuits..</p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="flex flex-col items-center">
            <img src={image} alt='/'/>
            <div className="xl:text-[40px] md:text-[40px] text-[30px]">Elizabeth Thomas</div>
            <p className="text-[15px] text-[#1E1E1E] xl:w-[50%] md:w-[50%] w-[100%]">Improve your grammar, vocabulary, and communication skills for professional success and academic pursuits..</p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="flex flex-col items-center">
            <img src={image} alt='/'/>
            <div className="xl:text-[40px] md:text-[40px] text-[30px]">Elizabeth Thomas</div>
            <p className="text-[15px] text-[#1E1E1E] xl:w-[50%] md:w-[50%] w-[100%]">Improve your grammar, vocabulary, and communication skills for professional success and academic pursuits..</p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="flex flex-col items-center">
            <img src={image} alt='/'/>
            <div className="xl:text-[40px] md:text-[40px] text-[30px]">Elizabeth Thomas</div>
            <p className="text-[15px] text-[#1E1E1E] xl:w-[50%] md:w-[50%] w-[100%]">Improve your grammar, vocabulary, and communication skills for professional success and academic pursuits..</p>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </>  )
}

export default Testimonial