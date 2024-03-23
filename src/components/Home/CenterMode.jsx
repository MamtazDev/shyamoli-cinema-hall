import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    Autoplay,
    EffectCoverflow,
    FreeMode,
    Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ourGallery } from "../../utils/data";

const CenterMode = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      effect={"coverflow"}
      navigation={false}
      modules={[Navigation, Autoplay, FreeMode, EffectCoverflow]}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      className="mySwiper">
      {ourGallery.map((sliderItem, index) => (
        <SwiperSlide data-hash="slide1" className="" key={index}>
          <div className="image relative">
            <img className="mb-[24px]" src={sliderItem.galleryImg} alt="" />
            <p className="absolute bottom-[18px] left-[18px] text-clr_09 font-semibold text-[30px] text-center block w-[400px] py-3 backdrop-blur-lg rounded ">
              Outdoor
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CenterMode;
