import React, { useState } from 'react'
import StepperButtons from '../StepperButtons'

const Details = ({ complete, handleNext }) => {
    const [phoneVerify, setPhoneVerify] = useState(false)
    const [sendOtp, setSendOtp] = useState(false)



    return (
        <>
            <div className='mt-[32px] pb-[80px]'>
                <h2 className='text-primary text-[30px] font-bold leading-[30px] mb-[36px] '>Details</h2>

                <div className='p-[32px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px]'>
                    <div className='mb-[20px]'>
                        <p className='text-[24px] font-semibold leading-[32px] text-center'>Details</p>
                    </div>
                    <div className='py-[16px] px-[12px] border border-[#FFFFFF21] bg-[#1C1C1C] lg:max-w-[576px] w-full mx-auto  ' >

                        <div className='flex flex-col gap-[8px] text-sm font-normal leading-[20px] mb-[16px]'>
                            <label className='text-[#F8FAFC]' >Full Name</label>
                            <input type="text" className='bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your Full name" />
                        </div>
                        <div className='flex flex-col gap-[8px] text-sm font-normal leading-[20px] relative'>
                            <label className='text-[#F8FAFC]'>Mobile Number</label>
                            <input type="text" className='bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your phone number" />
                            <div className='absolute top-[37px] right-[12px]'>
                                {sendOtp ?
                                    <button className='text-primary'>Verified</button>
                                    :
                                    <button onClick={() => setPhoneVerify(true)} className='text-primary'>Verify Number</button>
                                }
                            </div>
                        </div>

                        {phoneVerify && <div className='flex flex-col gap-[8px] text-sm font-normal leading-[20px] relative mt-[8px]'>
                            <input type="text" className='bg-transparent border border-[#7B7B7B] rounded-[8px] py-[10px] px-[12px]' placeholder="Enter your phone number" />
                            <div className='absolute top-[11px] right-[12px]'>
                                <button onClick={() => setSendOtp(true)} className='text-primary'>Send</button>
                            </div>
                        </div>}

                    </div>
                    {/* <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px]  ">
                        <button onClick={onNext} className='max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base'>Next</button>
                    </div> */}
                    {!complete && (
                        <StepperButtons onNext={handleNext}>
                           Next
                        </StepperButtons>
                    )}                </div>
            </div>


        </>
    )
}

export default Details