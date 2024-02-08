import React from 'react'
import date from '../../assets/date.png'
import available from '../../assets/available.png'
import greyStar from '../../assets/greyrating.svg'
import redStar from '../../assets/redrating.png'
import halfStar from '../../assets/halfstar.png'
import Cast from './Cast'

const MovieDetailsCard = () => {
    return (
        <>
            <div className='flex flex-col gap-[32px]'>
                <div className='p-[24px] bg-[#1A1A1A] text-white border border-[#262626] rounded-[12px] '>
                    <h4 className='text-[24px] font-bold leading-[32px] mb-[12px]  '>MR-9: Do or Die </h4>
                    <p className='text-base font-normal   leading-[24px] text-[#F1F5F9] flex gap-[16px] mb-[24px]'>Movie • Thriller/Mystery <span>2h 15m</span></p>
                    <div>
                        <h6 className='text-lg text-[#999] mb-[12px]'>Description</h6>
                        <p className='text-lg font-normal leading-[28px] text-white '>Masud Rana or MR 9 is the best spy of Bangladesh Counter Intelligence (BCI). The film revolves with the espionage action of Masud Rana.</p>

                    </div>
                </div>


                {/*  */}
                <div className='p-[24px] bg-[#1A1A1A] text-white border border-[#262626] rounded-[12px] flex flex-col gap-[24px] '>

                    <div>
                        <h6 className='text-lg text-[#999] mb-[12px] flex gap-[4px] items-center'><img src={date} alt="" /> Released Year</h6>
                        <p className='text-[20px] font-medium leading-[28px] text-white '>2023</p>
                    </div>

                    <div>
                        <h6 className='text-lg text-[#999] mb-[12px] flex gap-[4px] items-center'><img src={available} alt="" /> Available Languages</h6>

                        <div className='flex gap-[10px] items-center'>
                            <button className='py-[8px] px-[14px] bg-[#141414] border border-[#262626] rounded-[8px] text-lg text-normal leading-[28px] '>English</button>
                            <button className='py-[8px] px-[14px] bg-[#141414] border border-[#262626] rounded-[8px] text-lg text-normal leading-[28px] '>Bangla</button>
                            <button className='py-[8px] px-[14px] bg-[#141414] border border-[#262626] rounded-[8px] text-lg text-normal leading-[28px] '>Hindi</button>
                        </div>
                    </div>
                    {/* rating */}
                    <div>
                        <h6 className='text-lg text-[#999] mb-[12px] flex gap-[4px] items-center'><img src={greyStar} alt="greystar" />Ratings</h6>


                        <div className=' bg-[#141414] border border-[#262626] rounded-[8px] p-[16px]  text-lg text-medium leading-[28px] '>
                            <p>IMDb</p>
                            <div className='flex gap-[2px] items-center '>
                                <img src={redStar} alt="redStar" />
                                <img src={redStar} alt="redStar" />
                                <img src={redStar} alt="redStar" />
                                <img src={redStar} alt="redStar" />
                                <img src={halfStar} alt="redStar" />
                                <p>4.5</p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* cast */}
                <div className='p-[24px] bg-[#1A1A1A] text-white border border-[#262626] rounded-[12px] flex flex-col gap-[24px] '>
                    <Cast />
                </div>
            </div>

        </>
    )
}

export default MovieDetailsCard