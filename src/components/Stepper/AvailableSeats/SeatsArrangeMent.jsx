import React from 'react'
import Seats from '../../../utils/seats'
export const SeatsArrangeMent = () => {
  console.log(Seats)
  return (
    <div>
      {/* <div className="grid grid-cols-12">
        <div className="col-span-6">

          <div className='grid grid-cols-12 gap-[12px]'>
            <div className="col-span-1">
              <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
                F1
              </div>
              
            </div>
            <div className="col-span-1">
              <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
                F1
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>05</div>
        <div className="grid col-span-3 gap-4 grid-cols-subgrid">
          <div className="">06</div>
          <div className="">06</div>
          <div className="">06</div>
        </div>
        <div className="grid col-span-3 gap-4 grid-cols-subgrid">
          <div className="">06</div>
          <div className="">06</div>
          <div className="">06</div>
          <div className="">06</div>
          <div className="">06</div>
          <div className="">06</div>
        </div>
      </div>
    </div>
  )
}
