import React from 'react'
import contact from '../../assets/contact.png';

const Contact = () => {
    return (
        <div className='bg-[#141414]'>
            <div className='max-w-[1280px] mx-auto w-full pt-[162px] pb-[80px]'>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 mx-auto lg:col-span-6 lg:mx-0 lg:mb-0 mb-[40px] ">
                        <img src={contact} alt="" />
                    </div>
                    <div className="w-full col-span-12 lg:col-span-6 ">
                        <form className='w-full'>
                            <div className='p-[32px] bg-[#1A1A1A] lg:h-[657px] h-auto lg:mx-0 mx-[20px] flex gap-[32px] flex-col' style={{
                                borderRadius: '0px 12px 12px 0px'
                            }}>
                                <div className='flex  lg:flex-nowrap flex-wrap gap-[24px] w-full'>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <label className='text-[#F8FAFC]'>First Name</label>
                                        <input type="text" className='w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your First Name" />
                                    </div>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <label className='text-[#F8FAFC]'>Last Name</label>
                                        <input type="text" className='w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your Last Name" />
                                    </div>

                                </div>
                                <div className='flex lg:flex-nowrap flex-wrap  gap-[24px] w-full'>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <label className='text-[#F8FAFC]'>Email</label>
                                        <input type="email" className='w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your Email" />
                                    </div>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <label className='text-[#F8FAFC]'>Phone Number</label>
                                        <input type="text" className='w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your phone number" />
                                    </div>
                                </div>
                                <div className='flex lg:flex-nowrap flex-wrap  flex-col gap-[8px]'>
                                    <label className='text-[#F8FAFC]'>Message</label>
                                    <textarea placeholder='Enter your Message' className='h-[163px] w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]'></textarea>
                                </div>
                                <div>
                                    <div className='flex  justify-between  items-center  mb-[30px]'>
                                        <label className="flex items-center gap-[10px] container1">  <p className='text-[#999] text-base font-normal leading-[24px] '>I agree with Terms of Use <br /> and Privacy Policy</p>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <button className='max-w-[236px] text-lg bg-primary hover:text-[#FF3D48] rounded-[8px] hover:bg-transparent border border-[#FF3D48] font-semibold leading-[28px] w-full py-[16px] text-white'>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact