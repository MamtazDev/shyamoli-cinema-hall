import React from 'react'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallary = () => {

    AOS.init();

    return (
        <>
            <div className='bg-black pb-[80px] pt-[160px] '>
                <h1 className='text-primary text-[36px] font-bold text-center mb-[24px]'>Our Gallery</h1>
                <div className='flex lg:flex-row flex-col gap-[32px] justify-center mb-[32px] lg:mx-0 mx-[24px]'>
                    <div className="relative hover_img"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src={g1} alt="gallary" />
                        <div className='absolute bottom-[29px] left-[32px] '>
                            <p className='text-white text-[24px]  font-semibold '>Outdoor</p>
                        </div>
                    </div>
                    <div className="relative hover_img"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src={g2} alt="gallary" />
                        <div className='absolute bottom-[29px] left-[32px] '>
                            <p className='text-white text-[24px]  font-semibold '>Outdoor</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col gap-[32px] justify-center lg:mx-0 mx-[24px]'>
                    <div className="relative hover_img"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src={g3} alt="gallary" />
                        <div className='absolute bottom-[29px] left-[32px] '>
                            <p className='text-white text-[24px]  font-semibold '>Outdoor</p>
                        </div>
                    </div>
                    <div className="relative hover_img"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src={g4} alt="gallary" />
                        <div className='absolute bottom-[29px] left-[32px] '>
                            <p className='text-white text-[24px]  font-semibold '>Outdoor</p>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Gallary