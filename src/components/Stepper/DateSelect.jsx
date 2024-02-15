

import React, { useState } from 'react'
import Slider from "react-slick";

const DateSelect = () => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActive = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='mt-[28px] date_select_slider '>
        
            <div className="slider-container">
                <Slider {...settings}>
                    {[...Array(10)].map((_, index) => (
                        <>
                            <div
                                onClick={() => handleActive()}
                                className={` rounded-[8px]  h-[108px] w-[99px] cursor-pointer p-[10px] text-center ${activeIndex === index
                                    ? 'bg-white'
                                    : 'border-[2px] border-[#A6A6A6]'
                                    }`}
                            >
                                <p
                                    className={`text-base font-medium leading-[24px] ${activeIndex === index ? 'text-[#2B2B2B]' : 'text-[#E2E8F0]'
                                        }`}>
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

                        </>
                    ))}
                </Slider>
            </div>

        </div >
    )
}

export default DateSelect