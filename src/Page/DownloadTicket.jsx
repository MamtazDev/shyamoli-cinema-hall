import React from 'react'
import TicketCard from '../components/TicketCard/TicketCard'

const DownloadTicket = () => {
    return (
        <div className='' >
            <div className='bg-[#141414] pt-[162px] pb-[80px]'>

                <div className='max-w-[1280px] rounded-[12px] border border-[#262626] mx-auto w-full  text-white p-[32px] bg-[#1A1A1A] '>
                    <TicketCard />
                    <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px]  ">
                        <button  className='max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base'>Download All Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadTicket