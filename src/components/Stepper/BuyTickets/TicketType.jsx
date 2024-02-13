import React, { useState } from 'react';
import t1 from '../../../assets/tickettype1.png';
import selectTypecheck from '../../../assets/selectTypecheck.png';

const TicketType = () => {
    const [selectPremium, setSelectPremium] = useState(false);
    const [selectDeluxe, setSelectDeluxe] = useState(false);
    const handleSelectPremium = () => {
        setSelectPremium(true);
        setSelectDeluxe(false);
    };

    const handleSelectDeluxe = () => {
        setSelectDeluxe(true);
        setSelectPremium(false);
    };
    return (
        <div>
            <div className='flex justify-center gap-[32px] '>
                <div
                    onClick={handleSelectPremium}
                    className={`text-white buy_tickets border p-[12px]  relative ${selectPremium ? ' border-[#FF3D48]' : 'border-[#141414]'
                        } cursor-pointer`}
                >
                    {selectPremium && <div className='absolute top-[12px] right-[10px]'>
                        <img src={selectTypecheck} alt='' />
                    </div>}
                    <h3 className=' text-[32px] font-bold leading-[32px] mb-[12px]  '>Premium</h3>
                    <p className=' text-[26px] font-medium leading-[32px]'>Ticket</p>
                    <small className='text-[16px] font-medium leading-[32px] mb-[12px]'>300Tk</small>
                    <img className='mt-[32px] mb-[12px]' src={t1} alt='' />
                    <p className='text-base font-semibold leading-[24px]  text-[#C6C6C6E6]'>XXXXXXX</p>
                </div>

                <div
                    onClick={handleSelectDeluxe}
                    className={`text-white buy_tickets1 border  p-[12px]  relative ${selectDeluxe ? ' border-[#FF3D48]' : 'border-[#141414]'
                        } cursor-pointer`}
                >
                    {selectDeluxe && <div className='absolute top-[12px] right-[10px]'>
                        <img src={selectTypecheck} alt='' />
                    </div>}
                    <h3 className=' text-[32px] font-bold leading-[32px] mb-[12px]  '>Deluxe</h3>
                    <p className=' text-[26px] font-medium leading-[32px]'>Ticket</p>
                    <small className='text-[16px] font-medium leading-[32px] mb-[12px]'>200Tk</small>
                    <img className='mt-[32px] mb-[12px]' src={t1} alt='' />
                    <p className='text-base font-semibold leading-[24px]  text-[#C6C6C6E6]'>XXXXXXX</p>
                </div>
            </div>
        </div>
    );
};

export default TicketType;
