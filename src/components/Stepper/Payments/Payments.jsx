/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import m1 from '../../../assets/m1.svg'
import m2 from '../../../assets/m2.svg'
import m3 from '../../../assets/m3.svg'
import bkash from '../../../assets/bkash.png'
import nogod from '../../../assets/nogod.jpg'
import upay from '../../../assets/upay.png'
import StepperButtons from '../StepperButtons'


const Payments = ({  complete, handleNext }) => {

    const [select, setSelect] = useState(false)
    return (
        <div>
            <div className='mt-[32px] pb-[80px]'>
                <h2 className='text-primary text-[30px] font-bold leading-[30px] mb-[36px] '>Payments</h2>
                <div className='p-[32px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px]'>
                    <div className='text-center text-[24px] font-semibold mb-[20px] leading-[32px] '>
                        <p>Select Payment Method</p>
                    </div>
                    <div className='flex justify-center gap-[20px]'>
                        <div onClick={() => setSelect(!select)} className={`border-[2px]  rounded-[8px] w-[189px] h-[85px] flex flex-col gap-1 justify-center items-center ${select ? "bg-[#FF3D48] border-[#FF3D48]" : "bg-transparent border-[#A6A6A6]"} `}>
                            <img src={m1} alt="" />
                            <p className='text-lg font-medium text-[#E2E8F0] leading-[28px] '>Mobile Banking</p>
                        </div>
                        <div onClick={() => setSelect(!select)} className={`border-[2px]  rounded-[8px] w-[189px] h-[85px] flex flex-col gap-1 justify-center items-center ${select ? "bg-[#FF3D48] border-[#FF3D48]" : "bg-transparent border-[#A6A6A6]"} `}>
                            <img src={m2} alt="" />
                            <p className='text-lg font-medium text-[#E2E8F0] leading-[28px] '>Card Payment</p>
                        </div>
                        <div onClick={() => setSelect(!select)} className={`border-[2px]  rounded-[8px] w-[189px] h-[85px] flex flex-col gap-1 justify-center items-center ${select ? "bg-[#FF3D48] border-[#FF3D48]" : "bg-transparent border-[#A6A6A6]"} `}>
                            <img src={m3} alt="" />
                            <p className='text-lg font-medium text-[#E2E8F0] leading-[28px] '>Internet Banking</p>
                        </div>
                    </div>

                    <div className='px-[12px] py-[16px] border border-[#FFFFFF21] rounded-[8px] bg-[#1C1C1C] lg:max-w-[606px] mx-auto w-full mt-[20px] '>

                        <h2 className='text-[#F8FAFC] text-base font-bold leading-[24px] mb-[20px] '>Select Mobile Banking</h2>
                        <div className='flex gap-[20px]'>
                            <img src={bkash} alt="" />
                            <img src={nogod} alt="" />
                            <img src={upay} alt="" />
                        </div>
                    </div>
                    {/* <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px]  ">
                        <button onClick={onNext} className='max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base'>Pay 500 tk</button>
                    </div> */}
                     {!complete && (
                    <StepperButtons onNext={handleNext}>
                      Pay 500 tk
                    </StepperButtons>
                )}

                </div>

            </div>

        </div>
    )
}

export default Payments