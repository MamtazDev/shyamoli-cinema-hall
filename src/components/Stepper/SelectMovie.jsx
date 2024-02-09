import React from 'react'
import show from '../../assets/selectMovie.png';
import DateSelect from './DateSelect';
import './SelectMovie.css';
import AvailAbleMovieTime from './AvailAbleMovieTime';

const SelectMovie = ({ onNext }) => {
    return (
        <>
            <div className='mt-[32px]'>
                <h2 className='text-primary text-[30px] font-bold leading-[30px] mb-[36px] '> Select Movie</h2>

                {[1, 2, 3, 4, 5].map((data) => (
                    <>
                        <div className="grid grid-cols-12 gap-[32px]">
                            <div className="col-span-12 lg:col-span-3">
                                <img src={show} alt="" />
                            </div>

                            <div className="col-span-12 lg:col-span-9">

                                <div>
                                    <div className='p-[24px] bg-[#1A1A1A] rounded-[12px] border border-[#262626] '>
                                        <h2 className='mb-[8px] text-[24px] font-bold leading-[32px] '>MR-9: Do or Die </h2>
                                        <p className='text-base font-normal   leading-[24px] text-[#F1F5F980] flex gap-[16px]'>Movie • Thriller/Mystery <span>2h 15m</span></p>
                                    </div>
                                    <DateSelect />
                                    <AvailAbleMovieTime />
                                </div>
                                <div className='bg-[#2C2C2C] h-[1px] w-full my-[50px]'></div>
                            </div>

                        </div>
                    </>

                ))}

                <div className="flex flex-col items-center gap-[12px] justify-center pb-[80px]">
                    <button onClick={onNext} className='max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base   '>Purchase Now</button>
                    <p className='text-sm font-normal '>You’ve Selected <span>2</span> Movies</p>
                </div>
            </div>


        </>
    )
}

export default SelectMovie