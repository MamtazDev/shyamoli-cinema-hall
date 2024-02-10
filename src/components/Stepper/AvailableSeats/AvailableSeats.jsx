import React, { useState } from 'react'
import seatRound from '../../../assets/seatRound.png'
import timer from '../../../assets/timer.svg'
import { SeatsArrangeMent } from './SeatsArrangeMent'

const AvailableSeats = ({onNext}) => {
    const [select, setSelect] = useState(false)

    return (
        <div>

            <div className='mt-[32px]'>
                <h2 className='text-primary text-[30px] font-bold leading-[30px] mb-[36px] '>Available Seats</h2>

                <div className='p-[32px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px]'>
                    <div className='flex items-center justify-between'>
                        <p className=' text-[24px] font-semibold mb-[34px] '>Select Seats</p>
                        <div className='flex gap-[20px]'>
                            <div className='text-base font-normal leading-[24px] flex gap-[8px] text-[#E2E8F0] items-center '>
                                <div onClick={() => setSelect(!select)} className={`h-[20px] w-[20px] rounded-[2px] ${select ? "bg-[#FF3D48]" : "bg-[#AAA]"}`}></div>
                                <p>Available</p>
                            </div>
                            <div className='text-base font-normal leading-[24px] flex gap-[8px] text-[#E2E8F0] items-center '>
                                <div onClick={() => setSelect(true)} className={`h-[20px] w-[20px] rounded-[2px] bg-[#FF3D48] `}></div>
                                <p>Selected</p>
                            </div>
                            <div className='text-base font-normal leading-[24px] flex gap-[8px] text-[#E2E8F0] items-center '>
                                <div onClick={() => setSelect(!select)} className={`h-[20px] w-[20px] rounded-[2px] bg-[#3D3D3D]`}></div>
                                <p>Already Booked</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center mt-[34px] mb-[24px]'>
                        <img src={seatRound} alt="seatRound" />
                    </div>
                    <div>
                        <p className='flex items-center gap-[8px] justify-center text-sm font-medium leading-[20px] '> <img src={timer} alt="timer" /> Time remaining: <span className='text-primary' >3.20</span> min</p>
                    </div>
                    <SeatsArrangeMent />
                </div>


                <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px] pb-[80px] ">
                    <button onClick={onNext} className='max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base'>Pay 600 tk</button>
                </div>

            </div>
        </div>
    )
}

export default AvailableSeats
