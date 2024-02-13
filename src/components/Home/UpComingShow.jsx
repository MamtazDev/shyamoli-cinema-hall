import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';
import UpComingShowCards from './UpComingShowCards';

const UpComingShow = () => {
    return (
        <div className='relative bg-black upcomming_show'>

            <div className='max-w-[1280px] w-full mx-auto'>
                <h1 className='text-primary text-[36px] font-bold text-center'>Upcoming Shows</h1>

                {/* <div className='bg-[#0F0F0F] h-[56px] w-[134px] absolute right-[376px] top-[69px] lg:block hidden '></div> */}
                <Swiper
                    spaceBetween={30}
                    navigation={true}
                    modules={[Pagination, Navigation, HashNavigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper text-white h-[800px]"
                >
                    <SwiperSlide data-hash="slide1" className='pt-[100px]'>

                        <UpComingShowCards />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide1" className='pt-[100px]'>

                        <UpComingShowCards />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide1" className='pt-[100px]'>

                        <UpComingShowCards />
                    </SwiperSlide>


                </Swiper>

            </div>

        </div >
    )
}

export default UpComingShow