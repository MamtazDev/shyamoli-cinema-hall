import React from 'react'
import show3 from '../../assets/movied1.png';
import MovieDetailsCard from './MovieDetailsCard';
import './MovieDetails.css'
import { Link } from 'react-router-dom';
import UpComingShow from '../Home/UpComingShow';

const MovieDetails = () => {

    return (
        <div>
            <div className='bg-[#141414]'>
                <div className='max-w-[1280px] w-full mx-auto pt-[160px] pb-[80px] '>
                    <p className='text-primary text-[30px] font-bold  mb-[36px]  lg:mx-0 mx-[24px] '>Movie Details </p>

                    <div className="grid grid-cols-12 gap-[32px]  lg:mx-0 mx-[24px]">
                        <div className="col-span-12 lg:col-span-4">
                            <div className='p-[24px] bg-[#1A1A1A]'>
                                <img className='mb-[24px] w-full' src={show3} alt="" />
                                <Link to="/buyTickets">
                                    <button className='bg-primary hover:bg-transparent border border-[#FF3D48] hover:text-primary py-[16px]  w-full rounded-[8px] shadow-button  text-white text-lg font-semibold '>Get Tickets</button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-8">
                            <MovieDetailsCard />
                        </div>
                    </div>
                </div>
            </div>
            <UpComingShow />
        </div>
    )
}

export default MovieDetails