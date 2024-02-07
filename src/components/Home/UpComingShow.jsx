import React from 'react'
import show1 from '../../assets/ushow.png'
import show2 from '../../assets/ushow2.png'
import show3 from '../../assets/ushow3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const UpComingShow = () => {
    return (
        <div className='bg-black upcomming_show'>

            <div className='max-w-[1280px] w-full mx-auto'>
                <h1 className='text-primary text-[36px] font-bold text-center'>Upcoming Shows</h1>

                {/* <div className="grid grid-cols-12">
                    <div className="lg:col-span-4 col-span-12">
                        <div>
                            <img className='mb-[24px]' src={show1} alt="" />
                            <p className='text-[20px] font-bold text-white mb-[12px] '>Fighter</p>
                            <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                            <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                        </div>

                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div>
                            <img className='mb-[24px]' src={show2} alt="" />
                            <p className='text-[20px] font-bold text-white mb-[12px] '>Madame Web</p>
                            <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                            <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                        </div>

                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div>
                            <img className='mb-[24px]' src={show3} alt="" />
                            <p className='text-[20px] font-bold text-white mb-[12px] '>Kalki 2898 AD</p>
                            <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                            <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                        </div>

                    </div>
                </div> */}


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
                        <div className="grid grid-cols-12 pt-[50px]">
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show1} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Fighter</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show2} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Madame Web</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show3} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Kalki 2898 AD</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide data-hash="slide1">
                        <div className="grid grid-cols-12">
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show1} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Fighter</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show2} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Madame Web</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show3} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Kalki 2898 AD</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide data-hash="slide1">
                        <div className="grid grid-cols-12">
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show1} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Fighter</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show2} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Madame Web</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show3} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Kalki 2898 AD</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide data-hash="slide1">
                        <div className="grid grid-cols-12">
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show1} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Fighter</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show2} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Madame Web</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div>
                                    <img className='mb-[24px]' src={show3} alt="" />
                                    <p className='text-[20px] font-bold text-white mb-[12px] '>Kalki 2898 AD</p>
                                    <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                                    <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>

            </div>

        </div >
    )
}

export default UpComingShow