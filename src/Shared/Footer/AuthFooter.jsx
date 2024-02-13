import React from 'react'
import { Link } from 'react-router-dom'

const AuthFooter = () => {
    return (
        <div className=' bottom-0 left-[50%]'>
            <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:max-w-[795px] mx-auto'>
                <p className='text-[#E2E8F0] text-base leading-[24px] font-normal '>© 2024 Shymoli Cinema Hall. All rights reserved.</p>
                <ul className='flex gap-[24px] text-[#E2E8F0] text-base font-normal leading-[24px] '>
                    <Link to='/'><li>Terms</li></Link>
                    <Link to='/'><li>Privacy </li></Link>
                    <Link to='/'><li>Cookies</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default AuthFooter