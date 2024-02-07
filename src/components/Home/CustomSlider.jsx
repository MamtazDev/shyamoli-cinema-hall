import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import CardShow from './CardShow';
const CustomSlider = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        return () => {
            swiper.destroy(true, true);
        };
    }, []);

    const goToPrevSlide = () => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('resize')); // Resize event to fix swiper size
        }
        swiper.slidePrev();
    };

    const goToNextSlide = () => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('resize')); // Resize event to fix swiper size
        }
        swiper.slideNext();
    };

    return (
        <div>
            <div className="swiper-container bg-black relative">
                <div className="swiper-wrapper">
                    {/* Slides */}
                    <div className="swiper-slide"><CardShow /> </div>
                    <div className="swiper-slide"><CardShow /> </div>
                    <div className="swiper-slide"><CardShow /> </div>
                </div>

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev bg-red-700" onClick={goToPrevSlide}>next</div>
                <div className="swiper-button-next bg-red-700" onClick={goToNextSlide}>prev</div>

                {/* Pagination */}
                <div className="swiper-pagination"></div>
            </div>

        </div>
    )
}

export default CustomSlider