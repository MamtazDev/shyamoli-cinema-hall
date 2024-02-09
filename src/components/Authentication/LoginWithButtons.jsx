/* eslint-disable react/prop-types */
import React from 'react'
import google from '../../assets/google.svg'
import facebook from '../../assets/face.png'
import AuthButton from './AuthButton'
import { Link } from 'react-router-dom'
import Divider from './Divider'

const LoginWithButtons = ({ text, action, dividerW }) => {
    return (
        <>
            <Divider text={text} dividerW={dividerW} />

            <div className='flex flex-col gap-[20px]'>
                <button className='w-full py-[12px] bg-[#232323] rounded-[8px] text-base font-semibold text-white flex gap-[16px] justify-center '>
                    <img src={google} alt="" />
                    Login with Google</button>
                <button className='w-full py-[12px] bg-[#232323] rounded-[8px] text-base font-semibold text-white flex gap-[16px] justify-center '>
                    <img src={facebook} alt="" />
                    Login with Facebook</button>
            </div>
            <div className="mt-[36px] mb-[22px]" >
                <AuthButton>{action}</AuthButton>
            </div>

            <div className="text-center">
                <Link to={`${action === "Register" ? "/auth/login" : "/auth/signup"}`} className='text-base text-[#9CA4AB] font-medium '>

                    {action === "Register" ? "Already have an account?" :"Don’t have an account?"}

                    <span className='text-primary' > {action === "Register" ? "Login" : "Register"}</span></Link>
            </div>

        </>
    )
}

export default LoginWithButtons