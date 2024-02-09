import React from 'react'
import show1 from '../../assets/ushow.png'
import show2 from '../../assets/ushow2.png'
import show3 from '../../assets/ushow3.png'

const UpComingShowCards = () => {
    
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-4">
                    <div>
                        <img className='mb-[24px]' src={show1} alt="" />
                        <p className='text-[20px] font-bold text-white mb-[12px] '>Fighter</p>
                        <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                        <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div>
                        <img className='mb-[24px]' src={show2} alt="" />
                        <p className='text-[20px] font-bold text-white mb-[12px] '>Madame Web</p>
                        <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                        <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div>
                        <img className='mb-[24px]' src={show3} alt="" />
                        <p className='text-[20px] font-bold text-white mb-[12px] '>Kalki 2898 AD</p>
                        <p className='text-base font-normal text-[#94A3B8] mb-[8px]'>2h 15m • Movie • Thriller/Mystery</p>
                        <p className='text-base font-normal text-[#94A3B8]'>Released : December 24, 2023</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpComingShowCards