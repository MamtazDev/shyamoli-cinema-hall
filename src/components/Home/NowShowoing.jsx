import React from 'react'
import show1 from '../../assets/show1.svg'
import show2 from '../../assets/show2.png'
import show3 from '../../assets/show3.svg'
import show4 from '../../assets/show4.svg'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

const NowShowoing = () => {

    AOS.init();


    return (
        <div className='bg-black pt-[80px] pb-[96px] '>
            <div className='max-w-[1280px] w-full mx-auto'>
                <h1 className='text-primary text-[36px] font-bold text-center mb-[36px]'>Now Showing</h1>

                <div className="grid grid-cols-12">
                    <div className="col-span-12 mx-auto lg:col-span-3 lg:mb-0 mb-[24px]"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"


                    >
                        <div className='relative img_hover_show'>
                            <Link to="/movie-details"><img src={show1} alt="show1" /></Link>
                            <p className='hover_txt text-[24px] hover:text-primary text-white font-bold absolute bottom-[24px] left-[16px] '>Hubba</p>
                        </div>
                    </div>
                    <div className="col-span-12 mx-auto lg:col-span-3 lg:mb-0 mb-[24px]"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"


                    >
                        <div className='relative img_hover_show'>
                            <Link to="/movie-details"><img src={show2} alt="show1" /></Link>
                            <p className='hover_txt text-[24px] hover:text-primary text-white font-bold absolute bottom-[24px] left-[16px] '>Top Gun: Maverick</p>
                        </div>
                    </div>
                    <div className="col-span-12 mx-auto lg:col-span-3 lg:mb-0 mb-[24px]"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className='relative img_hover_show'>
                            <Link to="/movie-details"><img src={show3} alt="show1" /></Link>
                            <p className='hover_txt text-[24px] hover:text-primary text-white font-bold absolute bottom-[24px] left-[16px] '>MR-9 : Do or Die</p>
                        </div>
                    </div>
                    <div className="col-span-12 mx-auto lg:col-span-3 lg:mb-0 mb-[24px]"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"


                    >
                        <div className='relative img_hover_show'>
                            <Link to="/movie-details"><img src={show4} alt="show1" /></Link>
                            <p className='hover_txt text-[24px] hover:text-primary text-white font-bold absolute bottom-[24px] left-[16px] '>Priyotoma</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NowShowoing