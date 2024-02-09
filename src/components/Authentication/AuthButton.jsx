/* eslint-disable react/prop-types */
import React from 'react'

const AuthButton = ({ children }) => {
    return (
        <div>

            <button className='py-[16px] bg-[#FF3D48] rounded-[8px] text-[#F9F9F9] font-[800] text-base  w-full '>{children}</button>
        </div>
    )
}

export default AuthButton