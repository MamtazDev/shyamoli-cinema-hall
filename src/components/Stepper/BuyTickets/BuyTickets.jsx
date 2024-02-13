/* eslint-disable react/prop-types */

import './Tickets.css';
import TicketType from './TicketType';
import TicketQuantity from './TicketQuantity';
import StepperButtons from '../StepperButtons';

const BuyTickets = ({ complete, handleNext }) => {

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
                {!complete && (
                    <StepperButtons onNext={handleNext}>
                        Next
                    </StepperButtons>
                )}
            </div>
        </div>
    )
}

export default BuyTickets