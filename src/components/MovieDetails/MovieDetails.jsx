import React from 'react'
import show3 from '../../assets/movied1.png';
import MovieDetailsCard from './MovieDetailsCard';

const MovieDetails = () => {
    return (
        <div className='bg-[#141414]'>
            <div className='max-w-[1280px] w-full mx-auto py-[160px] '>
                <p className='text-[#FF3D48] text-[30px] font-bold  mb-[36px] '>Movie Details </p>

                <div className="grid grid-cols-12 gap-[32px]">
                    <div className="col-span-12 lg:col-span-4">
                        <div className='p-[24px] bg-[#1A1A1A]'>
                            <img className='mb-[24px] w-full' src={show3} alt="" />
                            <button className='bg-primary py-[16px]  w-full rounded-[8px] shadow-button  text-white text-lg font-semibold '>Get Tickets</button>
                        </div>
                    </div>


                    <div className="col-span-12 lg:col-span-8">
                            <MovieDetailsCard />

                    </div>
                </div>



            </div>


        </div>
    )
}

export default MovieDetails