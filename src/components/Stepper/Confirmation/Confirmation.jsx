/* eslint-disable react/prop-types */
import React from 'react'
import success from '../../../assets/success.png'

const Confirmation = () => {
    return (
        <div>
            <div className='mt-[32px] '>
                <h2 className='text-primary text-[30px] font-bold leading-[30px] mb-[36px] '>Confirmation</h2>
                <div className='p-[24px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px]'>
                    <div className='max-w-[463px] mx-auto w-full rounded-[20px] bg-[#25282e] pt-[80px] px-[27px] pb-[53px] relative'>
                        <div className='absolute top-[-59px] left-[35%]'>
                            <img src={success} alt="" />
                        </div>

                        <h2 className='text-[30px] font-bold leading-[36px] text-center '>Congratulations</h2>
                        <p className='text-lg font-normal leading-[28px] text-center text-[#FFFFFFB7] mt-[9px]'>You’ve successfully purchase tickets</p>
                        <div className='h-[1px] bg-[#FFFFFF29] my-[40px] '> </div>

                        <p className='text-lg font-normal leading-[28px] text-center text-[#FFFFFFB7] mt-[9px]'>Total Payment</p>
                        <h2 className='text-[24px] font-bold leading-[36px] text-center '>500 tk</h2>

                        <div className='h-[1px] bg-[#FFFFFF29] my-[40px] '> </div>

                        <div className='p-[16px] flex flex-col gap-[12px]'>
                            <div>
                                <p className='text-[#9A9A9A]  text-sm font-normal leading-[20px] mb-[4px]'>Name</p>
                                <p className=' text-sm font-normal leading-[20px]'>John</p>
                            </div>
                            <div>
                                <p className='text-[#9A9A9A]  text-sm font-normal leading-[20px] mb-[4px]'>Movie Name</p>
                                <p className=' text-sm font-normal leading-[20px]'>John Weak</p>
                            </div>
                            <div>
                                <p className='text-[#9A9A9A]  text-sm font-normal leading-[20px] mb-[4px]'>Session</p>
                                <p className=' text-sm font-normal leading-[20px]'>1h 45m - 24/01/2024</p>
                            </div>
                            <div>
                                <p className='text-[#9A9A9A]  text-sm font-normal leading-[20px] mb-[4px]'>Tickets Quantity</p>
                                <p className=' text-sm font-normal leading-[20px]'>02</p>
                            </div>
                        </div>


                    </div>

                    <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px]  ">
                        <button className='max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base'>Download Ticket</button>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Confirmation