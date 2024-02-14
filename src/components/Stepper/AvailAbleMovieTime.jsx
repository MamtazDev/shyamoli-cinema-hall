import React, { useState } from 'react'

const AvailAbleMovieTime = () => {
    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    return (
        <>
            <div className='p-[24px] bg-[#1A1A1A] rounded-[12px] border border-[#262626] mt-[50px]'>
                <h2 className='mb-[24px] text-[20px] font-semibol leading-[28px] '>Available Movie Time</h2>

                <div className="flex lg:flex-row flex-col gap-[20px] items-center">
                    <div onClick={handleActive} className={` w-full  py-[14px] px-[20px]  lg:w-fit rounded-[8px] cursor-pointer p-[10px] text-center ${active ? "bg-white border " : "rounded-md border border-gray-400 opacity-40"} `}>
                        <p className={` text-base font-medium leading-[28px]  ${active ? "text-[#2B2B2B]" : "text-[#A6A6A6]"}`}>12:00 PM</p>

                    </div>
                    <div onClick={handleActive} className={`  w-full py-[14px] px-[20px]   lg:w-fit rounded-[8px] cursor-pointer p-[10px] text-center ${active ? "bg-white border " : "rounded-md border border-gray-400 opacity-40"} `}>
                        <p className={` text-base font-medium leading-[28px]  ${active ? "text-[#2B2B2B]" : "text-[#A6A6A6]"}`}>2:40 PM</p>

                    </div>
                    <div onClick={handleActive} className={` w-full  py-[14px] px-[20px]  lg:w-fit rounded-[8px] cursor-pointer p-[10px] text-center ${active ? "bg-white border " : "rounded-md border border-gray-400 opacity-40"} `}>
                        <p className={` text-base font-medium leading-[28px]  ${active ? "text-[#2B2B2B]" : "text-[#A6A6A6]"}`}>5:30 PM</p>

                    </div>
                    <div onClick={handleActive} className={`  w-full py-[14px] px-[20px]   lg:w-fit rounded-[8px] cursor-pointer p-[10px] text-center ${active ? "bg-white border " : "rounded-md border border-gray-400 opacity-40"} `}>
                        <p className={` text-base font-medium leading-[28px]  ${active ? "text-[#2B2B2B]" : "text-[#A6A6A6]"}`}>8:00 PM</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AvailAbleMovieTime