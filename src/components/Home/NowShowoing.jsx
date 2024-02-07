import React from 'react'
import show1 from '../../assets/show1.svg'
import show2 from '../../assets/show2.svg'
import show3 from '../../assets/show3.png'
import show4 from '../../assets/show4.png'
const NowShowoing = () => {
    return (
        <div className='bg-black pt-[80px] mb-[96px] '>
            <div className='max-w-[1280px] w-full mx-auto'>
                <h1 className='text-primary text-[36px] font-bold text-center mb-[36px]'>Now Showing</h1>

                <div className="grid grid-cols-12">
                    <div className="hover_img col-span-12 lg:col-span-3">
                        <img   src={show1} alt="show1" />
                    </div>
                    <div className="hover_img col-span-12 lg:col-span-3">
                        <img   src={show2} alt="show1" />
                    </div>
                    <div className="hover_img col-span-12 lg:col-span-3">
                        <img   src={show3} alt="show1" />
                    </div>
                    <div className="hover_img col-span-12 lg:col-span-3">
                        <img   src={show4} alt="show1" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NowShowoing