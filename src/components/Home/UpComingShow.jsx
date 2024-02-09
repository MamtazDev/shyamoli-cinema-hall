import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import UpComingShowCards from './UpComingShowCards';

const UpComingShow = () => {
    return (
        <div className='bg-black upcomming_show'>

            <div className='max-w-[1280px] w-full mx-auto'>
                <h1 className='text-primary text-[36px] font-bold text-center'>Upcoming Shows</h1>


                <Swiper
                    spaceBetween={30}

                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, HashNavigation]}
                    className="mySwiper text-white h-[800px]"
                >
                    <SwiperSlide data-hash="slide1">

                        <UpComingShowCards />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide1">

                        <UpComingShowCards />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide1">

                        <UpComingShowCards />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide1">

                        <UpComingShowCards />
                    </SwiperSlide>


                </Swiper>

            </div>

        </div >
    )
}

export default UpComingShow