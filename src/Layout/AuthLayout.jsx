import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthFooter from '../Shared/Footer/AuthFooter'

const AuthLayout = () => {
    return (
        <div className='bg-[#141414] py-[80px] h-[100vh]'>

            <Outlet />

            <AuthFooter />

        </div>
    )
}

export default AuthLayout