import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import UpComingShowCards from '../Home/UpComingShowCards';
const MovieShowSlider = () => {


    return (
        <div className='moviedetails_slider'>

            <div className='bg-black  pb-[80px]'>
                <div className='max-w-[1280px] w-full mx-auto'>
                    <h1 className='text-primary text-[36px] font-bold text-center pt-[80px]'>Upcoming Shows</h1>

                    <Swiper
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper "
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <UpComingShowCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <UpComingShowCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <UpComingShowCards />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default MovieShowSlider