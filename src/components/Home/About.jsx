import React from 'react'

import about from '../../assets/about.svg'

const About = () => {
    return (
        <>
            <div className='bg-[#100425]'>
                <div className='max-w-[1280px] w-full mx-auto '>
                    <div className="grid grid-cols-12 lg:py-[80px] lg:mx-0 mx-[24px]">
                        <div className="col-span-12 lg:col-span-6">
                            <img className='lg:h-[470px]' src={about} alt="" />
                        </div>
                        <div className="lg:col-span-6 col-span-12 p-[32px] lg:leading-[24px] leading-[44px] ">
                            <h3 className='text-primary  lg:text-[36px] text-[30px] font-bold'>About Shymoli Cinema Hall</h3>
                            <p className='text-[#E2E8F0] text-base  font-normal mt-[20px] mb-[16px] '>For decades, Shymoli Cinema Hall has been a beacon of cinematic   <br className='hidden lg:flex' />  excellence, enchanting audiences with a rich tapestry of  <br className='hidden lg:flex' />  captivating movies and immersive experiences. Our unwavering  <br className='hidden lg:flex' /> commitment to delivering unparalleled entertainment has solidified  <br className='hidden lg:flex' /> our position as the go-to choice for cinema enthusiasts seeking an <br className='hidden lg:flex' />  extraordinary cinematic journey. Join us in the heart of the city for <br className='hidden lg:flex' />  an experience that transcends the ordinary, where every visit to <br className='hidden lg:flex' />  Shymoli Cinema Hall becomes a cherished memory in the tapestry <br className='hidden lg:flex' />  of your entertainment story.</p>

                            <div className=' text-[#EAB308] text-base font-normal flex flex-col gap-[8px] lg:mt-0 mt-[30px] '>
                                <p> -   State-of-the-art Dolby Atmos Surround Sound</p>
                                <p> -   Spacious and Comfortable Seating</p>
                                <p> -   In-House Snack Bar with a Variety of Refreshments</p>
                                <p> -   Ample Parking Space for Moviegoers</p>
                                <p> -   Convenient Online Booking and Seat Selection</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        </>
    )
}

export default About