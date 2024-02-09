/* eslint-disable react/prop-types */

import './Tickets.css';
import TicketType from './TicketType';
import TicketQuantity from './TicketQuantity';

const BuyTickets = ({ onNext }) => {

    return (
        <div>
            <div className='mt-[32px]'>
                <h2 className='text-primary text-[30px] font-bold leading-[30px] mb-[36px] '>Buy Tickets</h2>
                <div className='p-[32px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px]'>
                    <div className='text-center text-[24px] font-semibold mb-[24px] '>
                        <p>Select Ticket Type</p>
                    </div>
                    <div>
                        <TicketType />
                    </div>
                </div>
                {/* ticket quantity */}
                <TicketQuantity />
                <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px] pb-[80px] ">
                    <button onClick={onNext} className='max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base'>onNext</button>
                </div>
            </div>
        </div>
    )
}

export default BuyTickets