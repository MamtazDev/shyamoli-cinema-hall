import React from 'react'
import google from '../../assets/google.svg'
import facebook from '../../assets/face.png'
import AuthButton from './AuthButton'

const LoginWithButtons = () => {
    return (
        <>

            <div className='flex items-center gap-[14px] mb-[20px] mt-[24px]'>
                <div className='h-[1px] bg-[#E9EBED]  w-[193px]'></div>
                <p className='text-[#78828A] text-sm font-normal '>Or login with</p>
                <div className='h-[1px] bg-[#E9EBED]  w-[193px]'></div>
            </div>

            <div className='flex flex-col gap-[20px]'>
                <button className='w-full py-[12px] bg-[#232323] rounded-[8px] text-base font-semibold text-white flex gap-[16px] justify-center '>
                    <img src={google} alt="" />
                    Login with Google</button>
                <button className='w-full py-[12px] bg-[#232323] rounded-[8px] text-base font-semibold text-white flex gap-[16px] justify-center '>
                    <img src={facebook} alt="" />
                    Login with Facebook</button>
            </div>
            <div className="mt-[36px] mb-[22px]" >
                <AuthButton>Login</AuthButton>
            </div>

            <div className="text-center">

                <p className='text-base text-[#9CA4AB] font-medium '>Don’t have an account? <span className='text-primary' > Register</span></p>
            </div>

        </>
    )
}

export default LoginWithButtons