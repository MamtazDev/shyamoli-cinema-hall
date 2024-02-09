import React from 'react'
import show from '../../assets/selectMovie.png';
import DateSelect from './DateSelect';
import './SelectMovie.css';

const SelectMovie = () => {
    return (
        <>
            <div className='mt-[32px]'>
                <h2 className='text-primary text-[30px] font-bold leading-[30px] mb-[36px] '> Select Movie</h2>

                <div className="grid grid-cols-12 gap-[32px]">
                    <div className="col-span-12 lg:col-span-3">
                        <img src={show} alt="" />
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        <div className='p-[24px] bg-[#1A1A1A] rounded-[12px] border border-[#262626] '>
                            <h2 className='mb-[8px] text-[24px] font-bold leading-[32px] '>MR-9: Do or Die </h2>
                            <p className='text-base font-normal   leading-[24px] text-[#F1F5F980] flex gap-[16px]'>Movie • Thriller/Mystery <span>2h 15m</span></p>
                        </div>

                        <DateSelect />





                    </div>
                </div>

            </div>


        </>
    )
}

export default SelectMovie