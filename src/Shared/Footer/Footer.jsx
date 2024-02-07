import React from 'react'
import logo from '../../assets/logo.png'
export const Footer = () => {
    return (
        <>
            <div className='bg-[#100425] pt-[80px] pb-[48px] text-white  '>
                <div className='max-w-[1280px] w-full mx-auto '>
                    <div className='flex justify-between mb-[36px]'>

                        <div className='flex flex-col gap-[32px] items-start'>
                            <img src={logo} alt="logo" />
                            <ul className='flex gap-[32px] text-base '>
                                <li>Show Time</li>
                                <li>Booking</li>
                                <li>About Us</li>
                            </ul>
                        </div>

                        <div>
                            <p className='text-sm font-semibold mb-[16px]'>Stay up to date</p>

                            <div className="flex gap-[16px]">
                                <input type="email" className='bg-white py-[10px] px-[14px] shadow-input rounded-[8px] border border-[#D0D5DD] ' placeholder="Enter your email" name="" id="" />

                                <button className='text-white max-w-[200px]  px-[16px]  w-full bg-[#FF3D48] border border-[#FF3D48] shadow-button py-[12px] rounded-[8px] '>Subscribe</button>
                            </div>
                        </div>

                    </div>
                    <div className='h-[1px] bg-[#572314] mb-[32px]'></div>
                    <div className='flex justify-between text-[#E2E8F0]'>
                        <p className=''>© 2024 Shymoli Cinema Hall. All rights reserved.</p>
                        <ul className='flex gap-[16px] text-base font-normal'>
                            <li>Show Time</li>
                            <li>Booking</li>
                            <li>About Us</li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}
