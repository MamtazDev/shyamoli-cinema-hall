// import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// const DateSelect = () => {

//     const [active, setActive] = useState(false)

//     const handleActive = () => {
//         setActive(!active)
//     }

//     return (
//         <div className='mt-[28px] date_select_slider'>
//             <Swiper
//                 navigation={true}
//                 modules={[Pagination, Navigation]}
//                 className="mySwiper"


//             >
//                 {[1, 2, 3, 4, 5, 6].map((data) => (
//                     <>
//                         <SwiperSlide >
//                             <div className='flex gap-[16px] justify-center'>
//                                 {[1, 2, 3, 4, 5, 6, 7].map((data, index) => (
//                                     <div
//                                         key={index}
//                                         onClick={handleActive}
//                                         className={`h-[108px] w-[99px] rounded-[8px] cursor-pointer p-[10px] text-center ${active ? 'bg-white' : 'border-[2px] border-[#A6A6A6]'
//                                             }`}
//                                     >
//                                         <p className={`text-base font-medium leading-[24px] ${active ? 'text-[#2B2B2B]' : 'text-[#E2E8F0]'}`}>
//                                             Thr
//                                         </p>
//                                         <h3 className={`text-[24px] ${active ? 'text-[#2B2B2B]' : 'text-[#E2E8F0]'} font-bold leading-[32px] `}>
//                                             25
//                                         </h3>
//                                         <p
//                                             className={`text-base font-normal leading-[24px] ${active ? 'text-[#2B2B2BBF]' : 'text-[#CBD5E1]'
//                                                 } `}
//                                         >
//                                             January
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>

//                         </SwiperSlide>
//                     </>
//                 ))
//                 }
//             </Swiper>
//         </div>
//     )
// }

// export default DateSelect

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const DateSelect = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleActive = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className='mt-[28px] date_select_slider '>
            <Swiper
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
                //   autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                }}
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index} className='w-full '>
                        <div
                            onClick={() => handleActive(index)}
                            className={`h-[108px] w-[99px] rounded-[8px] cursor-pointer p-[10px] text-center ${activeIndex === index
                                    ? 'bg-white'
                                    : 'border-[2px] border-[#A6A6A6]'
                                }`}
                        >
                            <p
                                className={`text-base font-medium leading-[24px] ${activeIndex === index ? 'text-[#2B2B2B]' : 'text-[#E2E8F0]'
                                    }`}
                            >
                                Thr
                            </p>
                            <h3
                                className={`text-[24px] ${activeIndex === index ? 'text-[#2B2B2B]' : 'text-[#E2E8F0]'
                                    } font-bold leading-[32px] `}
                            >
                                25
                            </h3>
                            <p
                                className={`text-base font-normal leading-[24px] ${activeIndex === index ? 'text-[#2B2B2BBF]' : 'text-[#CBD5E1]'
                                    } `}
                            >
                                January
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default DateSelect