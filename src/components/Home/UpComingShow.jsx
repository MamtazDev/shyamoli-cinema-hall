import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import show1 from "../../assets/ushow.png";
import show2 from "../../assets/newMovie.png";
import show3 from "../../assets/ushow3.png";

// import required modules
import {
    Autoplay,
    HashNavigation,
    Navigation,
    Pagination,
} from "swiper/modules";

const UpComingShow = () => {
  return (
    <div className="relative bg-black upcomming_show">
      <div className="max-w-[1280px] w-full h-full mx-auto">
        <h1 className="text-white text-[36px] font-bold text-center mb-[36px]">
          Upcoming Shows
        </h1>

        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper text-white ">
          {/* <div className="grid grid-cols-12"> */}
          {/* <SwiperSlide data-hash="slide1" className="lg:pb-[100px] pb-[180px]">
            <div className="col-span-12 lg:col-span-4 lg:mx-0 mx-[24px]">
              <div>
                <img className="mb-[24px]" src={show1} alt="" />
                <p className="text-[20px] font-bold text-white mb-[12px] ">
                  Fighter
                </p>
                <p className="text-base font-normal text-[#94A3B8] mb-[8px]">
                  2h 15m • Movie • Thriller/Mystery
                </p>
                <p className="text-base font-normal text-[#94A3B8]">
                  Released : December 24, 2023
                </p>
              </div>
            </div>
          </SwiperSlide> */}

          <div className="flex justify-center">
            <div data-hash="slide1" className="lg:pb-[100px] pb-[180px]">
              <div className="col-span-12 lg:col-span-4 lg:mx-0 mx-[24px]">
                <div>
                  <img className="mb-[24px]" src={show2} alt="" />
                  <p className="text-[20px] font-bold text-white mb-[12px] ">
                    Fighter
                  </p>
                  <p className="text-base font-normal text-[#94A3B8] mb-[8px]">
                    2h 15m • Movie • Thriller/Mystery
                  </p>
                  <p className="text-base font-normal text-[#94A3B8]">
                    Released : December 24, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <SwiperSlide data-hash="slide1" className="lg:pb-[100px] pb-[180px]">
            <div className="col-span-12 lg:col-span-4 lg:mx-0 mx-[24px]">
              <div>
                <img className="mb-[24px]" src={show3} alt="" />
                <p className="text-[20px] font-bold text-white mb-[12px] ">
                  Fighter
                </p>
                <p className="text-base font-normal text-[#94A3B8] mb-[8px]">
                  2h 15m • Movie • Thriller/Mystery
                </p>
                <p className="text-base font-normal text-[#94A3B8]">
                  Released : December 24, 2023
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide data-hash="slide1" className="lg:pb-[100px] pb-[180px]">
            <div className="col-span-12 lg:col-span-4 lg:mx-0 mx-[24px]">
              <div>
                <img className="mb-[24px]" src={show1} alt="" />
                <p className="text-[20px] font-bold text-white mb-[12px] ">
                  Fighter
                </p>
                <p className="text-base font-normal text-[#94A3B8] mb-[8px]">
                  2h 15m • Movie • Thriller/Mystery
                </p>
                <p className="text-base font-normal text-[#94A3B8]">
                  Released : December 24, 2023
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide data-hash="slide1" className="lg:pb-[100px] pb-[180px]">
            <div className="col-span-12 lg:col-span-4 lg:mx-0 mx-[24px]">
              <div>
                <img className="mb-[24px]" src={show2} alt="" />
                <p className="text-[20px] font-bold text-white mb-[12px] ">
                  Fighter
                </p>
                <p className="text-base font-normal text-[#94A3B8] mb-[8px]">
                  2h 15m • Movie • Thriller/Mystery
                </p>
                <p className="text-base font-normal text-[#94A3B8]">
                  Released : December 24, 2023
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide data-hash="slide1" className="lg:pb-[100px] pb-[180px]">
            <div className="col-span-12 lg:col-span-4 lg:mx-0 mx-[24px]">
              <div>
                <img className="mb-[24px]" src={show3} alt="" />
                <p className="text-[20px] font-bold text-white mb-[12px] ">
                  Fighter
                </p>
                <p className="text-base font-normal text-[#94A3B8] mb-[8px]">
                  2h 15m • Movie • Thriller/Mystery
                </p>
                <p className="text-base font-normal text-[#94A3B8]">
                  Released : December 24, 2023
                </p>
              </div>
            </div>
          </SwiperSlide> */}
          {/* </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default UpComingShow;
