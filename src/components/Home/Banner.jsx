
import { Swiper, SwiperSlide } from 'swiper/react';
import star from '../../assets/start.png';
import play from '../../assets/play.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <>

            <div className='banner'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper bg-red lg:h-[849px] h-[574px] absolute top-0"
                >
                    {[0, 1, 2, 3, 4, 5].map(data => (

                        <>

                            <SwiperSlide>
                                <div className='bg_banner lg:ps-0 ps-[24px] pt-[50px]'>
                                    <div className='max-w-[1280px] w-full mx-auto'>
                                        <div className='lg:pt-[400px] pt-[200px] pb-[100px] lg:text-start text-center'>
                                            <p className='lg:text-[36px] text-[24px] font-normal text-white '>Now Showing</p>
                                            <h1 className='lg:text-[71px] text-[40px] text-primary  font-[800] '>MR-9: Do or Die</h1>
                                            <div className='mb-[32px] font-medium text-lg flex items-center gap-[16px] leading-[28px] lg:justify-start justify-center '>
                                                <div className="flex gap-[3px]  ">
                                                    <img src={star} alt="" />
                                                    <p className='text-white'>5.0 <span className='text-[#D890A3]  '>(35 Reviews)</span></p>
                                                </div>
                                                <p className=' text-white'>Directed by Asif Akbar</p>
                                            </div>
                                            <div className='flex lg:flex-row flex-col gap-[24px] items-center'>
                                                <a href="#" className="text-white text-base font-medium border  border-[#FF3D48] bg-[#FF3D48] hover:text-[#FF3D48] hover:border-[#FF3D48] hover:bg-transparent px-[16px] py-[10px] rounded-[8px] shadow-button " > More Information</a>

                                                <button>
                                                    <img src={play} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    ))
                    }

                </Swiper>
            </div>

        </>
    )
}

export default Banner