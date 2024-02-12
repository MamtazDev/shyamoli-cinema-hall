import React from 'react'
import Seats from '../../../utils/seats'
export const SeatsArrangeMent = () => {

  const evenIdSeats = [];
  const oddIdSeats = [];

  Seats.forEach(seat => {
    if (seat.id % 2 === 0) {
      evenIdSeats.push(seat);
    } else {
      oddIdSeats.push(seat);
    }
  });
  console.log(evenIdSeats)
  console.log(oddIdSeats)
  // export { evenIdSeats, oddIdSeats };

  return (
    <div className='max-w-[927px] mx-auto'>
      <div className="grid grid-cols-12 gap-[34px] ">
        <div className="col-span-6">

          <div className='flex gap-[12px]'>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
              F1
            </div>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
              F2
            </div>
          </div>
          <div className='flex gap-[12px] mt-[12px]'>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
              F5
            </div>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
              F6
            </div>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
              F7
            </div>
          </div>
          <div className="flex justify-start">
            <div className='grid grid-cols-12 gap-[12px] mt-[12px]'>
              {
                oddIdSeats.map((data) => (
                  <>
                    <div className='col-span-2 w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
                      {data.seatNumber}
                    </div>
                  </>
                ))
              }

            </div>
          </div>
        </div>
        {/* right side seats */}
        <div className="col-span-6">
          <div className='flex gap-[12px] justify-end'>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
              F1
            </div>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
              F2
            </div>
          </div>
          <div className='flex gap-[12px] mt-[12px] justify-end '>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
              F5
            </div>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
              F6
            </div>
            <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
              F7
            </div>
          </div>
          <div className="flex justify-end">
            <div className='grid grid-cols-12 gap-[12px] mt-[12px] '>
              {
                oddIdSeats.map((data) => (
                  <>
                    <div className='col-span-2 w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
                      {data.seatNumber}
                    </div>
                  </>
                ))
              }
            </div>
          </div>

          {/* seats-common */}

        </div>
      </div>


    </div>
  )
}
