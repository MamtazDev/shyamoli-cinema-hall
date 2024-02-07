import React from 'react'
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'
import g4 from '../../assets/g4.png'



const Gallary = () => {
    return (
        <>
            <div className='bg-black pb-[80px]'>
                <h1 className='text-primary text-[36px] font-bold text-center mb-[24px]'>Our Gallery</h1>
                <div className='flex lg:flex-row flex-col gap-[32px] justify-center mb-[32px]'>
                    <img src={g1} alt="gallary" />
                    <img src={g2} alt="gallary" />
                </div>
                <div className='flex lg:flex-row flex-col gap-[32px] justify-center '>
                    <img src={g3} alt="gallary" />
                    <img src={g4} alt="gallary" />
                </div>


            </div>


        </>
    )
}

export default Gallary