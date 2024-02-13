import React from 'react'
import Seats from '../../../utils/seats'

export const SeatsArrangeMent = () => {

  const evenIdSeats = [];
  const oddIdSeats = [];
  for (let i = 10; i < Seats.length; i++) {
    const seat = Seats[i];
    if (seat.id % 2 === 0) {
      evenIdSeats.push(seat);
    } else {
      oddIdSeats.push(seat);
    }
  }

  console.log("Even ID Seats:", evenIdSeats);
  console.log("Odd ID Seats:", oddIdSeats);

  const firstTwoEven = Seats.filter((seat) => seat.id % 2 === 0).slice(0, 2);
  const firstTwoOdd = Seats.filter((seat) => seat.id % 2 !== 0).slice(0, 2);
  const firstThreeEven = Seats.filter((seat) => seat.id % 2 === 0).slice(2, 5);
  const firstThreeOdd = Seats.filter((seat) => seat.id % 2 !== 0).slice(2, 5);


  return (
    <div className='max-w-[927px] mx-auto'>
      <div className="grid grid-cols-12 gap-[34px] ">
        <div className="col-span-6">

          <div className='flex gap-[12px]'>
            {firstTwoOdd.map((data) => (<>
              <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
                {data.seatNumber}
              </div>
            </>))
            }
          </div>
          <div className='flex gap-[12px] mt-[12px]'>
            {firstThreeOdd.map(data => (
              <>
                <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
                  {data.seatNumber}
                </div>
              </>
            ))}
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
            {firstTwoEven.map((data) => (<>
              <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium  '>
                {data.seatNumber}
              </div>
            </>))
            }
          </div>
          <div className='flex gap-[12px] mt-[12px] justify-end '>
            {firstThreeEven.map(data => (
              <>
                <div className='w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium'>
                  {data.seatNumber}
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-end">
            <div className='grid grid-cols-12 gap-[12px] mt-[12px] '>
              {
                oddIdSeats.map((data) => (
                  <>
                    <div className={`col-span-2 w-[66px] h-[48px] bg-[#3D3D3D] rounded-[4px] opacity-[0.6] flex justify-center items-center text-[20px] font-medium`}>
                      {data.seatNumber}
                    </div>
                  </>
                ))
              }
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}
