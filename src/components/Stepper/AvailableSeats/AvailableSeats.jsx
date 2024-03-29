import React, { useState } from 'react'
import seatRound from '../../../assets/seatRound.png'
import timer from '../../../assets/timer.svg'
import { SeatsArrangeMent } from './SeatsArrangeMent'
import StepperButtons from '../StepperButtons'

const AvailableSeats = ({ complete, handleNext }) => {
    const [select, setSelect] = useState(false)

    return (
      <div className="mt-[32px]">
        <div className="p-[32px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px]">
          <p className=" text-[24px] font-semibold mb-[34px] text-center ">Select Seats</p>
          <div className="flex items-center justify-end">
            <div className="flex gap-[20px]">
              <div className="text-base font-normal leading-[24px] flex gap-[8px] text-[#E2E8F0] items-center ">
                <div
                  onClick={() => setSelect(!select)}
                  className={`h-[20px] w-[20px] rounded-[2px] ${
                    select ? "bg-[#FF3D48]" : "bg-[#AAA]"
                  }`}></div>
                <p>Available</p>
              </div>
              <div className="text-base font-normal leading-[24px] flex gap-[8px] text-[#E2E8F0] items-center ">
                <div
                  onClick={() => setSelect(true)}
                  className={`h-[20px] w-[20px] rounded-[2px] bg-clr_12 `}></div>
                <p>Selected</p>
              </div>
              <div className="text-base font-normal leading-[24px] flex gap-[8px] text-[#E2E8F0] items-center ">
                <div
                  onClick={() => setSelect(!select)}
                  className={`h-[20px] w-[20px] rounded-[2px] bg-[#3D3D3D]`}></div>
                <p>Already Booked</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-[34px] mb-[24px]">
            <img src={seatRound} alt="seatRound" />
          </div>
          <div>
            <p className="flex items-center gap-[8px] justify-center text-sm font-medium leading-[20px] ">
              {" "}
              <img src={timer} alt="timer" /> Time remaining:{" "}
              <span className="text-clr_12">3.20</span> min
            </p>
          </div>
          <SeatsArrangeMent />
        </div>

        {/* {!complete && (
          <StepperButtons onNext={handleNext}>Pay 600 tk</StepperButtons>
        )} */}
      </div>
    );
}

export default AvailableSeats
