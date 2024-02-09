/* eslint-disable react/prop-types */
import React from 'react'

const Divider = ({ text, dividerW }) => {

    return (
        <>
            <div className='flex items-center gap-[14px] mb-[20px] mt-[24px]'>
                <div className={`h-[1px] bg-[#E9EBED]  w-[${dividerW}]`}></div>
                <p className='text-[#78828A] text-sm font-normal '>{text}</p>
                <div className={`h-[1px] bg-[#E9EBED]   w-[${dividerW}]`}></div>

                {/* <div className='h-[1px] bg-[#E9EBED]  w-[193px]'></div> */}
            </div>
        </>
    )
}

export default Divider