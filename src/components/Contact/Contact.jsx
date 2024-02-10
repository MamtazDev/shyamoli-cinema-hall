import React from 'react'
import contact from '../../assets/contact.png';

const Contact = () => {
    return (
        <div className='bg-[#141414]'>

            <div className='max-w-[1280px] mx-auto w-full pt-[162px] pb-[80px]'>


                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-6">
                        <img src={contact} alt="" />
                    </div>
                    <div className="w-full col-span-12 lg:col-span-6 ">
                        <form className='w-full'>
                            <div className='p-[32px] bg-[#1A1A1A] h-[657px] flex gap-[32px] flex-col' style={{
                                borderRadius: '0px 12px 12px 0px'
                            }}>
                                <div className='flex gap-[24px] w-full'>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <label className='text-[#F8FAFC]'>First Name</label>
                                        <input type="text" className='w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your First Name" />
                                    </div>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <label className='text-[#F8FAFC]'>Last Name</label>
                                        <input type="text" className='w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your Last Name" />
                                    </div>

                                </div>
                                <div className='flex gap-[24px] w-full'>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <label className='text-[#F8FAFC]'>Email</label>
                                        <input type="email" className='w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your Email" />
                                    </div>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <label className='text-[#F8FAFC]'>Phone Number</label>
                                        <input type="text" className='w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your phone number" />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <label className='text-[#F8FAFC]'>Message</label>
                                    <textarea placeholder='Enter your Message' className='h-[163px] w-full bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]'></textarea>
                                </div>
                                <div>
                                    <div className='flex items-center gap-[10px] mb-[30px]'>
                                        {/* <input className='h-[28px] w-[28px] bg-primary' type="checkbox" name="" id="" /> */}

                                        <label className="container">  <p className='text-[#999] text-base font-normal leading-[24px] '>I agree with Terms of Use and Privacy Policy</p>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>

                                      
                                    </div>
                                    <button className='text-lg bg-primary hover:text-[#FF3D48] hover:bg-transparent border border-[#FF3D48] font-semibold leading-[28px] w-full py-[16px] text-white'>Send Message</button>


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