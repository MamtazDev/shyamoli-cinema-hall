import React from 'react'
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'
import g4 from '../../assets/g4.png'

const Gallary = () => {
    return (
        <>
            <div className='bg-black pb-[80px] pt-[80px] '>
                <h1 className='text-primary text-[36px] font-bold text-center mb-[24px]'>Our Gallery</h1>
                <div className='flex lg:flex-row flex-col gap-[32px] justify-center mb-[32px] lg:mx-0 mx-[24px]'>
                    <div className="hover_img">
                        <img src={g1} alt="gallary" />
                    </div>
                    <div className="hover_img">
                        <img src={g2} alt="gallary" />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col gap-[32px] justify-center lg:mx-0 mx-[24px]'>
                    <div className="hover_img">
                        <img src={g3} alt="gallary" />
                    </div>
                    <div className="hover_img">
                        <img src={g4} alt="gallary" />
                    </div>
                </div>


            </div>


        </>
    )
}

export default Gallary