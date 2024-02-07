
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

            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper bg-red h-[849px] absolute top-0"
            >
                {[0, 1, 2, 3, 4, 5].map(data => (

                    <>

                        <SwiperSlide>
                            <div className='bg_banner'>
                                <div className='max-w-[1280px] w-full mx-auto'>
                                    <div className='pt-[400px]'>
                                        <p className='text-[36px] font-normal text-white '>Now Showing</p>
                                        <h1 className='text-[71px] text-primary  font-[800] '>MR-9: Do or Die</h1>
                                        <div className='mb-[32px] font-medium text-lg flex items-center gap-[16px] leading-[28px] '>
                                            <div className="flex gap-[3px] ">
                                                <img src={star} alt="" />
                                                <p className='text-white'>5.0 <span className='text-[#D890A3]  '>(35 Reviews)</span></p>
                                            </div>
                                            <p className=' text-white'>Directed by Asif Akbar</p>
                                        </div>
                                        <div className='flex gap-[24px] items-center'>
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
            {/*       
        <div className='bg_banner'>

        </div>
             */}
        </>
    )
}

export default Banner