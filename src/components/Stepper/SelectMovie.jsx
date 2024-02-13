/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import show from '../../assets/selectMovie.png';
import selected from '../../assets/selectmovieIcon.png';
import DateSelect from './DateSelect';
import './SelectMovie.css';
import AvailAbleMovieTime from './AvailAbleMovieTime';
import StepperButtons from './StepperButtons';
import back from '../../assets/back.svg';
import { Link } from 'react-router-dom';

const SelectMovie = ({ complete, handleNext }) => {

    const [selectMovie, setSelectMovie] = useState(false)
    const handleSelect = () => {
        setSelectMovie(!selectMovie)
    }

    return (
        <>
            <div className='mt-[36px]'>
                <Link to="/movie-details">
                    <button className="text-lg border-0 btn mb-[32px] " ><img src={back} alt="back" />Back</button>
                </Link>
                <h2 className='text-primary text-[30px] font-bold leading-[30px] mb-[36px] '> Select Movie</h2>

                {[1, 2, 3, 4].map((data) => (
                    <>
                        <div key={data} className="grid grid-cols-12 gap-[32px]">
                            <div onClick={handleSelect} className="col-span-12 lg:col-span-3 ">
                                <div className={` border-[2px]  rounded-[16px] cursor-pointer ${selectMovie ? "border-[#FF3D48] " : "border-[#141414]"} relative h-[440px]`}>
                                    <img src={show} alt="show" />
                                    <div className='absolute right-[-2px] top-[0px]  w-[80px] flex justify-center items-center'>
                                        {selectMovie && <img src={selected} alt="selected" />}
                                    </div>
                                </div>
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
                {!complete && (
                    <StepperButtons onNext={handleNext}>
                        Purchase Now
                    </StepperButtons>
                )}
                <p className='text-sm font-normal '>You’ve Selected <span>2</span> Movies</p>
            </div>


        </>
    )
}

export default SelectMovie