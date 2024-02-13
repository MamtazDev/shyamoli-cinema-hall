import React from 'react'
import show1 from '../../assets/show1.svg'
import show2 from '../../assets/show2.svg'
import show3 from '../../assets/show3.png'
import show4 from '../../assets/show4.png'
import { Link } from 'react-router-dom'
const NowShowoing = () => {
    return (
        <div className='bg-black pt-[80px] pb-[96px] '>
            <div className='max-w-[1280px] w-full mx-auto'>
                <h1 className='text-primary text-[36px] font-bold text-center mb-[36px]'>Now Showing</h1>

                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-3">
                        <Link to="/movie-details">  <img src={show1} alt="show1" /></Link>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <Link to="/movie-details">  <img src={show2} alt="show1" /></Link>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <Link to="/movie-details"> <img src={show3} alt="show1" /></Link>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <Link to="/movie-details">  <img src={show4} alt="show1" /></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NowShowoing