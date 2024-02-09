import React from 'react'
import t1 from '../../../assets/tickettype1.png'
import t2 from '../../../assets/tickettype2.png'
const TicketType = () => {
    return (
        <div>
            <div className='flex justify-center gap-[32px] '>
                <div className='text-white buy_tickets p-[12px] '>
                    <h3 className=' text-[32px] font-bold leading-[32px] mb-[12px]  '>Premium</h3>
                    <p className=' text-[26px] font-medium leading-[32px]'>Ticket</p>
                    <small className='text-[16px] font-medium leading-[32px] mb-[12px]'>300Tk</small>
                    <img className='mt-[32px] mb-[12px]' src={t1} alt="" />
                    <p className='text-base font-semibold leading-[24px]  text-[#C6C6C6E6]'>XXXXXXX</p>
                </div>
                <div className='text-white buy_tickets1 p-[12px] '>
                    <h3 className=' text-[32px] font-bold leading-[32px] mb-[12px]  '>Premium</h3>
                    <p className=' text-[26px] font-medium leading-[32px]'>Ticket</p>
                    <small className='text-[16px] font-medium leading-[32px] mb-[12px]'>300Tk</small>
                    <img className='mt-[32px] mb-[12px]' src={t1} alt="" />
                    <p className='text-base font-semibold leading-[24px]  text-[#C6C6C6E6]'>XXXXXXX</p>
                </div>
            </div>

        </div>
    )
}

export default TicketType