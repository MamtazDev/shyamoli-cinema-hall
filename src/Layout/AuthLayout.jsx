import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthFooter from '../Shared/Footer/AuthFooter'

const AuthLayout = () => {
    return (
        <div className={`bg-[#141414] py-[80px] ${location.pathname == "/auth/verify" && "h-[1021px]"} `} >

            <Outlet />

            <AuthFooter />

        </div>
    )
}

export default AuthLayout