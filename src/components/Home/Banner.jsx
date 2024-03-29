import { Swiper, SwiperSlide } from "swiper/react";
import eye from "../../assets/eye.svg";
import playIcon from "../../assets/playIcon.svg";
import star from "../../assets/start.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import WatchTrailerModal from "./WatchTrailerModal";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper bg-red lg:h-[849px] h-[580px] absolute top-0">
          {[0].map((data) => (
            <>
              <SwiperSlide>
                <div className="bg_banner lg:ps-0 ps-[24px] pt-[50px]">
                  <div className="max-w-[1280px] w-full mx-auto">
                    <div className="lg:pt-[400px] pt-[163px] pb-[100px] text-start">
                      <p className="lg:text-[36px] text-[24px] font-normal text-white ">
                        Upcoming
                      </p>
                      <h1 className="lg:text-[71px] text-[40px] text-white font-[800] ">
                        Crew
                      </h1>
                      <div className="mb-[32px] font-medium text-lg flex lg:flex-row flex-col  gap-[16px] leading-[28px] lg:justify-start justify-center ">
                        <div className="flex items-center gap-[3px]">
                          <img src={star} alt="" />
                          <p className="text-white">
                            5.0
                            <span className="text-clr_bc ml-2">
                              (35 Reviews)
                            </span>
                          </p>
                        </div>
                        <p className="font-medium text-white ">
                          Directed by{" "}
                          <span className="text-clr_09 text-lg">
                            Rajesh Krishnan
                          </span>
                        </p>
                      </div>
                      <div className="flex lg:flex-row flex-col gap-[24px] items-center">
                        <Link
                          to={"/movie-details"}
                          className="text-white text-base font-medium border border-clr_12 bg-clr_12 hover:text-white hover:border-white hover:bg-transparent px-4 py-[14px] rounded-lg shadow-button flex items-center gap-2">
                          <img src={eye} alt="" />
                          View Details
                        </Link>

                        <Link
                          target="_blank"
                          to={
                            "https://www.youtube.com/watch?v=3uvfq4Cu8R8&ab_channel=BalajiMotionPictures"
                          }>
                          <button
                            className="text-white text-base font-medium flex items-center gap-3"
                            onClick={() =>
                              document.getElementById("my_modal_2").showModal()
                            }
                          >
                            <img src={playIcon} alt="play" />
                            Watch Trailer
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
      <WatchTrailerModal />
    </>
  );
};

export default Banner;
