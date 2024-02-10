import React from 'react'
import PremiumTicketCard from '../components/TicketCard/PremiumTicketCard'

export const PremiumTicket = () => {
    return (
        <div>

            <div className='' >
                <div className='bg-[#141414] pt-[162px] pb-[80px]'>

                    <div className='max-w-[1280px] rounded-[12px] border border-[#262626] mx-auto w-full  text-white p-[32px] bg-[#1A1A1A] '>
                        <div>
                            <PremiumTicketCard />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
