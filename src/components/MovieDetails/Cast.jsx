import { Swiper, SwiperSlide } from 'swiper/react';
import cast1 from '../../assets/cast1.png'
import cast2 from '../../assets/cast2.png'
import cast3 from '../../assets/cast3.png'
import cast4 from '../../assets/cast4.png'
import cast5 from '../../assets/cast5.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Cast = () => {
  return (
    <div className='relative cast_slider'>

      <div className='absolute top-[11px] '>
        <p className='text-lg text-[#999] font-normal leading-[28px]  '>Cast</p>
      </div>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex gap-[24px]'>
            <img src={cast1} alt="cast" />
            <img src={cast2} alt="cast" />
            <img src={cast3} alt="cast" />
            <img src={cast4} alt="cast" />
            <img src={cast5} alt="cast" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex gap-[24px]'>
            <img src={cast1} alt="cast" />
            <img src={cast2} alt="cast" />
            <img src={cast3} alt="cast" />
            <img src={cast4} alt="cast" />
            <img src={cast5} alt="cast" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex gap-[24px]'>
            <img src={cast1} alt="cast" />
            <img src={cast2} alt="cast" />
            <img src={cast3} alt="cast" />
            <img src={cast4} alt="cast" />
            <img src={cast5} alt="cast" />
          </div>
        </SwiperSlide>

      </Swiper>


    </div>
  )
}

export default Cast